// ChatsDoctor.js

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { GiftedChat } from "react-native-gifted-chat";
import Fire from './Fire';

interface Props {
  name?: 'string',
  navigation: NavigationScreenProp<NavigationState>;
}

export class ChatsDoctor extends React.Component<Props> {
  static navigationOptions = {
    title: 'Chat',
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
        name={focused ? 'ios-chatboxes' : 'ios-chatboxes'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    ),
  };
  state = {
    messages: [],
  };

  get user() {
    return {
      name: 'john',
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}


export default ChatsDoctor