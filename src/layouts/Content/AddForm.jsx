import React, { useCallback, useState } from "react";
import ACTION from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Modal, makeStyles, TextField, Typography, Divider, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    addFormContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    addForm: {
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    fileContainer: {
        padding: theme.spacing(2, 0),
        outline: "none",
    },
}));
const AddForm = () => {
    //state
    const [character, setCharacter] = useState({
        file: null,
        name: "",
        koName: "",
        actor: "",
        gender: "Male",
    });
    //redux
    const visibility = useSelector(state => state.visibilityReducer);

    const dispatch = useDispatch();

    const handleAddForm = useCallback(() => {
        dispatch({ type: ACTION.SET_ADDFORM_VISIBILITY });
    }, [dispatch]);

    const addCharacter = useCallback(() => {
        dispatch({ type: ACTION.ADD_CHARACTER, payload: character });
    }, [dispatch, character]);

    //eventHandlers
    const handleGenderChange = event => {
        setCharacter({ ...character, gender: event.target.value });
    };
    const handleNameChange = event => {
        setCharacter({ ...character, name: event.target.value });
    };
    const handleKoNameChange = event => {
        setCharacter({ ...character, koName: event.target.value });
    };
    const handleActorChange = event => {
        setCharacter({ ...character, actor: event.target.value });
    };
    const handleFileChange = event => {
        setCharacter({ ...character, file: window.URL.createObjectURL(event.target.files[0]) });
    };

    const handleSubmit = event => {
        event.preventDefault();
        addCharacter();
        setCharacter({
            file: null,
            name: "",
            koName: "",
            actor: "",
            gender: "Male",
            id: Date.now(),
        });
        handleAddForm();
        return true;
    };
    const classes = useStyles();
    return (
        <Modal color="primary" className={classes.addFormContainer} open={visibility.addForm} onClose={handleAddForm}>
            <form onSubmit={handleSubmit} className={classes.addForm}>
                <Typography variant="h4">Add User!</Typography>
                <TextField value={character.name} onChange={handleNameChange} label="Name"></TextField>
                <TextField value={character.koName} onChange={handleKoNameChange} label="KoName"></TextField>
                <TextField value={character.actor} onChange={handleActorChange} label="Actor"></TextField>
                <TextField select onChange={handleGenderChange} value={character.gender} label="Gender">
                    {["Male", "Female"].map(v => (
                        <option key={v} value={v}>
                            {v}
                        </option>
                    ))}
                </TextField>
                <div className={classes.fileContainer}>
                    <input accept="image/*" id="fileInput" type="file" file={character.file} onChange={handleFileChange}></input>
                </div>
                <div className={classes.buttonContainer}>
                    <Button type="submit" size="small" variant="contained" color="primary">
                        Accept
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default AddForm;
