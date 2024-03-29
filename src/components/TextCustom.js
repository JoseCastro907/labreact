import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { fontsName } from '../utils/fonts';

const TextCustom = ({ fontFamily, ...props }) => {
	let textStyle;

	switch (fontFamily) {
		case 'regular':
			textStyle = styles.textRegular;
			break;
		case 'bold':
			textStyle = styles.textBold;
			break;
		case 'fancy':
			textStyle = styles.textTitle;
			break;
		default:
			textStyle = styles.textRegular;
			break;
	}

	return <Text {...props} style={[props.style, textStyle]}></Text>;
};

const styles = StyleSheet.create({
    textRegular:{
        fontFamily: fontsName.REGULAR,
    },
    textBold:{
        fontFamily: fontsName.BOLD,
    },
    textTitle:{
        fontFamily: fontsName.TITLE,
    },
});

export default TextCustom;
