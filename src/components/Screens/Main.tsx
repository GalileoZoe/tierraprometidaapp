import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Importación de iconos de Expo
import { AuthContext } from '../../context/AuthContext';
import { useFeed } from '../../context/FeedContext';
import { useSession } from '../../context/SessionContext';

export const Main = () => {
    const {session, changeSession}=useSession();
    const {feed, changeFeed}=useFeed();
    const { authState, logout } = useContext(AuthContext);

    return (
        <View style={styles.section}>

            <View style={styles.item}>
                <Image style={styles.img} source={require('../../assets/logo-09.png')} />
                <Text style={styles.texts} >24 horas</Text>
            </View>
            <Text style={styles.title}>Menú</Text>

            
            <TouchableOpacity>
                <FontAwesome name="user-circle" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>changeFeed(2)} >
                <FontAwesome name="users" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome name="user-md" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome name="heartbeat" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome name="comments" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome name="th-large" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity   
  onPress={() => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro que deseas salir?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Salir",
          onPress: () => {
            logout();
            changeSession(0);
            changeFeed(0);
          }
        }
      ]
    );
  }}
>
  <FontAwesome name="sign-out" style={styles.icon} />
</TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    item: {
        alignItems: 'center',
        marginBottom: 20,
    },
    margin: {
        marginTop: 100,
    },
    img: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: '100',
        color: '#db1313',
        marginVertical: 20,
    },
    icon: {
        fontSize: 50,
        fontWeight: '100',
        color: '#db1313',
        paddingVertical: 15,
    },
    texts: {
        color: '#db1313',
        textAlign: 'center',
        marginBottom: 10,
    },
    form: {
        width: '100%',
        alignItems: 'center',
    },
    inputredlogin: {
        width: '90%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#db1313',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#db1313',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'whitesmoke',

    },
    loading: {
        marginTop: 20,
    },
})
