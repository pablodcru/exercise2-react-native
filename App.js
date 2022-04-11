/* The store can be accessed due to the provider which is enclosing the rest of the components */

import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux-store/store';

import SwitchMode from './components/switchMode';


const store = configureStore();

export default function App() {

  return (

    <Provider store={store}>
        <View style={styles.container}>
          <SwitchMode />
          <StatusBar style="auto" />
        </View>
    </Provider>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
