import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const imgPlaceholder =
  "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.image_url ? item.image_url : imgPlaceholder }}
      />
      <View style={styles.innerWrapper}>
        <Text style={styles.title}>
          {item.name.length > 30
            ? item.name.substring(0, 20) + "..."
            : item.name}
        </Text>
        <Text numberOfLines={1} style={styles.categories} ellipsizeMode="head">
          {item.categories[0].title}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Rating:</Text>
            <View style={styles.rating}>
              <Text style={{ fontSize: 12, color: "#000" }}>{item.rating}</Text>
            </View>
          </View>
          <Text style={{ marginLeft: 10 }}>Reviews: {item.review_count}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    width: 300,
  },
  image: {
    height: 150,
    width: 290,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontSize: 18,
    width: 300,
    fontWeight: "bold",
  },
  categories: {
    overflow: "hidden",
    color: "#777",
  },
  innerWrapper: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  rating: {
    backgroundColor: "#ddd",
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginLeft: 3,
    borderRadius: 4,
    width: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ResultDetails;
