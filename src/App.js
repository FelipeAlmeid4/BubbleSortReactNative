import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Picker, Alert, Clipboard } from 'react-native';

import BubbleSort from './lib/bubblesort';
import ModalResult from './layouts/ModalResult';
import ModalAbout from './layouts//ModalAbout';

//https://github.com/react-native-community/react-native-linear-gradient
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.validation = /^([0-9]{1,7})+(\,[0-9]{1,7})*$/gi;

    this.state = { valueText: '', modo: 'C', newValueText: "", isVisibleAbout: false, isVisibleResult: false, arrayMatriz: "" }
    bubbleSort = new BubbleSort();
  }

  componentDidMount() {
    this.setState({ valueText: '', modo: 'C', newValueText: '', isVisible: false, arrayMatriz: "" })
  }

  PressButton = () => {
    //Função que dispara o pressionamento do botão Ordenar
    if (this.state.valueText !== "") {
      let newValueText = bubbleSort.start(this.state.valueText, this.state.modo)

      if (newValueText !== undefined) {
        arrayMatriz = this._generateArray(newValueText, 5)
        newValueText = newValueText.join(',')
        this.setState({ newValueText, arrayMatriz })
        this.setState({ isVisibleResult: true })
      } else {
        Alert.alert("Ops, Algo deu Errado !", "Dados inválidos !")
      }
    } else {
      Alert.alert("Ops, Algo deu Errado !", "Adicione números aleatórios para fazer uma ordenação.")
    }

  }

  _generateArray = (base, maximo) => {
    //Função que quebra um Array gerando uma matriz
    let resultado = [[]];
    let grupo = 0;

    for (let indice = 0; indice < base.length; indice++) {
      resultado[grupo].push(base[indice]);

      if (resultado[grupo].length === maximo) {
        grupo++;
        if (indice + 1 < base.length) resultado[grupo] = [base[indice]];
      }
    }
    return resultado;
  }

  exitModal = () => {
    // Função que esconde as Modal ModalResult e ModalAbout
    this.setState({ isVisibleResult: false, isVisibleAbout: false })
  }

  setVisibleAbout = () => {
    //Função que ativa a ModalAbout
    this.setState({isVisibleAbout:true})
  }

  setClip = () => {
    //Função que seta o estado newValueText para aréa de transferência
    Clipboard.setString(this.state.newValueText)
  }

  PressButtonClear = () => {
    //Função que limpa o estado do TextInput, o que aparece no text input está vinculado ao valueText
    this.setState({ valueText: '' })
  }

  setValueText = (valueText) => {

    if (valueText.match(this.validation) !== null ||
      valueText[valueText.length - 1] === ","
      && this.state.valueText[this.state.valueText.length - 1]
      !== "," && this.state.valueText.length > 0
      || this.state.valueText.length === 1) {
      this.setState({ valueText })
    }

  }




  render() {
    return (
      <LinearGradient style={styles.container} colors={["#410543", "#9d0ca2"]}>

        <View style={styles.containerTitle}>
          <Text style={styles.styleTitle}>Bubble Sort</Text>
        </View>

        <View style={styles.containerTextInput}>

          <ScrollView style={{ flex: 1, borderRadius: 10 }}>

            <TextInput
              style={styles.styleTextInput}
              placeholder="1, 32, 53, 537, 2, 32, 3224"
              defaultValue=''
              placeholderTextColor="#cecece"
              multiline={true}
              onChangeText={valueText => this.setValueText(valueText)}
              value={this.state.valueText}
              autoCorrect={false}
            />

          </ScrollView>
        </View>

        <View style={styles.containerButton}>

          <TouchableOpacity style={styles.styleButton}
            onPress={this.PressButton}
          >
            <Text style={styles.styleButtonText}>Ordernar</Text>
          </TouchableOpacity>

          <Picker
            selectedValue={this.state.modo}
            style={{ height: 50, width: 130 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ modo: itemValue })
            }>
            <Picker.Item label="Crescente" value="C" />
            <Picker.Item label="Decrescente" value="D" />
          </Picker>

        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.styleButton}
            onPress={this.PressButtonClear}
          >
            <Text style={styles.styleButtonText}>Limpar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.styleButton}
            onPress={this.setVisibleAbout}
          >
            <Text style={styles.styleButtonText}>Sobre</Text>
          </TouchableOpacity>
        </View>
        <ModalResult
          isVisible={this.state.isVisibleResult}
          onBackButtonPress={this.exitModal}
          onBackdropPress={this.exitModal}
          data={this.state.arrayMatriz}
          clip={this.setClip}
        />
        <ModalAbout
          isVisible={this.state.isVisibleAbout}
          onBackButtonPress={this.exitModal}
          onBackdropPress={this.exitModal}
        />
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerTitle: {
    flex: 1,
    marginTop: 20
  },
  styleTitle: {
    fontSize: 40,
    color: "#fff",
    fontWeight: 'bold'
  },
  containerTextInput: {
    flex: 2,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,

  },
  styleTextInput: {
    fontSize: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  containerButton: {
    width: '80%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 30
  },
  styleButton: {
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleButtonText: {
    fontWeight: 'bold'
  }
});

