import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// string -> String
const capitalizeFirstLetter = string => {
	return string[0].toUpperCase() + string.slice(1);
};

const PeopleListItem = ({ people }) => (
	<View style={styles.line}>
		<Image
			style={styles.avatar}
			source={{ uri: people.picture.thumbnail }}
		/>
		<Text style={styles.lineText}>
			{`${capitalizeFirstLetter(
				people.name.title
			)} ${capitalizeFirstLetter(
				people.name.first
			)} ${capitalizeFirstLetter(people.name.last)}`}
		</Text>
	</View>
);

const styles = StyleSheet.create({
	line: {
		height: 60,
		// flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'space-around',
		borderBottomColor: '#BBB',
		borderBottomWidth: 1,
	},
	lineText: {
		color: '#000',
		fontSize: 20,
		flex: 8,
		paddingLeft: 15,
		// backgroundColor: '#a12',
	},
	avatar: {
		// backgroundColor: '#a12',
		marginLeft: 15,
		borderRadius: 25,
		height: 50,
		width: 50,
		flex: 1,
	},
});

export default PeopleListItem;
