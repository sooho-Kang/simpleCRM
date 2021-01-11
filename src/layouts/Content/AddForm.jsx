import React, { useCallback } from "react";
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
    const [gender, setGender] = React.useState("Male");
    const [file, setFile] = React.useState("");
    const [name, setName] = React.useState("");
    const [koName, setKoName] = React.useState("");
    const [actor, setActor] = React.useState("");
    const handleGenderChange = event => {
        setGender(event.target.value);
    };
    const handleNameChange = event => {
        setName(event.target.value);
    };
    const handleKoNameChange = event => {
        setKoName(event.target.value);
    };
    const handleActorChange = event => {
        setActor(event.target.value);
        console.log(actor);
    };
    const handleFileChange = event => {
        setFile(event.target.value);
    };

    const visibility = useSelector(state => state.visibilityReducer);
    const dispatch = useDispatch();
    const handleAddForm = useCallback(() => {
        dispatch({ type: ACTION.SET_ADDFORM_VISIBILITY });
    }, [dispatch]);
    const addCharacter = useCallback(() => {
        dispatch({ type: ACTION.ADD_CHARACTER, payload: { gender, name, koName, actor, file } });
    }, [dispatch, gender, name, koName, actor, file]);
    const handleSubmit = event => {
        event.preventDefault();
        addCharacter();
        setFile("");
        setName("");
        setKoName("");
        setActor("");
        setGender("Male");
        handleAddForm();
        return true;
    };
    const classes = useStyles();
    return (
        <Modal color="primary" className={classes.addFormContainer} open={visibility.addForm} onClose={handleAddForm}>
            <form onSubmit={handleSubmit} className={classes.addForm}>
                <Typography variant="h4">Add User!</Typography>
                <TextField value={name} onChange={handleNameChange} label="Name"></TextField>
                <TextField value={koName} onChange={handleKoNameChange} label="KoName"></TextField>
                <TextField value={actor} onChange={handleActorChange} label="Actor"></TextField>
                <TextField select onChange={handleGenderChange} value={gender} label="Gender">
                    <option key="Man" value="Male">
                        {"Male"}
                    </option>
                    <Divider></Divider>
                    <option key="Woman" value="Female">
                        {"Female"}
                    </option>
                </TextField>
                <div className={classes.fileContainer}>
                    <input accept="image/*" id="fileInput" type="file" value={file} onChange={handleFileChange}></input>
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
