import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

//https://github.com/react-native-community/react-native-modal
import Modal from "react-native-modal"

export default (props) => {
    return (
        <Modal
            style={styles.container}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            animationInTiming={500}
            backdropOpacity={0.40}
            onBackButtonPress={props.onBackButtonPress}
            onBackdropPress={props.onBackdropPress}
            isVisible={props.isVisible}
        >
            <View style={styles.containerView}>
                <Text style={styles.text1}>Esse aplicativo faz a aplicação do algoritmo Bubble Sort na prática para fins didáticos, foi criado utilizado React Native e seu código fonte está disponível no GitHub.</Text>
                    <Text
                    selectable={true}
                    >
                    Link
                    </Text>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    containerView: {
        height: "80%",
        width: "95%",
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: 'center',
        padding:30
    },
    text1:{
        fontSize:20
    }
});