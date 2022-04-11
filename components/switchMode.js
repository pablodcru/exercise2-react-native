/* Here is where most of the magic happens. That is because to be able to switch modes, I needed to place here most of the components in order to wrap them into a provider in App component. Otherwise, the modes were not switching.  
Redux to control dark and light modes is configured here as well as the main styles of the outer container
The actual mode is passed through as props to the other components to make it readable.*/


import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { changeMode } from '../redux-store/actions';

import TopBar from './topBar';
import FetchApi from './fetchApi';

export default function SwitchMode() {
    // get the current theme
    const theme = useSelector(state => state.theme);
    // initialize action dispatcher
    const dispatch = useDispatch();
    // define a component mode state
    const [mode, setMode] = useState(theme.mode);
    // Handle changing the theme mode
    const handleThemeChange = () => { 
        dispatch(changeMode(theme.mode === 'light' ? 'dark' : 'light'));
    }

    // Update the app Incase the theme mode changes
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);

    // Render a view with different style classes depending on the theme mode

    return (
        <View >
        <Text style={mode == 'light' ? styles.container_light : styles.container_dark}>
            <Button style={styles.button} title="Switch Mode" onPress={handleThemeChange} />
            <TopBar mode={mode}/> 
            <FetchApi mode={mode} />
            <StatusBar style="auto" />
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container_light: {
        color: '#000',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        textAlign:'center',


    },

    container_dark: {
        color: "#fff",
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#121212',
        textAlign:'center',

    }
});
