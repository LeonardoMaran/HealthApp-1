// Activities.js

import React from 'react';
import {
    LayoutAnimation,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createMaterialTopTabNavigator,
    NavigationScreenProp,
    NavigationState,
    SafeAreaView,
} from 'react-navigation';

import ActivityPage from './currentActivity/Activities'
import LocationTracker from './currentActivity/LocationTracker'
import EmergencyButton from './currentActivity/EmergencyButton'
import SliderFeedback from './feedback/SliderFeedback'

interface Props {
    navigation: NavigationScreenProp<NavigationState>;
}

export class ActivityScreen extends React.Component<Props> {
    static navigationOptions = ({
        navigation,
    }: {
        navigation: NavigationScreenProp<NavigationState>;
    }) => ({
        title: "Activity",
        headerStyle: {
            backgroundColor: "#007AFF"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        },
        tabBarIcon: ({
            tintColor,
            focused,
            horizontal,
        }: {
            tintColor: string;
            focused: boolean;
            horizontal: boolean;
        }) => (
            <Ionicons
                name={focused ? 'ios-walk' : 'ios-walk'}
                size={horizontal ? 20 : 26}
                style={{ color: tintColor }}
            />
        )	
    });

    render() {
        const { navigation } = this.props;
        return (
                <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
                        <ActivityPage />
            </SafeAreaView>
        );
    }
}

export default ActivityScreen