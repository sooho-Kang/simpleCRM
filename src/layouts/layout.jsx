import React from "react";
import Drawer from "./Drawer/Drawer";
import Appbar from "./Appbar/Appbar";
import Content from "./Content/Content";
import { Paper } from "@material-ui/core";

const Layout = () => {
    return (
        <Paper style={{ height: "100vh", paddingTop: "100px" }}>
            <Appbar></Appbar>
            <Drawer></Drawer>
            <Content></Content>
        </Paper>
    );
};

export default Layout;
