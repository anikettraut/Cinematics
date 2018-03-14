import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { View, StyleSheet } from "react-native";
import MovieList from './components/MovieList';
import TabBarComponent from './components/TabBar';


export default class RouterComponent extends Component {

    render() {

        return (
            <Router>
                <Scene key="list">
                    <Scene key="TabBar"
                        component={TabBarComponent}
                        title="TabBar"
                        initial
                        hideNavBar />
                </Scene>
            </Router>
        );
    }
}

