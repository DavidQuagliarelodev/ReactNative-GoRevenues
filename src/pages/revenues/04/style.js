import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerMater: {
    backgroundColor: "#487d76",
    paddingTop: 20,
  },
  containerRevenues: {
    backgroundColor: "#e4e4e4",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    height: "100%",
    padding: 5,
    alignItems: "center",
  },
  containerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  backbtn: {
    padding: 10,
    backgroundColor: "#edefdb",
    borderRadius: 100,
    marginBottom: 30,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  textBackBtn: {
    fontSize: 20,
    color: "#487d76",
    fontWeight: "bold",
  },
  imageFood: {
    justifyContent: "center",
    alignItems: "center",
  },
  textImageFood: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  decribe: {
    textAlign: "center",
    margin: 10,
  },
  iconsFormater: {
    flexDirection: "row",
  },
  icons: {
    margin: 10,
    backgroundColor: "#edefdb",
    padding: 15,
    borderRadius: 15,
  },
  textIcons: {
    textAlign: "center",
    marginTop: 10,
    color: "#ff4746",
  },
  ingredients: {
    flexDirection: "row",
  },
  ingredientsTitle: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#edefdb",
    color: "#487d76",
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
  },
  ingreSteps: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default styles;
