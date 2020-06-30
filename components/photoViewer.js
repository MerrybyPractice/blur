import React from "react"; 
import {View, Image, ScrollView, StyleSheet} from "react-native";

// need to get source from image picker
// use scrollview for zoom? Avaliable only on IOS > need to set maximumZoomScale and minimumZoomScale
const styles = StyleSheet.create({
    container: {
        paddingTop: 400, 
        paddingHorizontal: 400,
        backgroundColor: "blue",
        height:800, 
        width: 400,
        alignItems: "center",
    }, 
    image: {
        height: 200,
        width: 200,
    
    },

})

const PhotoViewer = (props) => {

    return (
        <View style={styles.container}>
        <Image style={styles.image} source="https://image.tmdb.org/t/p/original/7FTY3r4vydTRho9pciudwS03x4B.jpg"/>
        </View>
    );
}

export default PhotoViewer;