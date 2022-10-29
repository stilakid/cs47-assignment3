import { StyleSheet, View, Text, Image } from "react-native";
import { Themes, Images } from "../../assets/Themes";

export default function Header() {

  return (
    <View style={styles.container}>
        <Image
            style={styles.icon}
            resizeMode = {'contain'}
            source = {Images.spotify}
        />
        <Text style={styles.text}>
            My Top Tracks
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Themes.colors.background,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: 20
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 7
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  }
});