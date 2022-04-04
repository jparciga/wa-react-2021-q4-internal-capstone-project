import React from 'react';
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    text:{
        fontFamily:"Roboto",
        fontSize:'18px',
        paddingBottom: '5px'
    }
})

const Footer = () => {
  return(
    <div style={{display: "grid", paddingBottom: '20px'}}>
      <Text style={styles.text}>Ecommerce created during Wizeline’s Academy React Bootcamp</Text>
      <Text style={styles.text}>Realizado por Ana Guerrero</Text>
    </div>
  );
}

export default Footer;