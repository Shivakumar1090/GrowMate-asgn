import React,{useState} from "react";
import { View,Text,StyleSheet,FlatList,Image,Modal,Pressable } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import Icon  from 'react-native-vector-icons/Ionicons';

const data =[
    {
        id: 0,
        data: 'Liz Truss will be UKs next Prime Minister?',
    },
    {
        id: 1,
        data: 'British Pound will fall after Prime Minister elections?',
    },
    // {
    //     id: 2,
    //     data: "British Railway Strikes will end by before Sept. 2022?"
    // },
    // {
    //     id: 3,
    //     data: "Liz Truss will be UK’s next Prime Minister?",
    // }
]



const CustomCard = ({item}) => {
    return(
        <View style={styles.card}>
        <View >
            <Image source={require("../assets/images/image12.png")} style={styles.img}></Image>
        </View>
            <View width="82%" marginTop='auto' marginBottom='auto' marginLeft={10}>
                <Text style={{color: '#141619',fontSize: 18, fontWeight: '400',lineHeight: 21}}>{item.data}</Text>
            </View>    
        </View>
   
    )
}

const ModalBody = ({modalVisible,setSwipeUp}) => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View display='flex' flexDirection='row' justifyContent='center' marginBottom={15}>
                    <View style={{borderColor: '#D9D9D9' , width: 80,borderWidth: 2,borderRadius: 6,}}></View>
                </View>
                <View display='flex' flexDirection='row' justifyContent='space-between'>
                    <Text style={{color: '#687684', fontSize: 20, fontWeight: '700'}}>Relted Posts</Text>
                        <Pressable
                            onPress={() => setSwipeUp(!modalVisible)}
                        >
                        <Icon  name="close-circle" size={25} style={styles.icon}/>
                        </Pressable>
                </View>
                <View display='flex' flexDirection='row' marginTop={8}>
                    <Text style={{backgroundColor: '#2B2828' , fontSize: 15, color: '#fff',borderRadius: 12, paddingLeft: 10,paddingRight: 10, padding: 1 , marginRight: 8,fontWeight: '800',textAlign: 'center'}}>Top</Text>
                    <Text style={{backgroundColor: '#7D7D7D' , fontSize: 15, color: '#fff',borderRadius: 12, paddingLeft: 10,paddingRight: 10, padding: 2,fontWeight: '800',textAlign: 'center'}}>Newest</Text>
                </View>
                <View marginTop={5}>
                    <FlatList 
                            data = {data}
                            keyExtractor={item=>item.id}
                            vertical
                            renderItem={({item}) => <CustomCard item={item}/>}
                        />
                </View>
            </View>
        </View>
    )
}

const RelatedBox = () => {
    const [swipeUp,setSwipeUp] = useState(false);
   
    console.log(swipeUp);
    return ( 
        <GestureRecognizer
            onSwipe={() => setSwipeUp(!swipeUp)}
        >
            <View>
                <View marginTop={5}>
                    <FlatList 
                            data = {data}
                            keyExtractor={item=>item.id}
                            vertical
                            renderItem={({item}) => <CustomCard item={item}/>}
                        />
                </View>
                <View  display='flex'  flexDirection='row' justifyContent='space-between' marginRight={10}>
                    <Text></Text>
                    <Text style={{color: '#999999',fontSize: 12}}>more..</Text>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={swipeUp}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                {<ModalBody 
                    setSwipeUp={setSwipeUp} 
                    modalVisible={swipeUp}
                />}
            </Modal>
        </GestureRecognizer>
     );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 12,
        borderColor: '#CED5DC',
        borderWidth: 1,
        margin: 6,
        // width: '90%',
    },
    img: {
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        objectFit: 'cover',
    },
    centeredView: {
        height: '55%',
        marginTop: 'auto',
        backgroundColor:'#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    modalView: {
        padding: 10,
    },
})
 
export default RelatedBox;