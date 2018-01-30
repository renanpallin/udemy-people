import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { state, setParams } = navigation;
		const isInfo = state.params.mode === 'info';
		const { user } = state.params;
		return {
			title: isInfo
				? `${user}'s Contact Info`
				: `Chat with ${state.params.user}`,
			headerRight: (
				<Button
					title={isInfo ? 'Done' : `${user}'s info`}
					onPress={() =>
						setParams({ mode: isInfo ? 'none' : 'info' })
					}
				/>
			),
		};
	};
	render() {
		const { title } = this.props;
		console.log(this.props.children)
		return (
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		marginTop: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2acccc',
	},
	title: {
		fontSize: 50,
		color: '#fff',
	},
});

export default Header;
