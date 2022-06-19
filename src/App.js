import React from "react";
import Header from "../src/componente/Header";
import {
  AppContainer,
  MessageContainer,
  InputsContainer,
  NameInput,
  MessageInput
} from "./styled";
// inputs controlados , primeiro fazer a  parte estática da aplicação
//usando os dados de uma variavel
export default class App extends React.Component {
  state = {
    menssages: [],
    userValue: "",
    messageValue: ""
  };
  // a função onchange permite que um input seja manipulado
  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value });
  };
  onChangemessageValue = (event) => {
    this.setState({ messageValue: event.target.value });
  };
  sendMessage = () => {
    // função  new message , cria um novo array de mensagens com formato igual ao do estado
    //constante  newMessage , pe um objeto com as mensmas propriedades do obejeto do estado
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    };
    console.log(newMessage);
    //desestruturação
    // aqui é declarado uma nova contante, que copia o Array do estado e acrescenta o novo
    //array com os dados de entrada do usuário
    const newMessageArrray = [newMessage, ...this.state.menssages];
    this.setState({ menssages: newMessageArrray, messageValue: "" });
  };

  render() {
    // console.log(this.state.userValue);
    // console.log(this.state.messageValue);
    return (
      <AppContainer>
        <Header />
        <MessageContainer>
          {/*  map cira um array, igual ao original e sua saida é mostrada na tela  */}
          {this.state.menssages.map((menssages, index) => {
            return (
              <p key={index}>
                {/* cada filho de um elemento pai necessita de uma Key para questões interna  do React */}
                {/* no caso  foi usado index , por ser o segundo elemento do map , e ser unico para cada posição do array */}
                <strong>{menssages.user}</strong>: {menssages.text}
              </p>
            );
          })}
        </MessageContainer>
        <InputsContainer>
          {/* o value é declado no estato , e usado nos inputs para que seja enviado os dado de acordo com value de cada um 
        assim os inputs passam a ter seus valores trocados pelo do user , e renderizado na tela  */}
          <NameInput
            onChange={this.onChangeUserValue}
            value={this.state.userValue}
            placeholder={"nome"}
          />
          <MessageInput
            onChange={this.onChangemessageValue}
            value={this.state.messageValue}
            placeholder={"messagem"}
          />
          <button onClick={this.sendMessage}>Enviar</button>
          {/* a função  onclick , dar funcionalidades aos botão nesse caso envia as menssagens  */}
        </InputsContainer>
      </AppContainer>
    );
  }
}
