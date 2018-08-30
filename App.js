import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// Screens
import PostScreen from './src/screens/PostScreen';
import FullImageScreen from './src/screens/FullImageScreen';
import LoginScreen from './src/screens/LoginScreen';


// Components
import Logo from './src/components/svg/Logo';
import Content from './src/components/Content';


// Main App Component
class App extends Component {
  constructor(props){
    super(props)
  }

  // Header bar
  static navigationOptions = {
    headerTitle: <Logo style={{ flex: 1, alignItems: 'center'}}/>,
    headerStyle: {backgroundColor: "#212121"},
    headerLeft: (<View></View>), 
    headerRight: (<View></View>)
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'blue'}}>
        <Content />
      </View>
    );
  }
}


// Stack Navigator
const Navigator = createStackNavigator(
  {
    Home: App,
    Post: PostScreen,
    FullScreen: FullImageScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Home'
  }
)


export default Navigator