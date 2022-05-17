import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
    // const favoriteMealsContex = useContext(FavoritesContext);
    // const favoriteMealsIds = favoriteMealsContex.ids;
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }
    return (
        <MealsList items={favoriteMeals} />
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default FavoritesScreen;