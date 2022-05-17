import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        };
    
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler} 
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
        />
    );
}

const styles = StyleSheet.create({});

export default CategoriesScreen;