import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, ColorValue, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';9
import {Link, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '../theme/useTheme';
import {getSecureValue} from '../utils/keyChain';
import {updateToken} from '../store/userSlice';
import {RootState} from '../store/store';
import ChouseStep from '../screens/Payments/PaymentCreate/ChoiseStep';
import Account from '../screens/Account/Account';
import Help from '../screens/Help/Help';
import Centers from '../screens/Сenters/Centers';
import Payments from '../screens/Payments/Payments';
import Work from '../screens/Work/Work';
import PaymentStruct from '../screens/Payments/PaymentStruct';
import SocialPaymentForm from '../screens/Payments/PaymentCreate/PaymentCreateForm';
import StepCreate from '../screens/Payments/PaymentCreate/StepCreate';



const accIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="person-outline" size={30} color={color} />
);
const centersIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="bandage-outline" size={28} color={color} />
);
const helpIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="heart-outline" size={30} color={color} />
);
const workIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="briefcase-outline" size={30} color={color} />
);
const paymentsIcon = ({color}: {color: ColorValue | number}) => (
  <Icon name="cash-outline" size={30} color={color} />
);

// Root Navigation
// eslint-disable-next-line no-unused-vars
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
    </Stack.Navigator>
  );
}

function WorkStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Work"
        component={Work}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function PaymentsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentStruct"
        component={PaymentStruct}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="PaymentsCreate"
        component={SocialPaymentForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChouseStep"
        component={ChouseStep}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StepCreate"
        component={StepCreate}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TellScreen() {
  return (
    <View>
      <Text>Tell Screen</Text>
    </View>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
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
    </Stack.Navigator>
  );
}

export default function RootNavigation() {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state: RootState) => state.user);

  // Copy existing token from local storage to redux store
  useEffect(() => {
    async function checkIsLogined() {
      try {
        let temp = await getSecureValue('token');
        dispatch(updateToken({token: temp}));
      } catch (e) {}
    }
    checkIsLogined();
  }, [dispatch]);
//////////////////////////

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        backgroundColor={theme.accent}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <StatusBar backgroundColor="#afc9de" barStyle="light-content" />

        {/* {user.token ? ( */}
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: theme.cardBg},
            tabBarInactiveTintColor: theme.color,
            tabBarActiveTintColor: theme.accent,
            headerStyle: {backgroundColor: theme.cardBg, height: 50},
            headerTitleStyle: {color: theme.color, fontSize: 16},
          }}>
          <Tab.Screen
            name="Payments"
            component={PaymentsStack}
            options={{
              tabBarIcon: paymentsIcon,
              headerShown: false,
              tabBarLabel: '',
            }}
          />
          <Tab.Screen
            name="Help"
            component={HelpStack}
            options={{
              tabBarIcon: helpIcon,
              headerShown: false,
              tabBarLabel: '',
            }}
          />
          <Tab.Screen
            name="Centers"
            component={CentersStack}
            options={{
              tabBarIcon: centersIcon,
              headerShown: false,
              tabBarLabel: '',
            }}
          />
          <Tab.Screen
            name="Work"
            component={WorkStack}
            options={{
              headerStatusBarHeight: 0,
              tabBarIcon: workIcon,
              tabBarLabel: '',
              headerShown: false,
            }}
          />

          <Tab.Screen
            name="Account"
            component={AccountStack}
            options={{
              tabBarIcon: accIcon,
              headerShown: false,
              tabBarLabel: '',
            }}
          />
        </Tab.Navigator>
        {/* ),<></>} */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
