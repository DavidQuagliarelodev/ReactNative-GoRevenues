import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <View style={styles.containerMaster}>
      <View style={styles.containerHome}>
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/wasabi.png")}
        />
        <Text style={styles.textStyleone} font>
          Food For
        </Text>
        <Text style={styles.textStyletwo} font>
          Everyone
        </Text>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => navigation.navigate("Catalog")}
        >
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
