import {View, Text, Button, StyleSheet} from 'react-native'
import { useState } from 'react'

export default function Counter(){

    const [count, setCount] = useState(0);

    return (
        <View style = {styles.counterContainer}>
            <Text styles={styles.counterText}>you pressed me {count} times.</Text>
        <Button  color = "black" styles = {styles.counterButton} onPress={() => setCount(count +1)}  title='press'/>
        <Button color = "black" styles = {styles.counterButton} onPress={() => setCount(count -1)}  title='depress'/>
        <Button color = "black" styles = {styles.counterButton} onPress={() => setCount(0)}  title='unpress'/>

        </View>
    )
}

const styles = StyleSheet.create({

    counterContainer: {
        width: '80vw',
       
        marginLeft: '20px',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '10px',
        borderWidth: '2px',
        padding: 10,
        borderColor: 'black',
        marginTop: 10,
        zIndex: 5,
    },

    counterText: {
        fontSize: 30
    },

    counterButton: {
       color: 'pink'
       
    }
})
