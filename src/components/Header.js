import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => (
	<View style={styles.header}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const styles = StyleSheet.create({
	header: {
		marginTop: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2acccc',
	},
	title: {
		fontSize: 50,
		color: '#fff'
	},
});

export default Header;
