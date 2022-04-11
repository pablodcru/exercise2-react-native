/* Here the layout of the horizontal cards is made */

import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


const InfoCard = ({ userData, mode }) => {
    return(
        <View style={mode == 'light' ? styles.user_light : styles.user_dark}>
            <View style={styles.left_side}>
                <View style={styles.user_image}>
                    <Image style={styles.image} source={userData.picture.thumbnail} />
                    <Text style={{fontSize: 12}}>{userData.gender}</Text>
                </View>

                <View style={styles.user_full_name}>
                    <Text style={{fontSize: 12}}>{userData.name.title}</Text>
                    <View style={styles.user_name}>
                        <Text>{userData.name.first}</Text>
                        <Text>{userData.name.last}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.right_side}>
                <Text style={{width:'14%', fontSize: 12}}>{userData.dob.age}</Text>
                <Text style={{width:'43%', fontSize: 12}}>{userData.location.city}</Text>
                <Text style={{width:'43%', fontSize: 12}}>{userData.location.country}</Text>
            </View>
        </View>
    )
}

export default InfoCard;


const deviceWidth = Math.round(Dimensions.get('window').width); /* To set a responsive width for every device */
const styles = StyleSheet.create({

    user_light: {
        flexDirection: 'row',
        width: deviceWidth - 25,
        height: 90,
        backgroundColor: "#e9e6e6",
        borderTopWidth: 1,
        borderColor: "#b5b5b5",
    },

    user_dark: {
        flexDirection: 'row',
        width: deviceWidth - 25,
        height: 90,
        backgroundColor: "#2e2e2e",
        borderTopWidth: 1,
        borderColor: "#b5b5b5",
    },

    left_side: {
        width: '40%',
        flexDirection: 'row',
        paddingLeft: 5,
        alignItems: 'center',
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    user_image: {
        textAlign: 'center',
    },

    right_side: {
        width: '60%',
        flexDirection: 'row',
        paddingRight: 3,
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
    },
    
    user_full_name: {
        paddingLeft: 5,
        marginTop: -10,
    }
});