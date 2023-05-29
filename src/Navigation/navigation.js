import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../Screens/index';
import useReduxStore from '../Hooks/UseReduxStore';
import MybottomTabs from './bottomNavigation';

const Stack = createNativeStackNavigator();

const StackNavigatior = () => {
  const {getState} = useReduxStore();
  const {onboarding} = getState('onboarding');
  const {token} = getState('Auth');
  console.log('AIUth token', token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
      }}>
      {!onboarding && (
        <Stack.Screen name="OnboardScreen" component={Screens.OnboardScreen} />
      )}
      {token == '' && (
        <>
          <Stack.Screen
            name="SocialLoginScreen"
            component={Screens.SocialLoginScreen}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={Screens.RegisterScreen}
          />
          <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
        </>
      )}
      {token != '' && (
        <>
          <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
          <Stack.Screen name="ChatScreen" component={Screens.ChatScreen} />
          <Stack.Screen
            name="MessagesScreen"
            component={Screens.MessagesScreen}
          />
          <Stack.Screen name="RatingScreen" component={Screens.RatingScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={Screens.ResetPasswordScreen}
          />
          <Stack.Screen
            name="EditProfileScreen"
            component={Screens.EditProfileScreen}
          />
          <Stack.Screen
            name="AccountScreen"
            component={Screens.AccountScreen}
          />
          <Stack.Screen name="FilterScreen" component={Screens.FilterScreen} />
          <Stack.Screen
            name="SomeComponent"
            component={Screens.SomeComponent}
          />
          <Stack.Screen
            options={{
              animation: 'fade_from_bottom',
              animationTypeForReplace: 'pop',
            }}
            name="PackageDetailsScreen"
            component={Screens.PackageDetailsScreen}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={Screens.NotificationScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigatior;
