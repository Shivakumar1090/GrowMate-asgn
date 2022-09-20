import React,{useState} from "react";
import { View,Text,StyleSheet,FlatList,Image,Modal,Pressable } from "react-native";
import Icon  from 'react-native-vector-icons/Ionicons';
import IconE  from 'react-native-vector-icons/EvilIcons';
import IconS  from 'react-native-vector-icons/SimpleLineIcons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const data =[
    {
        id: 0,
        title: 'Linda',
        desc: 'If China does indeed attack Taiwan soon, October is the likely time since the... more ',
    },
    {
        id: 1,
        title: 'TomBn',
        desc: 'I will be surprised if #China will in fact attack Taiwan. Doing so requires lots of... more ',
    }
];

const replyData = [
    {
        id: 0,
        title: 'Prof.alison',
        time: '1h ago',
        data: 'If China does indeed attack Taiwan soon, October isthe likely time since the Taiwan Strait waters will becalm, facilitating amphibious operations.The drills around Taiwan allowed China to build upforces in Fujian, which is part of whats needed before an invasion.',
        replies: '5 replies',
    }
]

const CustomReplyBox = ({item} ) => {
    return( 
        <View display='flex' flexDirection='row' margin={2}>
            <View ><Image source={require("../assets/images/Avatar.png")} style={styles.imgb}></Image></View>
            
            <View marginLeft={15}>
                <Text style={{fontSize: 15,lineHeight: 17,fontWeight: '600'}}>
                    <Text >{item.title}</Text>
                    <Text> - </Text>
                    <Text>{item.time}</Text>
                </Text>
                <View marginTop={3}>
                    <Text style={{fontSize: 13,lineHeight: 17,}}>{item.data}</Text>
                </View>
                <View display='flex' flexDirection='row'  marginTop={5} textAlign='center'>
                    <IconE name='like' size={20} style={{marginRight: 5}}></IconE>
                    <IconS name='dislike' size={13} style={{marginRight: 5}}></IconS>
                    <IconE name='comment' size={20} ></IconE>
                </View>
                <Text style={{color: '#1A73FD' ,fontSize: 13,marginTop: 5,}}>{item.replies}</Text>
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
                    <Text style={{color: '#687684', fontSize: 20, fontWeight: '700'}}>Reactions</Text>
                        <Pressable
                            onPress={() => setSwipeUp(!modalVisible)}
                        >
                        <Icon  name="close-circle" size={28} style={styles.icon}/>
                        </Pressable>
                </View>
                <View display='flex' flexDirection='row' marginTop={8}>
                    <Text style={{backgroundColor: '#2B2828' , fontSize: 15, color: '#fff',borderRadius: 12, paddingLeft: 10,paddingRight: 10, padding: 1 , marginRight: 8,fontWeight: '800',textAlign: 'center'}}>Top</Text>
                    <Text style={{backgroundColor: '#7D7D7D' , fontSize: 15, color: '#fff',borderRadius: 12, paddingLeft: 10,paddingRight: 10, padding: 2,fontWeight: '800',textAlign: 'center'}}>Newest</Text>
                </View>
                <View backgroundColor='#F8F8F8' padding={5} width="100%" marginTop={10}>
                    <Text style={{fontSize: 12,lineHeight: 15,}}>Remember to keep comments respectful and to follow our <Text style={{color: '#1A73FD'}}>Community Guidelines</Text></Text>
                </View>
                <View marginTop={10} display='flex' flexDirection='row' justifyContent='space-between'>
                    <View display='flex' flexDirection='row'>
                        <View marginTop='auto' marginBottom='auto' marginRight={15}><Image source={require("../assets/images/Round.png")}></Image></View>
                        <Text style={{color: '#999999', fontSize: 13,marginTop: 'auto', marginBottom: 'auto',}}>Add a comment...</Text>
                    </View>
                    <IconE name='plus' size={20} style={{color: '#999999',marginTop: 'auto', marginBottom: 'auto'}}/>
                </View>
                <View marginTop={5} marginBottom={10}>
                    <View style={{borderColor: '#2B2B2B' , width: '100%',borderWidth: 1, opacity: 0.08,}}></View>
                </View>
                <View>
                    <FlatList 
                            data = {replyData}
                            keyExtractor={item=>item.id}
                            vertical
                            renderItem={({item}) => <CustomReplyBox item={item}/>}
                        />
                </View>
            </View>
        </View>
    )
}

const CustomCard = ({item}) => {
    return(
        <View display='flex' flexDirection='row' margin={8} >
            <View marginTop='auto' marginBottom='auto' style={styles.imgb}><Image source={require("../assets/images/Avatar.png")}></Image></View>
            <View display='flex' flexDirection='row'  marginTop='auto' marginBottom='auto' width={310} marginLeft={10}>
                <Text style={{fontSize: 11,fontWeight: '400',}}>
                    <Text style={{fontSize: 13,fontWeight: '700',marginRight: 2,}}>{item.title}</Text>
                    {item.desc}
                </Text>
            </View>
        </View>
    )
}

const ReactionBox = () => {
    const [swipeUp,setSwipeUp] = useState(false);
    return ( 
        <GestureRecognizer 
            onSwipe={() => setSwipeUp(!swipeUp)}
        >
            <View padding={2}>
                <View display='flex' flexDirection='row' marginLeft={10}>
                    <View marginTop='auto' marginBottom='auto'><Icon name='person' size={22} style={{color: '#687684',marginRight:3,}}/></View>
                    <Text style={{color:'#687684', fontSize: 18,fontWeight: '700',marginRight:15,}} >215</Text>

                    <View marginTop='auto' marginBottom='auto'><IconE name='comment' size={26} style={{color: '#687684',marginRight:3,}}/></View>
                    <Text style={{color:'#687684', fontSize: 18,fontWeight: '700',marginRight:6,}} >90K</Text>
                </View>
                <View marginTop={15}>
                    <FlatList 
                            data = {data}
                            keyExtractor={item=>item.id}
                            vertical
                            renderItem={({item}) => <CustomCard item={item}/>}
                        />
                </View>
                <View  display='flex' flexDirection='row' justifyContent='space-between' marginRight={10} marginTop={20} marginLeft={60}>
                    <Text style={{color: '#999999', fontSize: 13,}}>Add a comment...</Text>
                    <View  display='flex' flexDirection='row'>
                        <Text style={{marginRight: 5,fontSize: 15,}}>😍</Text>
                        <Text style={{marginRight: 6, fontSize: 15,}}>😭</Text>
                        <IconE name='plus' size={20} style={{color: '#999999',marginTop: 'auto', marginBottom: 'auto'}}/>
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
            </View>
        </GestureRecognizer>
     );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 18,
        color: '#687684',
        lineHeight: 22,
        fontWeight: '700',
    },
    imgb: {
        borderWidth : 1,
        borderColor: '#687684',
        borderRadius: 500,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
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
 
export default ReactionBox;