import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Button, Container, ContainerImg, ContainerInfos, ContainerInput, ImgInput, Input, LogoImg, TxtButton, TxtCadastro } from "./styles";

//name, email, password

export default function Registration() {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState ('')

    const [level, setLevel] = useState(1)
     
 

    const registration = async()=>{       
        if (name != '' && email != '' && password != '') {
            const req = await fetch('http://192.168.1.83:3000/auth/register', {
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
            alert(json.msg)        
        } else {
            alert(' ospreencha campso')           
        }
    }

    return(     
        <Container source={require('../../assets/fundo.png')}>
            
            <ContainerImg>
                <LogoImg source={require('../../assets/logo.png')}/>
            </ContainerImg>

            <ContainerInfos>      
            {level == 1 && 
                <ContainerInput>
                <ImgInput source={require('../../assets/perfil.png')} />

                <Input
                placeholderTextColor={'black'}
                placeholder={'Nome'}
                onChangeText={t=>setName(t)}
                value={name}
                
                />                
            </ContainerInput>
            }    
            
            {level == 1 && 
                <ContainerInput>
                    <ImgInput source={require('../../assets/email.png')} />

                    <Input
                    placeholderTextColor={'black'}
                    placeholder={'E-mail'}    
                    onChangeText={t=>setEmail(t)}
                    value={email}                
                    />                
                </ContainerInput>}  

                <ContainerInput>
                    <ImgInput source={require('../../assets/senha.png')} />

                    <Input
                    placeholderTextColor={'black'}
                    placeholder={'Senha'}  
                    onChangeText={t=>setPassword(t)}
                    value={password}                  
                    />                
                </ContainerInput>   
                <ContainerInput>

                    <ImgInput source={require('../../assets/fone.png')} />

                    <Input
                    placeholderTextColor={'black'}
                    placeholder={'Repita a senha'}
                    onChangeText={t=>setConfirmpassword(t)}
                    value={confirmpassword}               
                    />                
                </ContainerInput>   
                <ContainerInput>

                    <ImgInput source={require('../../assets/fone.png')} />

                    <Input
                    placeholderTextColor={'black'}
                    placeholder={'Telefone para contato em caso de emergência'}                    
                    />                
                </ContainerInput>    
                <ContainerInput>

                    <ImgInput source={require('../../assets/sangue.png')} />

                    <Input
                    placeholderTextColor={'black'}
                    placeholder={'Tipo sanguíneo'}                    
                    />                
                </ContainerInput>       

                <Button
                onPress={registration}>
                    <TxtButton> CADASTRAR </TxtButton>
                </Button>

                <Button
                onPress={()=> navigation.navigate('Login') }
                >
                    <TxtCadastro>Já sou cadastrado!!!</TxtCadastro> 
                </Button>
                
             </ContainerInfos>          
        </Container>

    )
}
