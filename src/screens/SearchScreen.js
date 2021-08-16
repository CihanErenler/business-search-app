import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import * as Progress from "react-native-progress";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [errorMessage, results, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((p) => {
      return p.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onSubmitTerm={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      {results.length > 0 ? (
        <ScrollView>
          <ResultList
            price={filterResultsByPrice("€")}
            title="Cost Efective"
          />
          <ResultList
            price={filterResultsByPrice("€€")}
            title="Bit Pricier"
          />
          <ResultList
            price={filterResultsByPrice("€€€")}
            title="Big Spender"
          />
        </ScrollView>
      ) : (
        <View style={styles.loaderWrap}>
          <Progress.Circle borderWidth={3} size={150} indeterminate={true} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
  searchText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#444",
    paddingLeft: 5,
  },
  error: {
    height: 70,
    textAlign: "center",
    backgroundColor: "#ffe2de",
    color: "red",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 5,
  },
  loaderWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});

export default SearchScreen;
//
