import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
const map = () => {
  return (
    <View>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>hello</Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </View>
  );
};

export default map;

const styles = StyleSheet.create({});
