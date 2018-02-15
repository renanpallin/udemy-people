import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { capitalizeFirstLetter } from '../util';

import Line from '../components/Line';

class PeopleScreen extends React.Component {
	render() {
		const { people } = this.props.navigation.state.params;
		// const people = {
		// 	gender: 'male',
		// 	name: {
		// 		title: 'mr',
		// 		first: 'camilo',
		// 		last: 'jesus',
		// 	},
		// 	location: {
		// 		street: '6699 rua um',
		// 		city: 'maceió',
		// 		state: 'distrito federal',
		// 		postcode: 44945,
		// 	},
		// 	email: 'camilo.jesus@example.com',
		// 	login: {
		// 		username: 'heavyfish792',
		// 		password: 'venice',
		// 		salt: 'F3iKPzXL',
		// 		md5: '1612e79690e593ec8016a1f73bba4c74',
		// 		sha1: '17eb2a0398d4b1e2492a47be8e5ed8f0e5054c8d',
		// 		sha256:
		// 			'78aa7581378beadac7b86e6d230d99127c9c42c8c054d9f7c7fe6c509ec3f361',
		// 	},
		// 	dob: '1950-06-01 06:36:14',
		// 	registered: '2008-06-06 02:10:44',
		// 	phone: '(07) 0984-7656',
		// 	cell: '(30) 1782-9714',
		// 	id: {
		// 		name: '',
		// 		value: null,
		// 	},
		// 	picture: {
		// 		large: 'https://randomuser.me/api/portraits/men/58.jpg',
		// 		medium: 'https://randomuser.me/api/portraits/med/men/58.jpg',
		// 		thumbnail:
		// 			'https://randomuser.me/api/portraits/thumb/men/58.jpg',
		// 	},
		// 	nat: 'BR',
		// };
		const { name: { first, last, title } } = people;
		const fullName = [title, first, last]
			.map(capitalizeFirstLetter)
			.join(' ');

		const { large: avatar } = people.picture;

		return (
			<View style={styles.container}>
				<View style={styles.imageWrapper}>
					<Image
						source={{
							uri: avatar,
						}}
						style={styles.avatar}
					/>
				</View>
				<View style={styles.detailContainer}>
					<Line label="Email:" content={people.email} />
					<Line label="Cidade:" content={people.location.city} />
					<Line label="State:" content={people.location.state} />
					<Line label="Tel:" content={people.phone} />
					<Line label="Cel:" content={people.cell} />
					<Line label="Nacionalidade:" content={people.nat} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	avatar: {
		aspectRatio: 1,
		// borderRadius: 1000
	},
	container: {
		padding: 15,
	},
	detailContainer: {
		backgroundColor: '#e2f9ff',
		elevation: 1,
		marginTop: 20
	},
});

export default PeopleScreen;
