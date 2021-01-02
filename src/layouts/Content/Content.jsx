import React from "react";
import UserTable from "../../components/UserTable";
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
        </Paper>
    );
};
export default Content;
