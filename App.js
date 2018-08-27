import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

// Components
import Logo from './src/components/svg/Logo';
import Content from './src/components/Content';


// Main App Component
class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  // Header bar
  static navigationOptions = {
    headerTitle: <Logo />,
    headerLeft: (<View></View>), 
    headerRight: (<View></View>)
  }

  render() {
    return (
      <View style={Styles.container}>
        <Content />
      </View>
    );
  }
}

// Styling
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  }
})


// Router
// Stack Navigator
const Navigator = createStackNavigator({
  Home: App
})




export default Navigator