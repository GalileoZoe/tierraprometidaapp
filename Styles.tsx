import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
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
        fontSize: 20,
        fontWeight: '100',
        color: '#db1313',
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
        color: '#db1313',
        // fontWeight: '100',

    },
    loading: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'whitesmoke',
    },
    backButton: {
        position: 'absolute',
        top: 16,
        left: 16,
    },
    row: {
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#db1313',
        justifyContent: 'space-between',
    },
    cardblack: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'space-between',
    },
    cardgreen: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6B8E23',
        justifyContent: 'space-between',
    },
    cardred: {
        flex: 1,
        margin: 8,
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#db1313',
        justifyContent: 'space-between',
    },
    lightCard: {
        backgroundColor: '#fff',
    },
    darkCard: {
        backgroundColor: 'transparent',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#db1313',
    },
    cardHeaderGreen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '100',
    },
    lightText: {
        color: '#db1313',
    },
    darkText: {
        color: 'black',
    },
    cardText: {
        fontSize: 14,
        marginTop: 4,
    },
    cardIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
});
