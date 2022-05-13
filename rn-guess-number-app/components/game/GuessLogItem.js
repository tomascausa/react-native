import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 8,
        padding: 12,
        elevation: 4,
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
});

export default GuessLogItem;