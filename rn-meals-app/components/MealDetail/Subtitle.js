import { Text, View, StyleSheet } from 'react-native';

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{ children }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e2b497',
    }
});

export default Subtitle;