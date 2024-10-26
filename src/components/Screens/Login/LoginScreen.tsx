import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useLogin } from '../../../hooks/useLogin';
import { FontAwesome } from '@expo/vector-icons';  // Importación de iconos de Expo
import { Styles } from '../../../../Styles';

export const LoginScreen: React.FC = () => {
    const { 
        loading, 
        state, 
        handleInputChange, 
        handleLogin,
        request 
    } = useLogin();

    return (
        <View style={Styles.section}>
            <View style={Styles.margin} ></View>
            <View style={Styles.item}>
                <Image style={Styles.img} source={require('../../../assets/logo-09.png')} />
                <Text style={Styles.texts} >24 horas</Text>
            </View>

            <Text style={Styles.title}>Iniciar Sesión</Text>
            
            <View style={Styles.form}>
                {typeof request === "boolean" && !request && (
                    <Text style={Styles.texts}>
                        {'Contraseña incorrecta\nEnvío de datos faltantes'}
                    </Text>
                )}

                <TextInput
                    style={Styles.inputredlogin}
                    value={state.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    placeholder="Correo Electrónico"
                    keyboardType="email-address"
                    editable={!loading}
                />

                <TextInput
                    style={Styles.inputredlogin}
                    value={state.password}
                    onChangeText={(value) => handleInputChange('password', value)}
                    placeholder="Contraseña"
                    secureTextEntry
                    editable={!loading}
                />

                <TouchableOpacity style={Styles.button} onPress={handleLogin} disabled={loading}>
                    <Text style={Styles.buttonText}>Iniciar Sesión</Text>
                    <FontAwesome name="sign-in" size={24} color="black" style={Styles.buttonText} />
                </TouchableOpacity>

               

                {loading && <ActivityIndicator style={Styles.loading} size={50} color="black" />}
            </View>
        </View>
    );
};


