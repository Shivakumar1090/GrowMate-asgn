import { View,Text,StyleSheet,FlatList } from "react-native";
import Icon  from 'react-native-vector-icons/Ionicons';

const cardsData = [
    {
        id: 0,
        title: 'Thehill',
        date: '1 Sept',
        desc: 'Last week, the dire warnings that appeared in the Wall Street Journal, The Economist and Foreign Affairs about Chinas imminent war with or...',
    },
    {
        id: 1,
        title: 'BBC',
        date: '1 Oct',
        desc: 'Most people the BBC spoke to do not believe China is about to attack Taiwan. "Theyre a bunch of gangsters," said one man fishing on the...',
    },
];

const CustomCard =({item}) => {
    return (
        <View style={styles.card}>
            <View>
                <View display='flex' flexDirection='row' justifyContent='space-between'>
                    <Text style={{color: '#2E2E2E' , fontSize: 13, fontWeight: '700'}}>{item.title}</Text>
                    <Text style={{color: '#080808', fontSize: 12,}}>{item.date}</Text>
                </View>
                <View marginTop={5}>
                    <Text style={{color: '#000', fontSize: 12, lineHeight: 16,}}>{item.desc}</Text>
                </View>
                <View display='flex'  flexDirection='row' justifyContent='space-between' marginTop={3}>
                    <Text></Text>
                    <Icon name='ios-share-outline' size={15}/>
                </View>
            </View>
        </View>
    )
}


const ResearchBox = () => {
    return (  
        <View margin={10}>
            <Text style={styles.headingText}>215 Expert Opinions</Text>

            <View style={styles.stat}>
                <View marginTop='auto' marginBottom='auto' marginRight={10}>
                    <View style={styles.ec2}>
                        <Text style={styles.ec1}>12%</Text>
                    </View>
                </View>
                <View marginTop='auto' marginBottom='auto'>
                    <View display="flex" flexDirection='row' margin={5}>
                        <View  display="flex" flexDirection='row' marginTop='auto' marginBottom='auto'>
                            <View style={styles.rect11}></View>
                            <View style={styles.rect12}></View>
                        </View>
                        <View><Text  style={{color: '#E432C1', fontSize: 13,marginLeft: 10,fontWeight: '600'}}>12% Buy Yes</Text></View>
                    </View>
                    <View display="flex" flexDirection='row'  margin={5}>
                        <View display="flex" flexDirection='row' marginTop='auto' marginBottom='auto'>
                            <View style={styles.rect21}></View>
                            <View style={styles.rect22}></View>
                        </View>
                        <Text style={{color: '#687684', fontSize: 13,marginLeft: 10, fontWeight: '600',}}>88% Buy No</Text>
                    </View>
                    <View display="flex" flexDirection='row'  margin={5}>
                        <View display="flex" flexDirection='row' marginTop='auto' marginBottom='auto'>
                            <View style={styles.rect31}></View>
                            <View style={styles.rect32}></View>
                        </View>
                        <Text  style={{color: '#687684', fontSize: 13,marginLeft: 10,fontWeight: '600'}}>1% No Resolve</Text>
                    </View>
                </View>
            </View>

            <View marginTop={10}>
                <FlatList 
                        data = {cardsData}
                        keyExtractor={item=>item.id}
                        horizontal
                        renderItem={({item}) => <CustomCard item={item}/>}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 18,
        color: '#687684',
        lineHeight: 22,
        fontWeight: '700',
    },
    ec1: {
        color: '#E432C1',
        fontSize: 17,
        fontWeight: '900',
        backgroundColor: '#C930C51A',
        padding: 20,
        paddingTop: 25,
        borderRadius:  500,
        paddingBottom: 25,
    },
    ec2: {
        padding: 8,
        borderRadius: 500,
        backgroundColor: '#C930C51A',
        textAlign: 'center',
    },
    stat: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        justifyContent: 'space-around',
    },
    rect11: {
        width: 30,
        backgroundColor: '#E432C1',
        height: 10,
        borderRadius: 20,
    },  
    rect12: {
        width: 150,
        backgroundColor: '#D9D9D9',
        height: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        padding: 0,
        marginLeft: 0,
    },
    rect21: {
        width: 130,
        backgroundColor: '#687684',
        height: 10,
        borderRadius: 20,
    },  
    rect22: {
        width: 50,
        backgroundColor: '#D9D9D9',
        height: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        padding: 0,
        marginLeft: 0,
    },
    rect31: {
        width: 15,
        backgroundColor: '#687684',
        height: 10,
        borderRadius: 20,
    },  
    rect32: {
        width: 165,
        backgroundColor: '#D9D9D9',
        height: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        padding: 0,
        marginLeft: 0,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    card: {
        width: 230,
        margin: 2,
        marginLeft: 4,
        marginRight: 4,
        padding: 10,
        borderColor: '#CED5DC',
        borderWidth: 0.5,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
      },
})
 
export default ResearchBox;