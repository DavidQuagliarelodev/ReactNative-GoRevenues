import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
export default function Catalog({ navigation }) {
  return (
    <View style={styles.containerMater}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.textBackBtn}>Back</Text>
      </TouchableOpacity>
      <View style={styles.containerCatalog}>
        <TouchableOpacity
          style={styles.containerCard}
          onPress={() => {
            navigation.navigate("Revenues01");
          }}
        >
          <Image
            style={styles.imageCard}
            source={require("../../../assets/images/salad.png")}
          ></Image>
          <Text style={styles.textCard}>Salad</Text>
          <Text style={styles.secondTextCard}>15min</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerCard}
          onPress={() => {
            navigation.navigate("Revenues02");
          }}
        >
          <Image
            style={styles.imageCard}
            source={require("../../../assets/images/meet.png")}
          ></Image>
          <Text style={styles.textCard}>Meet </Text>
          <Text style={styles.secondTextCard}>20min</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerCard}
          onPress={() => {
            navigation.navigate("Revenues03");
          }}
        >
          <Image
            style={styles.imageCard}
            source={require("../../../assets/images/hotdog.png")}
          ></Image>
          <Text style={styles.textCard}>Hot Dog</Text>
          <Text style={styles.secondTextCard}>25min</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerCard}
          onPress={() => {
            navigation.navigate("Revenues04");
          }}
        >
          <Image
            style={styles.imageCard}
            source={require("../../../assets/images/pizza.png")}
          ></Image>
          <Text style={styles.textCard}>Pizza</Text>
          <Text style={styles.secondTextCard}>40min</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
