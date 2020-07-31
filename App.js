/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,


} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      botao: 'INICIAR',
      ultimo: null,

    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

  }

  start(){
    // se já rodando vai funcionar como pause
    
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'INICIAR'});
    }
    else{
      this.timer = setInterval(() => {
      this.setState({ numero: this.state.numero + 0.1 })
      this.setState({botao: 'PAUSE'});

    }, 100);
    // 1000: 1s
    // 100: 0,1s
    }

    
  }// App

  stop(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
      botao: 'INICIAR',
      ultimo: this.state.numero,
    })

  }

  render(){
    return(

        <View style={styles.container}>
          <Image 
            source={require('./src/cronometro.png')}
            style={styles.cronometro}
          />
          <Text style={styles.timer}>{ this.state.numero.toFixed(1) }</Text>

          <View style={styles.btnArea}>

            <TouchableOpacity style={styles.btn} onPress={this.start}>
              <Text style={styles.btnTexto}> {this.state.botao} </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={this.stop}>
              <Text style={styles.btnTexto}>ZERAR</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.ultimo}>
            <Text style={styles.ultimoTexto}>
              
              { this.state.ultimo > 0 ? "Último: "+this.state.ultimo.toFixed(2)+'s' : '' }
            
            </Text>
          </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },

  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',

  },

  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    margin: 17,
    borderRadius: 8,
  },

  btnArea:{
    flexDirection: 'row',
    marginTop: 100,
    height: 40,

  },

  btnTexto:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00aeef',
  },  

  ultimo:{
    marginTop: 50,

  },
  ultimoTexto:{
    fontSize: 25,
    fontStyle: "italic",
    color: 'white',
  },

});

export default App;
