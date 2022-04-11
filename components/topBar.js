/* The top bar of the table is created here.
Its width is calculated in relation with the device that is visiting the app, thus making it responsive */

import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TopBar = ({mode}) => {
    return(
        <View style={mode == 'light' ? styles.top_bar_light : styles.top_bar_dark} >
            <View style={styles.user}>
                <Text style={{fontWeight: 'bold'}}>User</Text>
            </View>
            <View style={styles.other_info}>
                <Text style={{width:'14%', fontWeight: 'bold'}}>Age</Text>
                <Text style={{width:'43%', fontWeight: 'bold'}}>City</Text>
                <Text style={{width:'43%', fontWeight: 'bold'}}>Country</Text>
            </View>
        </View>
    )
}

export default TopBar;

const deviceWidth = Math.round(Dimensions.get('window').width); /* To set a responsive width for every device */
const styles = StyleSheet.create({
    
    top_bar_light: {
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        width: deviceWidth - 25,
        backgroundColor: "#d9d7d7",
        borderTopWidth: 1,
        borderColor: "#b5b5b5",
    },

    top_bar_dark: {
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        width: deviceWidth - 25,
        color: 'white',
        backgroundColor: "#1c1c1c",
        borderTopWidth: 1,
        borderColor: "#b5b5b5",
    },
    
    user: {
        width: '40%',
        alignItems:'center',

    },

    other_info: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlign: 'center',
    }

  });

