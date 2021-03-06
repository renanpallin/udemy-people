import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';
import PeopleScreen from './src/screens/PeopleScreen';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                'https://randomuser.me/api/?results=10&nat=br&seed=renanpall.in'
            )
            .then(res => {
                this.setState({
                    users: res.data.results,
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Header title="Pessoas!" />*/}

                <PeopleList
                    peoples={this.state.users}
                    onPress={navigationState =>
                        this.props.navigation.navigate(
                            'People',
                            navigationState
                        )
                    }
                />
            </View>
        );
    }
}

export default StackNavigator(
    {
        Main: {
            screen: App,
        },
        People: {
            screen: PeopleScreen,
            navigationOptions: ({ navigation }) => {
                return {
                    // title: "FULANO @todo",
                    title: navigation.state.params.people.name.first,
                };
            },
        },
    },
    {
        navigationOptions: {
            title: 'Pessoas!',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#2acccc',
                borderWidth: 1,
                borderBottomColor: 'white',
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30,
                // @todo: Centralizar isso aqui
                textAlign: 'center',
            },
        },
    }
);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#a12',
    },
});
