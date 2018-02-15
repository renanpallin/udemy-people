import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import { capitalizeFirstLetter} from '../util';

const Line = ({ label = '', content = '' }) => {
	const longLabelStyle = {};
	if (label.length > 8) {
		longLabelStyle.fontSize = 13
	}

	return (
		<View style={styles.line}>
			<Text style={[styles.cell, styles.label, longLabelStyle]}>{label}</Text>
			<Text style={[styles.cell, styles.content]}>{content}</Text>
		</View>
	)
};

// Parecido com o mockup
// const styles = StyleSheet.create({
// 	line: {
// 		flexDirection: 'row',
// 		paddingTop: 3,
// 		paddingBottom: 3,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	cell: {
// 		fontSize: 18,
// 		textAlign: 'center',
// 		// borderWidth: 0.5,
// 		// borderColor: '#000',
// 	},
// 	label: {
// 		// flex: 1,
// 		fontWeight: 'bold',
// 		paddingRight: 20
// 	},
// 	content: {
// 		// flex: 3,
// 	},
// });

// Tabelinha
const styles = StyleSheet.create({
	line: {
		flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 1,
		borderColor: '#bbb',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	cell: {
		fontSize: 18,
		paddingLeft: 5,
		// textAlign: 'center',
		// borderWidth: 0.5,
		// borderColor: '#000',
	},
	label: {
		flex: 1,
		fontWeight: 'bold',
		// paddingRight: 20
	},
	content: {
		flex: 3,
	},
});

export default Line;
