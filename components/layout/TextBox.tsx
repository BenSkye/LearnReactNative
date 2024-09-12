import React from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { useTogglePasswordVisibility } from '@/app/hook/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TextBox = () => {
    const [username, onChangeUsername] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [password, setPassword] = React.useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility() as {
            passwordVisibility: boolean;
            rightIcon: "eye" | "eye-off"; // Adjust this type based on your actual icon names
            handlePasswordVisibility: () => void;
        };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                onFocus={() => { Alert.alert('First name is focussed') }}
                onBlur={() => { Alert.alert('First name is now blurred') }}
                placeholder='username'
            />
            <View>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={text => setPassword(text)}
                />
                <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                </Pressable></View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        backgroundColor: 'pink',
    }
});

export default TextBox;