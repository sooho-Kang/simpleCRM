import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppBar, IconButton, Toolbar, Typography, makeStyles, InputBase, fade } from "@material-ui/core/";
import { Menu as MenuIcon, AccountCircle as AccountIcon, Search as SearchIcon } from "@material-ui/icons";
import ACTION from "../../actions/actions";

const useStyles = makeStyles(theme => ({
    toobar: {},
    title: {
        flexGrow: 2,
        padding: theme.spacing(0, 2),
    },
    search: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(0, 2),
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        borderRadius: "5px",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.45),
        },
        transition: ".3s",
    },
    input: {
        paddingLeft: theme.spacing(2),
        width: "100%",
    },
    account: {
        padding: theme.spacing(0, 2),
    },
}));
function Appbar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const setVisibility = useCallback(() => {
        dispatch({ type: ACTION.SET_SIDEBAR_VISIBILITY });
    }, [dispatch]);
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar className={classes.toobar}>
                <IconButton onClick={setVisibility} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6">
                    Appbar
                </Typography>
                <div className={classes.search}>
                    <SearchIcon></SearchIcon>
                    <InputBase placeholder="Search..." className={classes.input}></InputBase>
                </div>
                <AccountIcon className={classes.account}></AccountIcon>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar;
