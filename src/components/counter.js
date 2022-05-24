import {View, Text, Button, StyleSheet} from 'react-native'


export default function Counter(){

    return (
        <View style = {styles.counterContainer}>
            <Text styles={styles.counterText}>you pressed me 0 times.</Text>
        <Button title='press me'/>

        </View>
    )
}

const styles = StyleSheet.create({

    counterContainer: {
        width: '80vw',
        marginLeft: '20px',
        margin: '20px 10vw',
        backgroundColor: 'white',
        borderRadius: '10px',
        borderWidth: '2px',
        padding: 10,
        borderColor: 'black'
    },

    counterText: {
        fontSize: 30
    }
})
