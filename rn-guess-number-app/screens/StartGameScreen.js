import { useState } from 'react';
import { StyleSheet, Alert, TextInput, View } from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: () => setEnteredNumber('') }]
            );

            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
            <Card>
                <InstructionText>
                    Enter a Number
                </InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => setEnteredNumber('')}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    numberInput: {
        height: 50,
        width: 50,
        marginVertical: 8,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.accent500,
    },
});

export default StartGameScreen;