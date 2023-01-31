import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import styled from "styled-components";

export default function PreLogin() {
  const navigation = useNavigation();

  return (
    <Container source={require("../assets/fundo.png")}>
      <SafeAreaView>
        <ContainerImg>
          <Img source={require("../assets/logo.png")} />
        </ContainerImg>

        <ContainerInfo>
          <TxtDescription>
            U.T.A.M - Unidade Tática Airsoft Moc, criada com a finalidade da
            pratica de esporte fantasístico, que traz inúmeros benefícios para
            quem pratica.
          </TxtDescription>

          <ContainerButton onPress={() => navigation.navigate("Login")}>
            <Txtbutton>Fazer Login</Txtbutton>
          </ContainerButton>

          <ContainerRegister
            onPress={() => navigation.navigate("Registration")}
          >
            <TxtButtonRegister> Não é cadastrado? </TxtButtonRegister>
            <TxtButtonRegister2>Cadastrar</TxtButtonRegister2>
          </ContainerRegister>
        </ContainerInfo>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

const ContainerImg = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Img = styled.Image`
  width: 300px;
  height: 300px;
`;

const ContainerInfo = styled.View`
  flex: 1;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  align-items: center;
  justify-content: space-around;
`;

const TxtDescription = styled.Text`
  color: white;
  margin-left: 35px;
  margin-right: 35px;
  font-size: 18px;
  text-align: center;
`;

const ContainerButton = styled.TouchableOpacity`
  background-color: #ffbf18;
  border-radius: 25px;
`;

const Txtbutton = styled.Text`
  font-size: 25px;
  color: #142b09;
  font-weight: bold;
  margin: 10px;
  margin-left: 50px;
  margin-right: 50px;
`;

const ContainerRegister = styled.TouchableOpacity`
  flex-direction: row;
`;

const TxtButtonRegister = styled.Text`
  color: white;
`;
const TxtButtonRegister2 = styled.Text`
  color: white;
  font-weight: bold;
`;
