import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    return(
    <> 
      <View style = {styles.container}>
        <NavigationEvents 
        onWillFocus={clearErrorMessage}
        />
        <AuthForm
        headerText ="Sign Up For Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
        />
        <NavLink
        routeName="Signin"
        text="Already have an account? Sign in."
        />
      </View>
    </>);

};

SignupScreen.navigationOptions = () => {

    return {
        headerShown: false
    };
};
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },

});

export default SignupScreen;