import { useEffect, useState } from "react";
import yelp from "./../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchApi = async (searchTerm) => {
    setLoading(true);
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "helsinki",
        },
      });
      setResult(res.data.businesses);
      setErrorMessage("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [errorMessage, results, searchApi, loading];
};
