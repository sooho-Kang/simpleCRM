import React, { useCallback, useState } from "react";
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
    Divider,
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
}));

const UserTable = () => {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfRows, setNumberOfRows] = useState(5);

    const characters = useSelector(state => state.charactersReducer);
    const dispatch = useDispatch();

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
                            <TableCell>#</TableCell>
                            <TableCell>Photo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>koName</TableCell>
                            <TableCell>Actor</TableCell>
                            <TableCell>Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.slice(currentPage * numberOfRows, currentPage * numberOfRows + numberOfRows).map((data, index) => (
                            <TableRow key={data.name}>
                                <TableCell>{currentPage * numberOfRows + index}</TableCell>
                                <TableCell>
                                    <img height="50px" width="50px" src={data.imageURL} alt={data.imageURL} />
                                </TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.koName}</TableCell>
                                <TableCell>{data.actor}</TableCell>
                                <TableCell>{data.gender}</TableCell>
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
