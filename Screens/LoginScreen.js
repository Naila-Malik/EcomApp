import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert, KeyboardAvoidingView, Button, StyleSheet } from 'react-native';
import COLORS from './Constants/Colors';
import Input from './Constants/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({ navigation }) => {
	const [inputs, setInputs] = useState({ email: '', password: '' });

	const login = () => {
		setTimeout(async () => {
			navigation.navigate('Home')
			// let userData = await AsyncStorage.getItem('userData');

			// if (userData) {
			// 	userData = JSON.parse(userData);
			// 	if (
			// 		inputs.email == userData.email &&
			// 		inputs.password == userData.password
			// 	) {
			// 		navigation.navigate('Home');
			// 		AsyncStorage.setItem(
			// 			'userData',
			// 			// JSON.stringify({...userData, loggedIn: true}),
			// 		);
			// 	} else {
			// 		Alert.alert('Error', 'Invalid Details');
			// 	}
			// } else {
			// 	Alert.alert('Error', 'User does not exist');
			// }
		}, 1000);
	};

	const handleOnchange = (text, input) => {
		setInputs(prevState => ({ ...prevState, [input]: text }));
		// console.log(" Data input", text)
	};

	return (
		<KeyboardAvoidingView style={{ backgroundColor: COLORS.white, flex: 1 }}>
			<View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
				<Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>
					Log In
				</Text>
				<Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
					Enter Your Details to Login
				</Text>
				<View style={{ marginVertical: 20 }}>
					<Input
						onChangeText={text => handleOnchange(text, 'email')}
						iconName="email"
						label="Email"
						placeholder="Enter your email address"
					/>
					<Input
						onChangeText={text => handleOnchange(text, 'password')}
						iconName="locked"
						label="Password"
						placeholder="Enter your password"
						password
					/>
				</View>
				<View style={styles.button}>
					<Button color={COLORS.primary} title="Sign In" onPress={login} />
					<Button color={COLORS.primary} title="Sign Up" onPress={() => console.log("data")} />
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		height: 55,
		width: '100%',
		backgroundColor: COLORS.blue,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
export default LoginScreen;