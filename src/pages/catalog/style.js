import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  containerMater: {
    backgroundColor: "#487d76",
    paddingTop: 20,
  },
  containerCatalog: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#e4e4e4",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    height: "100%",
    padding: 5,
    justifyContent: "center",
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
  containerCard: {
    backgroundColor: "#edefdb",
    width: "45%",
    height: "30%",
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
    marginTop: 30,
  },
  imageCard: {
    marginBottom: 10,
  },
  textCard: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondTextCard: {
    color: "#ff4746",
  },
});

export default styles;
