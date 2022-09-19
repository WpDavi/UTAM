import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View ,StyleSheet, SafeAreaView, ImageBackground, Image, TouchableOpacity } from "react-native";


export default function PreLogin() {
    
    const navigation = useNavigation()
    

    return(
        <ImageBackground style={styles.fundo}
        source={require('../assets/fundo.png')}>
            <View style={styles.containerimg}>
                <Image style={styles.logomarca} source={require('../assets/logo.png')} />
            </View>
            

            <View style={styles.conteinerinfo}>
                <Text style={styles.txtdescrition}> U.T.A.M - Unidade Tática Airsoft Moc,
                       criada com a finalidade da pratica
                       de esporte fantasístico, que traz
                       inúmeros benefícios para quem pratica.</Text>

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.txtbutton}>Fazer Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttoncadastr}
                onPress={() => navigation.navigate('Registration')}
                >
                    <Text style={styles.txtbuttoncadastro}> Não é cadastrado? </Text>
                    <Text style={styles.txtbuttoncadastro2}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </ImageBackground>

             
    )
}

const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
       
       
    },
    logomarca:{
        width: 300,
        height:300,
    },
    
    containerimg:{
        flex:1,
        justifyContent:'center'
    },


    conteinerinfo: {
        flex:1,
        width:'100%',
        backgroundColor:'black',    
        opacity: 0.5,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,  
        alignItems:'center'     ,
        justifyContent: 'space-around'
    },

    txtdescrition:{
        color:'white',
        marginLeft: 35,        
        marginRight: 35,    
        fontSize: 18,
        textAlign:'center'               
    },
    button:{
        backgroundColor: '#FFBF18',
        borderRadius: 25
    },
    txtbutton:{
        fontSize: 25,
        color: '#142B09',
        fontWeight:'bold',
        margin: 10,
        marginLeft:50,
        marginRight: 50
    },
    buttoncadastr:{
        flexDirection:'row'
    },
    txtbuttoncadastro: {
        color: 'white'        
    },
    txtbuttoncadastro2:{
        color: 'white',
        fontWeight:'bold'
    }


})