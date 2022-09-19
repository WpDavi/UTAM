import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

//name, email, password

export default function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState ('')
     
    const navigation = useNavigation()

    const registration = async()=>{       
        if (name != '' && email != '' && password != '') {

            const req = await fetch('http://192.168.0.61:3000/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    name:name,
                    email:email,
                    password:password,
                    confirmpassword:confirmpassword
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })

            const json = await req.json();

            console.log(json.msg)
           
                        
            

        } else {
            alert('preencha os campso')
            
            
        }
    }

    return(
        <ImageBackground style={{flex:1}} source={require('../assets/fundo.png')}>
            
            <View style={{alignItems:'center', marginBottom:15}}>
                <Image style={styles.img} source={require('../assets/logo.png')}/>
            </View>

            <View style={styles.containerinfo}>
                
                                
                <View style={styles.containerinput}>

                    <Image style={styles.imginput} source={require('../assets/perfil.png')} />

                    <TextInput style={styles.input}
                    placeholderTextColor={'black'}
                    placeholder={'Nome'}
                    onChangeText={t=>setName(t)}
                    value={name}
                    
                    />                
                </View>     

                <View style={styles.containerinput}>

                    <Image style={styles.imginput} source={require('../assets/email.png')} />

                    <TextInput style={styles.input}
                    placeholderTextColor={'black'}
                    placeholder={'E-mail'}    
                    onChangeText={t=>setEmail(t)}
                    value={email}                
                    />                
                </View>     

                <View style={styles.containerinput}>

                    <Image style={styles.imginput} source={require('../assets/senha.png')} />

                    <TextInput style={styles.input}
                    placeholderTextColor={'black'}
                    placeholder={'Senha'}  
                    onChangeText={t=>setPassword(t)}
                    value={password}                  
                    />                
                </View>    

                <View style={styles.containerinput}>

                    <Image style={styles.imginput} source={require('../assets/fone.png')} />

                    <TextInput style={styles.input}
                    placeholderTextColor={'black'}
                    placeholder={'Repita a senha'}
                    onChangeText={t=>setConfirmpassword(t)}
                    value={confirmpassword}               
                    />                
                </View>    

                <View style={styles.containerinput}>

                    <Image style={styles.imginput} source={require('../assets/fone.png')} />

                    <TextInput style={styles.input}
                    placeholderTextColor={'black'}
                    placeholder={'Telefone para contato em caso de emergência'}                    
                    />                
                </View>    

                <View style={styles.containerinput}>

                    <Image style={styles.imginput} source={require('../assets/sangue.png')} />

                    <TextInput style={styles.input}
                    placeholderTextColor={'black'}
                    placeholder={'Tipo sanguíneo'}                    
                    />                
                </View>       

                <TouchableOpacity style={styles.button}
                onPress={registration}>
                    <Text style={styles.txtbutton}> CADASTRAR </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttoncadastro}
                onPress={()=> navigation.navigate('Login') }
                >
                    <Text style={styles.txtcadastro}>Já sou cadastrado!!!</Text> 
                </TouchableOpacity>
                
             </View>
            
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    img:{
        width: 250,
        height: 250,
        marginTop:20,
        
    },

    containerinfo:{
        flex:1,        
        width: '100%',    
        alignItems:'center',
        justifyContent:'space-around'
    },

    containerinput:{
        backgroundColor: '#FFBF18',
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 12,      
        width: '90%', 
       
    },

    imginput:{
        width:30,
        height:30,
        marginLeft: 10
    },

    input:{
        flex:1,
        marginLeft: 10,
    },

    button:{
        backgroundColor:'#092301',
        padding:10,
        marginTop:10,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#FFBF18',
        width: '60%',
        alignItems:'center',
    },

    txtbutton:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },

    txtcadastro:{
        color:'white',
        fontSize:20,
        
        
    }

})