import { StyleSheet, Text, View, Image } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../assets/images/success.png')}
            />
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
            rounds to guess the number{' '}
            <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    imageContainer: {
        margin: 36,
        width: 300,
        height: 300,
        overflow: 'hidden',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,    
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
    summaryText: {
        marginBottom: 24,
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default GameOverScreen;
