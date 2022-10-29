import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Themes, Images } from "../../assets/Themes";

export default function ConnectWithSpotify(props) {

  return (
    <View style={styles.container}>
      <Pressable style={styles.connecting} onPress={props.myFunc}>
        <Image
          style={styles.icon}
          resizeMode = {'contain'}
          source = {Images.spotify}
        />
        <Text>
          CONNECT WITH SPOTIFY
        </Text>
      </Pressable> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  connecting: {
    backgroundColor: Themes.colors.spotify,
    padding: 10,
    borderRadius: 99999,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  text: {
    color: Themes.colors.white,
    fontWeight: 'bold'
  }
});
