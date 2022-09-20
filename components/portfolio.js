import React from "react";
import { View,StyleSheet,Text ,Image} from "react-native";

const Portfolio = () => {
    return ( 
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 12,color : '#fff',textShadowColor: '#000'}}>CHANCE</Text>
                <View display='flex' flexDirection='row'>
                    <View marginTop='auto' marginBottom='auto'>
                        <Text style={{fontSize: 30,color: '#fff',fontWeight: '700',marginRight: 15}}>11%</Text>
                    </View>
                    <View marginTop='auto' marginBottom='auto' marginRight= {15}>
                        <Image style={styles.img} source={require("../assets/images/image-2.png")} ></Image>
                    </View>
                    <View marginTop='auto' marginBottom='auto'>
                        <Text style={{fontSize: 12,color: '#fff',fontWeight: '700'}}>24H</Text>
                        <Text style={{fontSize: 12,color: '#fff',fontWeight: '700'}}>+25465$</Text>
                    </View>
                </View>
            </View>
            <View display='flex' flexDirection='row'>
                <View>
                    <Text style={{color: '#fff' ,fontSize: 20,fontWeight: '700',textAlign: 'center'}}>$09</Text>
                    <Text style={styles.btn1}>Yes</Text>
                </View>
                <View marginLeft={15} >
                    <Text style={{color: '#fff' ,fontSize: 20,fontWeight: '700',textAlign: 'center'}}>$89</Text>
                    <Text style={styles.btn2}>No</Text>
                </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#121212',
    height: 80,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    // flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around',
   },
   btn1: {
    backgroundColor: '#21FAAA',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '700',
    color: '#292929',
    padding: 1,
    width: 50,
    textAlign: 'center',
   },
   btn2: {
    backgroundColor: '#E432C1',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    padding: 1,
    width: 50,
    textAlign: 'center',
   }
})
export default Portfolio;