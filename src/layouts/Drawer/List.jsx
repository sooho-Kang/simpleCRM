import React from "react";
import { List as MUIList, ListItem, ListItemText, ListItemIcon, makeStyles } from "@material-ui/core";
import { Mail, AccountCircle, YouTube } from "@material-ui/icons";

const useStyles = makeStyles({
    list: {
        width: "240px",
    },
});
function List(props) {
    const classes = useStyles();
    return (
        <MUIList className={classes.list}>
            <ListItem button>
                <ListItemIcon>
                    <AccountCircle></AccountCircle>
                </ListItemIcon>
                <ListItemText>Accout</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Mail></Mail>
                </ListItemIcon>
                <ListItemText>Mail</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <YouTube></YouTube>
                </ListItemIcon>
                <ListItemText>Youtube</ListItemText>
            </ListItem>
        </MUIList>
    );
}

export default List;
