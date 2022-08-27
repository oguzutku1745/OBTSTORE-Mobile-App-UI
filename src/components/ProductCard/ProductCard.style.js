import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: '#eceff1',
        borderRadius:10,
        marginRight: 15,
        marginTop: 10,
        width: Dimensions.get('window').width *2.75/6,

    },
    image:{
        height: Dimensions.get('window').height /4,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    inner_container:{
        padding: 5,
    },
    title:{
        color:'black',
        fontStyle: 'bold',
        fontSize: 20,
        fontWeight: '500',
    },
    price: {
        fontStyle: 'bold',
        fontWeight: '800',
        marginTop: 5,
        textAlign: 'left',
        textAlignVertical: 'bottom',
    },
    stock: {
        color: 'red',
    }
})