import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        width: 110,
        height: 150,
        borderRadius: 100,
        borderBottomLeftRadius: 0,
    },
    title: {
        position: 'absolute',
        backgroundColor: '#0F4C75',
        marginLeft: 35,
        padding: 10,
        paddingLeft: 80,
        borderRadius: 100,
    },
    date:{
        position: 'absolute',
        borderBottomRightRadius: 100,
        backgroundColor: '#BBE1FA',
        marginLeft: 105,
        marginTop: 47,
        padding: 7,
        paddingLeft: 10,
    },
    trailerContainer: {
        backgroundColor:'#3282B8',
        width: 320,
        bottom: 0,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        paddingLeft: 10,
        paddingRight: 20,
        padding: 3,
    },
    backgroundImage: {
        width: '100%',
        height: 150,
        position: 'absolute',
        borderRadius: 100,
        borderBottomLeftRadius: 0,
    }
});