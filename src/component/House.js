import * as React from "react";
import { View , Text } from "react-native";

export default function House({apple, house, borderLeftWidth = 0, borderBottomWidth = 0, width, height, left, top, handlePressHouse = () => {} }) {
  return (
    <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0 , borderLeftWidth , borderBottomWidth , width, height, left, top, position: "absolute"}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={(e) => {handlePressHouse(apple, house, e)}}>{house}</Text>
      </View>
    </View>
  );
}
