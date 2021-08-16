import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onSubmitTerm }) => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={onSubmitTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    textAlign: "center",
    flexDirection: "row",
  },
  searchIcon: {
    fontSize: 32,
    color: "#212121",
    alignSelf: "center",
    marginLeft: 10,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 18,
  },
});

export default SearchBar;
