import { StyleSheet, View, Text, Image, Pressable, FlatList } from "react-native";
import { Themes, Images } from "../../assets/Themes";
import Header from "./header";
import Track from "./track";
import {millisToMinutesAndSeconds} from "../../utils";

const concatenateArtists = (artists) => {
    let song_artist = "";
    const num_of_artists = artists.length;
    for (let i = 0; i < artists.length; i++) {
        if ((i + 1) === num_of_artists) {
            song_artist += artists[i].name;
        } else  if ((i + 1) === num_of_artists - 1) {
            song_artist += artists[i].name + " & "
        } else {
            song_artist += artists[i].name + ", ";
        }
    }
    console.log("song_artist", song_artist);
    return song_artist;
}

const renderTrackList = ({ item, index }) => (
    // <Text style={{color: "red"}}>{item.num}</Text>
    <Track
        num={index + 1}
        name={item.name}
        image={item.album.images[0].url}
        duration={millisToMinutesAndSeconds(item.duration_ms)}
        artist={concatenateArtists(item.artists)}
        album={item.album.name}
    />
);

export default function TrackList(props) {
    // console.log("item", props.data);
    return (
        <View style={styles.container}>
            <Header style={styles.header}></Header>
            <FlatList
                data={props.data}
                renderItem = {(item) => renderTrackList(item)}
                keyExtractor = {(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
  },
});