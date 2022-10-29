import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import ConnectWithSpotify from "./app/components/connectWithSpotify";
import TrackList from "./app/components/trackList";


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  const data = [
    {num: 1},
    {num: 2},
    {num: 3}
  ]
  // console.log("tracks", tracks);
  if (token) {
    return(
      <SafeAreaView style={styles.container}>
        <TrackList data={tracks}></TrackList>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
          <ConnectWithSpotify myFunc={getSpotifyAuth}></ConnectWithSpotify>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
