import React from 'react';
import EditorPlayer from 'EditorPlayer';

const defaultValue = `import React, { AppRegistry, View, Text } from 'react-native'
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

const textStyle = {
  backgroundColor: 'whitesmoke',
  color: 'teal',
  fontSize: 24,
  padding: 10,
}

const App = () => {
  return (
    <View style={style}>
      <Text style={textStyle}>Hello!</Text>
    </View>
  )
}

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)`;

export default class App extends Component {
  render() {
    return (
      <EditorPlayer
        value={defaultValue}
        inputHeader={'Hello this is the header'}
        />
    );
  }
}
