import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textPrincipal: {
    fontSize: 30,
    textAlign: "center",
    margin: 0,
    color: "#f18392",
  },
  imageBackground: {
    flex: 1,
  },
  button: {
    backgroundColor: "#0000FF",
    borderRadius: 10,
    margin: 10,
    width: 72,
    height: 34,
    marginLeft: 5,
    alignItems: "center",
    padding: 5,
  },
  planetaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f18392",
  },
  planetaDetailButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  planetaActions: {
    flexDirection: "row",
    gap: 10,
  },
  planetaName: {
    fontSize: 16,
    color: "#f0f0f0",
    fontWeight: "bold",
  },

  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4C5444",
    minWidth: 70,
    alignItems: "center",
  },
});
export default styles;
