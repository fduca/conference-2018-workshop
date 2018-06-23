import { StyleSheet, Dimensions } from "react-native";

export default {
  images: {
    heartIcon: require("../assets/heart.png")
  },

  tvshowURL: `https://api.themoviedb.org/3/discover/tv?api_key={put_your_api}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,

  styles: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    navBar: {
      width: "100%",
      height: 56,
      marginTop: 20,
      backgroundColor: "rgb(250,250,250)",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: "rgb(233, 233, 233)",
      justifyContent: "center",
      alignItems: "center"
    },
    itemContainer: {
      marginBottom: 30
    },
    image: {
      width: Dimensions.get("window").width,
      height: 500
    },
    info: {
      marginStart: 20,
      marginTop: 10,
      marginHorizontal: 15
    },
    icon: {
      height: 32,
      width: 32,
      marginBottom: 10
    },
    infoText: {
      fontWeight: "bold"
    }
  })
};
