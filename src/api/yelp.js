import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer eoi7t_wRB1_VYWnQDI7kO-5itJ-fHkS1texgSBiKJUXTDmyfMyGTNIahwsByABUBMAS09Ctz2xEyRuxekFGYNmodXXqpU1Sdq-US1Q25EghsvnYrCI9jOR6O1JgOYXYx",
  },
});
