import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';


//https://github.com/react-native-community/react-native-modal
import Modal from "react-native-modal"

//https://github.com/Gil2015/react-native-table-component#readme
import { Table, Row, Rows } from 'react-native-table-component';



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
                <View style={styles.containerViewText}>
                    <ScrollView>

                        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Rows data={props.data} textStyle={styles.rowsText} />
                        </Table>
                    </ScrollView>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.styleButton}
                        onPress={props.clip}
                        >
                            <Text style={styles.styleButtonText}>Copiar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.styleButton}
                        onPress={props.onBackButtonPress}
                        >
                            <Text style={styles.styleButtonText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

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
        alignItems: 'center'
    },
    containerViewText: {
        margin: 20
    },
    styleText: {
        fontSize: 30
    },
    rowsText: {
        textAlign: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5
    },
    styleButton: {
        borderWidth: 0.5,
        borderRadius: 10,
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,
        marginRight:10
    },
    styleButtonText: {
        fontWeight: 'bold'
    }

});