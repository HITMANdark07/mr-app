import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
import ViewShot,{ captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';
const ig = 'https://s3-alpha-sig.figma.com/img/7e84/585f/4d8fb2194a172cacc908d6d43497b343?Expires=1641772800&Signature=KXqmXE3XpjxvgARcZ~02M4TZ7UueadjK~rAKQhYzUJKwU~trlrBeR-QTw1kX7PnQmjEXRwOaepS-F772177IrmsVYitkBNihkf31GmLDP9bvqTu9NjDBpSXBV~aAkKTaakQuF-P4bdgw~7TOHelicoox8rNt0C~BEi-zZFHpvlIBoKzC0MjjVe28a5SGZv-VjanPJs-3TmH51kY5xwa03Ry77Iz3FG7-q-~FtXXfbOiA4~o6JyttXqxC3eWsd-2nQCacCg7JfkEZ6k8~GJhcK5jyesAYudsKNiIj8F4Vg1KFiNO8RNqiU44pxdyS17oK7ubAsgvrdKlzwoHpSyWoPQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

const theme1="#5DBCB0";
const FinalPoster = ({navigation, route:{params:{image, profile, title, description, name}}}) => {

    const viewRef = React.useRef();

    const shareImage = async() => {
        try{
            const uri = await captureRef(viewRef,{
                format:'png',
                quality:0.8
            });
            await Share.open({url:uri, message:description});
        }catch(err){
            console.log(err);
        }
    }
    return (
        <View style={{flex:1, backgroundColor:theme1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={35} color={'#fff'} />
                </TouchableOpacity>
                <Text style={{color:'#fff', alignSelf:'center', fontSize:22, fontWeight:'600'}}>Final Poster</Text>
                <View>
                    <Image style={{height:35, width:35}} source={require("../../assets/logowhite.png")} />
                </View>
            </View>
            <View style={styles.body}>
                <View style={{width:'10%',borderWidth:3,borderRadius:12, borderColor:'#5DBCB0',alignSelf:'center', marginTop:10}} />
                <ScrollView showsVerticalScrollIndicator={false}>
               
                    <ViewShot ref={viewRef} style={[styles.main, {backgroundColor:getRandomColor()}]} >

                        <View style={styles.card}>
                            <Image source={{uri:image}} style={{height:200, width:'100%', borderRadius:15}} resizeMode="cover" />
                        </View>
                        {/* <Text style={styles.desc}>{description}</Text> */}
                        <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
                            <Image source={{uri:profile ? profile : ig}} style={{width:50, height:50, borderRadius:100}} />
                            <Text style={{marginLeft:20, fontSize:16 , fontWeight:'700'}}>{name ? name: 'Dr. XYZ'}</Text>
                        </View>

                    </ViewShot>
                    {/* <TemplateCard  image={image} profile={profile} title={title} description={description} name={name} /> */}

                    <View style={{flexDirection:'row', justifyContent:'center', marginTop:50}}>
                        <TouchableOpacity style={{backgroundColor:theme1, padding:10, width:'40%', borderRadius:20}}
                        activeOpacity={0.6}
                        onPress={shareImage}
                        >
                            <Text style={{color:'#fff', fontWeight:'700', fontSize:20,alignSelf:'center'}}>SHARE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

function getRandomColor() {
    var colors = ['#FCF3F3','#FDF2E3','#F9EBED','#EBE9FB'];
    var color = colors[Math.floor(Math.random() * 4)];
    return color;
}

const styles = StyleSheet.create({
    main:{
        flexDirection:'column',
        width:'90%',
        alignSelf:'center',
        padding:10,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 5,
    },
    desc:{
        position:'absolute',
        alignSelf:'center',
        padding:10,
        paddingTop:20,
        color:'#fff'
    },
    header:{
        flexDirection:'row',
        top:0,
        justifyContent:'space-between',
        margin:15,
        marginBottom:60
    },
    body:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    add:{
        position:'absolute',
        backgroundColor:'#fff',
        padding:9,
        margin:10,
        right:0,
        borderRadius:50,
        bottom:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})


export default FinalPoster;
