import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { View, StyleSheet } from "react-native";
import MovieList from './components/MovieList';

export default class RouterComponent extends Component {

    render() {

        return (
            <Router>
                <Scene key="list">
                    <Scene key="MovieList"
                        component={MovieList}
                        title="MovieList"
                        initial
                        hideNavBar />
                </Scene>
            </Router>
        );
    }
}

