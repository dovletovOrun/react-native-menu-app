import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";

import { MEALS } from "../data/dummyData";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favoriteMealCtx = useSelector((state) => state.favoriteMeals.ids)

  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealCtx.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Your favorites is empty</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  },
  text: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "bold"

  }
});
