import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';

const ExpenseItem = ({ id, description, amount, date }) => {
    const navigation = useNavigation();

    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', {
            expenseId: id
        });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {description}
                    </Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        padding: 12,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
    amountContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    amount: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
});

export default ExpenseItem;