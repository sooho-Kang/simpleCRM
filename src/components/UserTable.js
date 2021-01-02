import React, { useState } from "react";
import {
    makeStyles,
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableFooter,
    TableRow,
    TableCell,
    TablePagination,
    Typography,
    Divider,
} from "@material-ui/core";
import Berlin from "../assets/Berlin.jpg";
import Denver from "../assets/Denver.jpg";
import Helsinki from "../assets/Helsinki.jpg";
import Moscow from "../assets/Moscow.jpg";
import Nairobi from "../assets/Nairobi.jpg";
import Oslo from "../assets/Oslo.jpg";
import Professor from "../assets/Professor.jpg";
import Rio from "../assets/Rio.jpg";
import Tokyo from "../assets/Tokyo.jpg";

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    tableTitle: {
        margin: theme.spacing(1),
    },
    imgContainer: {
        display: "flex",
        alignItems: "center",
    },
}));

const characters = [
    {
        name: "Professor",
        koName: "교수",
        imageURL: Professor,
        actor: "Alvaro Morte",
        gender: "Male",
    },
    {
        name: "Tokyo",
        koName: "도쿄",
        imageURL: Tokyo,
        actor: "Úrsula Corberó,",
        gender: "Female",
    },
    {
        name: "Berlin",
        koName: "베를린",
        imageURL: Berlin,
        actor: "Pedro Alonso",
        gender: "Male",
    },
    {
        name: "Nairobi",
        koName: "나이로비",
        imageURL: Nairobi,
        actor: "Alba Flores",
        gender: "Female",
    },
    {
        name: "Rio",
        koName: "리우",
        imageURL: Rio,
        actor: "Miguel Herran",
        gender: "Male",
    },
    {
        name: "Moscow",
        koName: "모스크바",
        imageURL: Moscow,
        actor: "Paco Tous",
        gender: "Male",
    },
    {
        name: "Denver",
        koName: "덴버",
        imageURL: Denver,
        actor: "Jaime Lorente",
        gender: "Male",
    },
    {
        name: "Helsinki",
        koName: "헬싱키",
        imageURL: Helsinki,
        actor: "Darko Peric",
        gender: "Male",
    },
    {
        name: "Oslo",
        koName: "오슬로",
        imageURL: Oslo,
        actor: "Roberto Garcia",
        gender: "Male",
    },
];
const UserTable = () => {
    const classes = useStyles();
    const [numberOfRows, setNumberOfRows] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <TableContainer component={Paper}>
            <Typography className={classes.tableTitle} variant="h6" component="div">
                Users
            </Typography>
            <Divider></Divider>
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
                    {characters.map((data, index) => (
                        <TableRow key={data.name}>
                            <TableCell>{index}</TableCell>
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
                <TableFooter>
                    <TablePagination count={numberOfRows} onChangePage={() => setCurrentPage()} rowsPerPage={5} page={currentPage}></TablePagination>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
