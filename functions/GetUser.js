import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { db, auth } from '../components/Firebase/firebase';
import SplashScreen from '../screens/SplashScreen';

import { Avatar} from 'react-native-paper';

class GetUser extends Component {
    state = {
        user: {
            name: "",
            secondname: "",
            userfoto: ""
        }
    }
    constructor(props){
        super(props);
        this.getUserData();

    }

    async getUserData() {
        const subscriber = await db.collection("users").doc(auth.currentUser.uid).onSnapshot(doc => {
            if(!doc.data()){
                {<SplashScreen/>}
            }else{
                this.setState ({
                    user: {
                       name: doc.data().name,
                       secondname: doc.data().secondname,
                       userfoto: doc.data().userPhoto
                   }
               })
            }
            
        })
        return subscriber; 
    }
    render() {
        return (
            <View>
                <Text>{this.state.user.name} {this.state.user.secondname}</Text>
            </View>
        )
    }
}

export default GetUser
