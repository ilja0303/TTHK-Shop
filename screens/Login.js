import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { loginWithEmail } from '../components/Firebase/firebase';

class Login extends React.Component{
    state = {email: '', password: ''};
    handleLogin = () => {
        const {email, password} = this.state
        loginWithEmail(email, password)
        
    }


    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeholder="Email"
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                    placeholder="Password"
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Button
                    title="Don't have an account yet? Sign up"
                    onPress={() => this.props.navigation.navigate("Signup")}
                    style={{ backgroundColor: '#fff' }}
                />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', // #862539
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#832438',
        borderColor: '#832438',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default Login