import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios
            .get(
                'https://randomuser.me/api/?results=10&nat=br&seed=renanpall.in'
            )
            .then(res => {
                this.setState({
                    users: res.data.results
                });
            });
    }

    render() {
        return (
            <View>
                <Header title="Pessoas!" />
                {this.state.users.map(user => <Text key={user.name.first}>{ user.name.first }</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
