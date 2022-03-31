import React, { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-web';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgLogo from './../images/cart-icon.png';
import './../css/navbar.css';
import Dropdown from './dropdown/dropdown'

const styles = StyleSheet.create({
    logo:{
        width:'10%',
        height: undefined, 
        aspectRatio: 10/4,
        margin: 0,
        display: 'inline-block'
    },
    text:{
        display:'inline-block',
        alignItems:'center',
        textAlign:'left',
        fontFamily:"Roboto",
        textTransform:'uppercase',
        fontSize:'24px',
        fontWeight:'bold'
    },
    textInput:{
        alignItems:'center',
        display:'inline-block',
    }
})

const NavBar = () => {
    const [selected, setSelected] = useState(undefined)

  return(
    <div className='mainNavbar' style={{padding: '10px'}}>
        <div className='navStart'>
            <Image style={styles.logo} source={require('./../images/sofaIcon.png')}/>
            <Text style={styles.text}>Furniture Store</Text>
            <Dropdown className='burguerMenu' onSelect={setSelected}/>
        </div>
        <div className='navbarEnd'>
            <TextInput style={styles.textInput} placeholder="Search"/>
            <img className='cart' style={{width: '50px', marginLeft: '10px'}} src={imgLogo}/>
        </div>
    </div>
  );
}

export default NavBar;