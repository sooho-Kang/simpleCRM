import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION from "../actions/actions";
import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    tableTitle: {
        padding: theme.spacing(1, 2),
    },
    imgContainer: {
        display: "flex",
        alignItems: "center",
    },
    headerContainer: {
        display: "flex",
        padding: theme.spacing(0, 2),
        justifyContent: "space-between",
        alignItems: "center",
    },
    delete: {
        backgroundColor: theme.palette.error.main,
    },
    modify: {
        backgroundColor: theme.palette.success.main,
    },
}));

const UserTable = () => {
    const classes = useStyles();

    //state
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfRows, setNumberOfRows] = useState(5);

    //redux
    const characters = useSelector(state => state.charactersReducer);
    const dispatch = useDispatch();

    const handleDelete = useCallback(
        id => {
            dispatch({ type: ACTION.DELETE_CHARACTER, payload: { id } });
        },
        [dispatch]
    );
    const handleAddForm = useCallback(() => {
        dispatch({ type: ACTION.SET_ADDFORM_VISIBILITY });
    }, [dispatch]);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setNumberOfRows(+event.target.value);
        setCurrentPage(0);
    };
    return (
        <Paper>
            <div className={classes.headerContainer}>
                <Typography className={classes.tableTitle} variant="h6">
                    Users
                </Typography>
                <Button size="small" variant="contained" color="primary" onClick={handleAddForm}>
                    Add User
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">Photo</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">koName</TableCell>
                            <TableCell align="center">Actor</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.slice(currentPage * numberOfRows, currentPage * numberOfRows + numberOfRows).map((data, index) => (
                            <TableRow key={currentPage * numberOfRows + index}>
                                <TableCell align="center">{currentPage * numberOfRows + index}</TableCell>
                                <TableCell align="center">
                                    <img height="50px" width="50px" src={data.imageURL} alt={data.imageURL} />
                                </TableCell>
                                <TableCell align="center">{data.name}</TableCell>
                                <TableCell align="center">{data.koName}</TableCell>
                                <TableCell align="center">{data.actor}</TableCell>
                                <TableCell align="center">{data.gender}</TableCell>
                                <TableCell align="center">
                                    <Button size="small" onClick={() => handleDelete(data.id)} className={classes.delete}>
                                        DELETE
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                count={characters.length}
                onChangePage={handleChangePage}
                rowsPerPageOptions={[5, 10, 15]}
                rowsPerPage={numberOfRows}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                page={currentPage}
            ></TablePagination>
        </Paper>
    );
};

export default UserTable;
