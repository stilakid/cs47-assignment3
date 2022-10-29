import { StyleSheet, View, Text, Image } from "react-native";
import { Themes, Images } from "../../assets/Themes";

export default function Track({num, name, image, duration, artist, album}) {
    // console.log("name", num, name, image, duration, artist, album);
    console.log("artist", artist);
    return (
        <View style={styles.container}>
            
            <Text style={[styles.text1, styles.column, styles.num] }>{num}</Text>
            <Image
                style={styles.image}
                resizeMode = {'contain'}
                source={
                    {uri: image}
                }
            />
            <View style={[styles.column, styles.songInfo]}>
                <Text style={[styles.text2, styles.song]} numberOfLines={1}>{name}</Text>
                <Text style={[styles.text1, styles.artist]} numberOfLines={1}>{artist}</Text>
            </View>
            <Text style={[styles.text2, styles.column, styles.album]} numberOfLines={1}>{album}</Text>
            <Text style={[styles.text2, styles.column, styles.duration]}>{duration}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",

    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text1: {
    color: Themes.colors.gray
  },
  text2: {
    color: Themes.colors.white
  },
  image: {
    width: 65,
    height: 65,
    flex: 2
  },
  num: {
    flex: 1/2
    // width: 30
  },
  songInfo: {
    flex: 4,
    flexDirection: "column"
  },
  song: {
  },
  artist: {
  },
  album: {
    flex: 3
  },
  duration: {
    flex: 1
  },
  column: {
    padding: 3
  }
});