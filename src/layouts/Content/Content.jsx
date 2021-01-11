import React from "react";
import UserTable from "../../components/UserTable";
import AddForm from "../Content/AddForm";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {
        margin: theme.spacing(2),
    },
}));
const Content = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.content}>
            <UserTable></UserTable>
            <AddForm></AddForm>
        </Paper>
    );
};
export default Content;
