import React, {useState} from 'react';
import { Text, View, TouchableWithoutFeedback,StyleSheet,FlatList } from 'react-native';
import ReactionBox from './reactionsbox';
import ResearchBox from './researchbox';
import RelatedBox from './relatedbox';

const tabsData = [
    {
        id: '0',
        title: "ReSearch & news",
    },
    {
        id: "1",
        title: "Reactions",
    },
    {
        id: "2",
        title: "Related",
    },
];
  
const CustomButton = ({item,setList,list}) => {
    return(
        <View style={styles.btnsBox}>
            <TouchableWithoutFeedback
            onPress={() => {
                setList(item.title)
            }}
            >
            {
                list === item.title ? 
                    <Text style={styles.clickedBtn}>{item.title}</Text>
                    : <Text style={styles.btn}>{item.title}</Text>
            }
            </TouchableWithoutFeedback>
        </View>
    )
}

const Tabs = () => {
    const [list,setList] = useState('ReSearch & news')
    return ( 
        <View >
            <View display='flex' flexDirection='row'  justifyContent= 'space-between' padding={5}>
                {/* <FlatList 
                    data = {tabsData}
                    keyExtractor={item=>item.id}
                    horizontal
                    renderItem={({item}) => <CustomButton item={item} setList={setList} list={list}/>}
                /> */}
                <CustomButton item={tabsData[0]} setList={setList} list={list}></CustomButton>
                <CustomButton item={tabsData[1]} setList={setList}  list={list}></CustomButton>
                <CustomButton item={tabsData[2]} setList={setList} list={list}></CustomButton>
            </View>
            {
                list === "ReSearch & news" && <ResearchBox />
            }
            {
                list === "Reactions" && <ReactionBox />
            }
            {
                list === "Related" && <RelatedBox />
            }
        </View>
     );
}

const styles = StyleSheet.create({
    // btnsBox:{
    //     paddingTop: 7,
    // },  
    topbtns: {
        // borderBottomColor: '#',
        // borderBottomWidth: 3,
        // borderRadius: 2,
    },
    btn: {
        fontSize: 15,
        fontWeight: '700',
        color: '#687684',
        width: 130,
        textAlign: "center",
        borderBottomColor: '#687684',
        borderBottomWidth: 0.7,
        paddingBottom: 11,
    },
    clickedBtn: {
        color: '#E432C1',
        fontSize: 15,
        fontWeight: '700',
        borderBottomColor: '#E432C1',
        borderBottomWidth: 3,
        borderRadius: 2,
        width: 130,
        paddingBottom: 10,
        textAlign: "center",
    }
})
 
export default Tabs;