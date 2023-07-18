import React, {useState} from "react";
import {View, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, Alert} from "react-native";

const Home = () => {

    const [name, setName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [address, setAddress] = useState<String>('');

    const showAlert = () => {
        let msg = 'Nome: '+name.toString()+'\n' +
            'E-mail: '+email.toString()+'\n' +
            'Telefone: '+phone.toString()+'\n' +
            'Endereço: '+address.toString()+'\n';
        Alert.alert('Sucesso', msg);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>Dados pessoais</Text>
            </View>
            <View style={styles.boxFields}>
                <TextInput placeholder={"Nome"} keyboardType={"default"} style={styles.textInput} onChangeText={(name) => setName(name)} />
                <TextInput placeholder={"E-mail"} keyboardType={"email-address"} style={styles.textInput} onChangeText={(email) => setEmail(email)} />
                <TextInput placeholder={"Telefone"} keyboardType={"phone-pad"} style={styles.textInput} onChangeText={(phone) => setPhone(phone)} />
                <TextInput placeholder={"Endereço"} keyboardType={"default"} style={styles.textInput} onChangeText={(address) => setAddress(address)} />
            </View>
            <View style={styles.boxButtonSubmit}>
                <TouchableOpacity style={styles.buttonSubmit} activeOpacity={0.8} onPress={showAlert}>
                    <Text style={styles.textButtonSubmit}>{'Cadastrar'.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    boxTitle: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 26,
        fontWeight: "bold"
    },
    boxFields: {
        flex: 2,
        justifyContent: "space-evenly"
    },
    boxButtonSubmit: {
        flex: 2,
    },
    textInput: {
        height: 40,
        borderWidth: 0.5,
        borderColor: '#b3b3b3',
        padding: 10,
        borderRadius: 3
    },
    buttonSubmit: {
        borderWidth: 0.5,
        backgroundColor: '#d42828',
        borderColor: '#d42828',
        padding: 10,
        borderRadius: 8
    },
    textButtonSubmit: {
        color: '#fff',
        textAlign: "center",
        fontWeight: "bold"
    },
});

export default Home;
