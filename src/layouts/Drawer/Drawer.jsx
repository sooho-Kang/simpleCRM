import React, { useCallback } from "react";
import { Drawer as MUIDrawer, makeStyles } from "@material-ui/core";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
import ACTION from "../../actions/actions";
const useStyles = makeStyles(theme => ({
    drawer: {
        width: "240px",
        backgroundColor: theme.palette.background.main,
    },
    list: {},
}));
function Drawer() {
    const visibility = useSelector(state => {
        return state.visibilityReducer;
    });

    const dispatch = useDispatch();

    const classes = useStyles();

    const setVisibility = useCallback(() => {
        dispatch({ type: ACTION.SET_SIDEBAR_VISIBILITY });
    }, [dispatch]);

    return (
        <MUIDrawer
            //
            classes={{ paper: classes.drawer }}
            variant="temporary"
            anchor="left"
            open={visibility.sidebar}
            onClose={setVisibility}
            children={<List className={classes.list}></List>}
        ></MUIDrawer>
    );
}

export default Drawer;
