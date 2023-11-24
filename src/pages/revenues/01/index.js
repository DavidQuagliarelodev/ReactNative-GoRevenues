import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

export default function Revenues01({ navigation }) {
  return (
    <View style={styles.containerMater}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => {
          navigation.navigate("Catalog");
        }}
      >
        <Text style={styles.textBackBtn}>Back</Text>
      </TouchableOpacity>
      <View style={styles.containerRevenues}>
        <View style={styles.containerContent}>
          <Image
            style={styles.imageFood}
            source={require("../../../../assets/images/salad.png")}
          ></Image>
          <Text style={styles.textImageFood}>Salad</Text>
          <Text style={styles.decribe}>
            This isn't just any green salad. The foliage is complemented by
            tomatoes, pomegranate and star fruit, in addition to the mustard
            sauce with yogurt.
          </Text>
          <View style={styles.iconsFormater}>
            <TouchableOpacity style={styles.icons}>
              <Image
                source={require("../../../../assets/images/clock.png")}
              ></Image>
              <Text style={styles.textIcons}>15min</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icons}>
              <Image
                source={require("../../../../assets/images/dificult.png")}
              ></Image>
              <Text style={styles.textIcons}>Easy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.icons}>
              <Image
                source={require("../../../../assets/images/fire.png")}
              ></Image>
              <Text style={styles.textIcons}>5cal</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ingredients}>
            <View style={styles.ingreSteps}>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              <Text>* 1/2 bunch of lettuce</Text>
              <Text>* 1/2 bunch of lettuce</Text>
              <Text>* 1/2 bunch of lettuce</Text>
              <Text>* 1/2 bunch of lettuce</Text>
            </View>
            <View style={styles.ingreSteps}>
              <Text style={styles.ingredientsTitle}>Steps:</Text>
              <Text>* Step one: Lorem lorem</Text>
              <Text>* Step two: Lorem lorem</Text>
              <Text>* Step Three: Lorem lorem</Text>
              <Text>* 1/2 bunch of lettuce</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
