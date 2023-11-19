// // /**
// //  * This is a Navigation file which is wired already with Bottom Tab Navigation.
// //  * If you don't like it, feel free to replace with your own setup.
// //  * Uncomment commented lines from return() of RootNavigation to wire Login flow
// //  */
// // import React, {useEffect} from 'react';
// // import {ColorValue} from 'react-native';

// // import {NavigationContainer} from '@react-navigation/native';
// // // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import {useDispatch} from 'react-redux';
// // // import {useSelector, useDispatch} from 'react-redux';

// // // Hook for theme change (Light/Dark Mode)
// // import {useTheme} from '../theme/useTheme';
// // // Get Value from Keyring (Encrypted token)
// // import {getSecureValue} from '../utils/keyChain';
// // // Redux slice for updating Access Token to store
// // import {updateToken} from '../store/userSlice';

// // // import {RootState} from '../store/store';

// // // Screens
// // // import Login from '../screens/auth/Login';
// // import Tasks from '../screens/Tasks';
// // import NetworkExample from '../screens/NetworkExample';
// // import Settings from '../screens/Settings';

// // // Icons for Bottom Tab Navigation
// // const homeIcon = ({color}: {color: ColorValue | number}) => (
// //   <Icon name="list-sharp" size={30} color={color} />
// // );
// // const networkIcon = ({color}: {color: ColorValue | number}) => (
// //   <Icon name="wifi-sharp" size={24} color={color} />
// // );
// // const settingsIcon = ({color}: {color: ColorValue | number}) => (
// //   <Icon name="settings-sharp" size={24} color={color} />
// // );

// // // Root Navigation
// // // const Stack = createNativeStackNavigator();
// // const Tab = createBottomTabNavigator();

// // export default function RootNavigation() {
// //   const {theme} = useTheme();
// //   const dispatch = useDispatch();
// //   // const user = useSelector((state: RootState) => state.user);

// //   // Copy existing token from local storage to redux store
// //   useEffect(() => {
// //     async function checkIsLogined() {
// //       try {
// //         let temp = await getSecureValue('token');
// //         dispatch(updateToken({token: temp}));
// //       } catch (e) {}
// //     }
// //     checkIsLogined();
// //   }, [dispatch]);

// //   return (
// //     <NavigationContainer>
// //       {/* {user.token ? ( */}
// //       <Tab.Navigator
// //         screenOptions={{
// //           tabBarStyle: {
// //             backgroundColor: theme.cardBg,
// //             borderTopColor: theme?.layoutBg,
// //           },
// //           tabBarInactiveTintColor: theme.color,
// //           tabBarActiveTintColor: theme.primary,
// //           headerStyle: {backgroundColor: theme.cardBg, height: 50},
// //           headerTitleAlign: 'center',
// //           headerTitleStyle: {
// //             color: theme.primary,
// //             fontSize: 18,
// //             fontWeight: 'bold',
// //           },
// //           tabBarShowLabel: false,
// //         }}>
// //         <Tab.Screen
// //           name="To Do"
// //           component={Tasks}
// //           options={{
// //             tabBarIcon: homeIcon,
// //           }}
// //         />
// //         <Tab.Screen
// //           name="NetworkExample"
// //           component={NetworkExample}
// //           options={{
// //             tabBarIcon: networkIcon,
// //           }}
// //         />
// //         <Tab.Screen
// //           name="Settings"
// //           component={Settings}
// //           options={{
// //             // headerShown: false,
// //             tabBarIcon: settingsIcon,
// //           }}
// //         />
// //       </Tab.Navigator>
// //       {/* ) : (
// //         <Stack.Navigator
// //           screenOptions={{
// //             headerShown: false,
// //           }}>
// //           <Stack.Screen name="Login" component={Login} />
// //         </Stack.Navigator>
// //         )} */}
// //     </NavigationContainer>
// //   );
// // }
// /**
//  * This is a Navigation file which is wired already with Bottom Tab Navigation.
//  * If you don't like it, feel free to replace with your own setup.
//  * Uncomment commented lines from return() of RootNavigation to wire Login flow
//  */
// import React, {useEffect} from 'react';
// import {ColorValue} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {useDispatch} from 'react-redux';
// // import {useSelector, useDispatch} from 'react-redux';

// // Hook for theme change (Light/Dark Mode)
// import {useTheme} from '../theme/useTheme';
// // Get Value from Keyring (Encrypted token)
// import {getSecureValue} from '../utils/keyChain';
// // Redux slice for updating Access Token to store
// import {updateToken} from '../store/userSlice';

// // import {RootState} from '../store/store';

// // Screens
// // import Login from '../screens/auth/Login';
// import NetworkExample from '../screens/NetworkExample';
// import Settings from '../screens/Settings';
// import Help from '../screens/Help/Help';
// import Centers from '../screens/Сenters/Centers';
// // Icons for Bottom Tab Navigation
// const accIcon = ({color}: {color: ColorValue | number}) => (
//   <Icon name="list-sharp" size={30} color={color} />
// );
// const workIcon = ({color}: {color: ColorValue | number}) => (
//   <Icon name="list-sharp" size={30} color={color} />
// );
// const payIcon = ({color}: {color: ColorValue | number}) => (
//   <Icon name="list-sharp" size={30} color={color} />
// );
// const centersIcon = ({color}: {color: ColorValue | number}) => (
//   <Icon name="list-sharp" size={24} color={color} />
// );
// const helpIcon = ({color}: {color: ColorValue | number}) => (
//   <Icon name="list-sharp" size={24} color={color} />
// );

// // Root Navigation
// // const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function RootNavigation() {
//   const {theme} = useTheme();
//   const dispatch = useDispatch();
//   // const user = useSelector((state: RootState) => state.user);

//   // Copy existing token from local storage to redux store
//   useEffect(() => {
//     async function checkIsLogined() {
//       try {
//         let temp = await getSecureValue('token');
//         dispatch(updateToken({token: temp}));
//       } catch (e) {}
//     }
//     checkIsLogined();
//   }, [dispatch]);

//   return (
//     <NavigationContainer>
//       {/* {user.token ? ( */}
//       <Tab.Navigator
//         screenOptions={{
//           tabBarStyle: {
//             backgroundColor: theme.cardBg,
//             borderTopColor: theme?.layoutBg,
//           },
//           tabBarInactiveTintColor: theme.color,
//           tabBarActiveTintColor: theme.primary,
//           headerStyle: {backgroundColor: theme.cardBg, height: 50},
//           headerTitleAlign: 'center',
//           headerTitleStyle: {
//             color: theme.primary,
//             fontSize: 18,
//             fontWeight: 'bold',
//           },
//           tabBarShowLabel: false,
//         }}>
//         {/* <Tab.Screen
//           name="Payments"
//           component={Payments}
//           options={{
//             tabBarIcon: payIcon,
//           }}
//         /> */}
//         <Tab.Screen
//           name="Help"
//           component={Help}
//           options={{
//             tabBarIcon: helpIcon,
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="Centers"
//           component={Centers}
//           options={{
//             tabBarIcon: centersIcon,
//             headerShown: false,
//           }}
//         />
//         {/* <Tab.Screen
//           name="Work"
//           component={Work}
//           options={{
//             // headerShown: false,
//             tabBarIcon: workIcon,
//           }}
//         /> */}
//         <Tab.Screen
//           name="Account"
//           component={Account}
//           options={{
//             tabBarIcon: accIcon,
//           }}
//         />
//       </Tab.Navigator>
//       {/* ) : (
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}>
//           <Stack.Screen name="Login" component={Login} />
//         </Stack.Navigator>
//         )} */}
//     </NavigationContainer>
//   );
// }

import React, {useEffect} from 'react';
import {ColorValue, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {useTheme} from '../theme/useTheme';
import {getSecureValue} from '../utils/keyChain';
import {updateToken} from '../store/userSlice';

import Help from '../screens/Help/Help';
import Centers from '../screens/Сenters/Centers';
import Account from '../screens/Account/Account';
// Якщо у вас є Work та Payments, додайте їх тут
// import Work from '../screens/Work';
// import Payments from '../screens/Payments';

const accIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="person-outline" size={30} color={color} />
);
const centersIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="bandage-outline" size={24} color={color} />
);
const helpIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="accessibility-outline" size={24} color={color} />
);
const workIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="briefcase-outline" size={30} color={color} />
);
const paymentsIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="cash-outline" size={30} color={color} />
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HelpStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      {/* Додайте інші екрани, які ви хочете мати у цьому табі */}
    </Stack.Navigator>
  );
}

function CentersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Centers"
        component={Centers}
        options={{headerShown: false}}
      />
      {/* Додайте інші екрани, які ви хочете мати у цьому табі */}
    </Stack.Navigator>
  );
}

// function WorkStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Work"
//         component={Work}
//         options={{headerShown: false}}
//       />
//       {/* Додайте інші екрани, які ви хочете мати у цьому табі */}
//     </Stack.Navigator>
//   );
// }

// function PaymentsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Payments"
//         component={Payments}
//         options={{headerShown: false}}
//       />
//       {/* Додайте інші екрани, які ви хочете мати у цьому табі */}
//     </Stack.Navigator>
//   );
// }

function TellScreen() {
  return (
    <View>
      <Text>Tell Screen</Text>
      {/* Додайте інше вміст, якщо необхідно */}
    </View>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tell"
        component={TellScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotTell"
        component={TellScreen}
        options={{headerShown: false}}
      />
      {/* Додайте інші екрани, які ви хочете мати у цьому табі */}
    </Stack.Navigator>
  );
}

function RootNavigation() {
  const {theme} = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkIsLogined() {
      try {
        let temp = await getSecureValue('token');
        dispatch(updateToken({token: temp}));
      } catch (e) {}
    }
    checkIsLogined();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          {
            // ... ваші опції тут
          }
        }>
        <Tab.Screen
          name="Help"
          component={HelpStack}
          options={{
            tabBarIcon: helpIcon,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Centers"
          component={CentersStack}
          options={{
            tabBarIcon: centersIcon,
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name="Work"
          component={WorkStack}
          options={{
            tabBarIcon: workIcon,
          }}
        />
        <Tab.Screen
          name="Payments"
          component={PaymentsStack}
          options={{
            tabBarIcon: paymentsIcon,
          }}
        /> */}
        <Tab.Screen
          name="Account"
          component={AccountStack}
          options={{
            tabBarIcon: accIcon,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
