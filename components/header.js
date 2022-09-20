import React from "react";
import { View,Image,StyleSheet,Text } from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";

const Header = () => {
    return ( 
       <View >
            <View style={styles.imgBox}>
                <Image style={styles.img} source={require("../assets/images/Vector.png")} />
            
                <View style={styles.head}>
                    <View>
                        <Text style={styles.txt}>Will China Invaid Taiwan</Text>
                        <Text style={styles.txt}>before end september ?</Text>
                    </View>
                    <View marginTop='auto' marginBottom='auto'>
                        <Icon name='filter' size={25} color='#fff' ></Icon>
                    </View>
                </View>
            
            </View>
       </View>
     );
}
 
const styles = StyleSheet.create({
    img: {
        width: '100%',
        objectFit: 'cover',
        // position: 'absolute',
        backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 1.34%, rgba(11, 11, 11, 0) 30%, rgba(17, 17, 17, 0.1) 56.56%, rgba(26, 26, 26, 0.89) 83.65%)',
        // zIndex: -5,
    },
    imgBox: {
        // position: 'relative',
    },
    txt: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
        lineHeight: 26,
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        position:'absolute',
        marginTop: 240,
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default Header;