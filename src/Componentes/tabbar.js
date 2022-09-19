import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'







export default function tabBar({ state, navigation }) {
   
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
         
            
         <View style={styles.containertab}>
            

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Feed') } >   
            <Image style={{opacity: state.index ===0? 1 :0.5, width:30, height:30 }} source={require('../assets/feed.png')}/>                       
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Bazar') } >   
            <Image style={{opacity: state.index ===1? 1 :0.5, width:30, height:30 }} source={require('../assets/bazar.png')}/>                       
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Reclamaçoes') } >   
            <Image style={{opacity: state.index ===2? 1 :0.5, width:30, height:30 }} source={require('../assets/reclamações.png')}/>                       
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Hanking') } >   
            <Image style={{opacity: state.index ===3? 1 :0.5, width:30, height:30 }} source={require('../assets/hanking.png')}/>                       
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>goTo('Perfil') } >   
            <Image style={{opacity: state.index ===4? 1 :0.5, width:30, height:30 }} source={require('../assets/perfiltab.png')}/>                       
            </TouchableOpacity>
            
            

         </View>
       
    )
}

const styles = StyleSheet.create({
    
      containertab:{
        height:70,    
        backgroundColor: '#142B09',
        flexDirection:'row',   
        borderRadius:15,
        margin:10,    
        
        shadowColor:'red'  
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
   
    img:{
        width: 30,
        height: 30,
        
        
       
    }



})