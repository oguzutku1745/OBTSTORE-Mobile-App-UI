import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({pinfo}) => {


    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: pinfo.imgURL}} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{pinfo.title}</Text>
                <Text style={styles.price}>{pinfo.price}</Text>
                <Text style={styles.stock}>{pinfo.inStock ? '' : 'STOKTA YOK'}</Text>
            </View>
        </View>
    );
};

export default ProductCard;