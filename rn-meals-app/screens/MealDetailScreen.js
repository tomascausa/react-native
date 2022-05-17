
import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    // const favoriteMealsContex = useContext(FavoritesContext);
    // const mealIsFavorite = favoriteMealsContex.ids.includes(mealId);
    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
    const mealIsFavorite = favoriteMealsIds.includes(mealId);
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const changeFavoritesStatusHandler = () => {
        if (mealIsFavorite) {
            // favoriteMealsContex.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealsContex.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={changeFavoritesStatusHandler}
                        color="white"
                        icon={mealIsFavorite ? "star" : "star-outline"}
                    />
                );
            }
        });
    }, [navigation, changeFavoritesStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});

export default MealDetailScreen;
