import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home';
import History from '../screens/History';
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="History" component={History} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
