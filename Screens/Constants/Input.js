import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import COLORS from './Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = ({
	label,
	iconName,
	password,
	...props
}) => {
	const [hidePassword, setHidePassword] = useState(password);

	return (
		<View style={{ marginBottom: 20 }}>
			<Text style={styles.label}>{label}</Text>
			<View
				style={styles.inputContainer}>
				<Fontisto
					name={iconName}
					style={{ fontSize: 22, color: COLORS.dark, marginRight: 10 }}
				/>
				<TextInput
					secureTextEntry={hidePassword}
					style={{ color: COLORS.dark, flex: 1 }}
					{...props}
				/>
				{password && (
					<Ionicons
						name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
						style={{ fontSize: 22, color: COLORS.dark }}
						onPress={() => setHidePassword(!hidePassword)}
					/>
				)}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	label: {
		marginVertical: 5,
		fontSize: 14,
		color: COLORS.grey,
	},
	inputContainer: {
		height: 55,
		backgroundColor: COLORS.light,
		flexDirection: 'row',
		paddingHorizontal: 15,
		borderWidth: 0.5,
		alignItems: 'center',
		borderRadius: 5,
	},
});
export default Input;