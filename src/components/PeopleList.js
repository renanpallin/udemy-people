import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ peoples = [], onPress }) => (
	<View style={styles.container}>
		{peoples.map(people => (
			<PeopleListItem
				people={people}
				key={people.name.first}
				onPress={onPress}
			/>
		))}
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff',
	},
});

export default PeopleList;
