import * as React from "react";
import { View , Text } from "react-native";
import House from "./../component/House"

export default function SettingsScreen() {
  const handlePressHouse = (apple, house, e) => {
    // alert(apple)
    alert(house)
    // console.log(e)
  }
  const borderBottomWidth = 1;
  const borderLeftWidth = 1;

  const j37Height = 10.01;
  const j37 = ["20", "19", "18", "17", "16", "15", "14", "13", "12", "11"];
  const j38Height = 20.01;
  const j38 = ["11", "10", "09", "08", "07"];

  const j40Width = 6.74;

  const j36And35Height = 7.15;
  const j36And35And40A = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
  const j36And35B = ["28", "27", "26", "25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15"];
  
  const j39Width = 7.74;
  const j39A = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13"];
  const j39B = ["25", "24", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14"];
  
  const j34Height = 4.55;
  const j34 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"];


  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View  style={{ flex: 1 , padding: 10 }}>
      <View style={{ flex: 0.1 , padding: 10 }}>
        <Text style={{borderColor: "#ccc" , borderWidth: 1 }}>Settings Screen</Text>
      </View>
      
      <View style={{ flex: 0.9 , padding: 10, backgroundColor:"#ccc" }}>
        {/* SECCION DE LAS AREAS VERDES */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "62%", height: "10%", left: "21%", position: "absolute" }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Area Verde</Text>
          </View>
        </View>
       
        {/* SECCION DE LAS J37 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "20%", height: "55%", left: "0%" , top: "0%", position: "absolute"}}>
          {
            j37.map( (house , index) => (
              <House handlePressHouse={handlePressHouse} apple="j37" house={house} borderBottomWidth={borderBottomWidth} width="100%" height={`${j37Height}%`} left="0%" top={`${j37Height*index}%`}/>
            ) )
          }
        </View>

        {/* SECCION DE LAS J38 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "20%", height: "19%", left: "0%" , top: "56%", position: "absolute"}}>
          {
            j38.map( (house , index) => (
              <House handlePressHouse={handlePressHouse} apple="j38" house={house} borderBottomWidth={borderBottomWidth}  width="100%" height={`${j38Height}%`} left="0%" top={`${j38Height*index}%`}/>
            ) )
          }
        </View>

        {/* SECCION DE LAS J36 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "30%", height: "64%", left: "21%" , top: "11%", position: "absolute"}}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0 , width: "50%", height: "100%"}}>
              {
                j36And35And40A.map( (house , index) => (
                  <House handlePressHouse={handlePressHouse} apple="j36" house={house} borderBottomWidth={borderBottomWidth} width="100%" height={`${j36And35Height}%`} left="0%" top={`${j36And35Height*index}%`}/>
                ) )
              }
            </View>
            <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0, borderLeftWidth, width: "50%", height: "100%"}}>
              {
                j36And35B.map( (house , index) => (
                  <House handlePressHouse={handlePressHouse} apple="j36" house={house} borderBottomWidth={borderBottomWidth} width="100%" height={`${j36And35Height}%`} left="0%" top={`${j36And35Height*index}%`}/>
                ) )
              }
            </View>
          </View>
        </View>
        
        {/* SECCION DE LAS J35 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "30%", height: "64%", left: "53%" , top: "11%", position: "absolute"}}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0 , width: "50%", height: "100%"}}>
              {
                j36And35And40A.map( (house , index) => (
                  <House handlePressHouse={handlePressHouse} apple="j35" house={house} borderBottomWidth={borderBottomWidth} width="100%" height={`${j36And35Height}%`} left="0%" top={`${j36And35Height*index}%`}/>
                ) )
              }
            </View>
            <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0, borderLeftWidth: 1, width: "50%", height: "100%"}}>
              {
                j36And35B.map( (house , index) => (
                  <House handlePressHouse={handlePressHouse} apple="j35" house={house} borderBottomWidth={borderBottomWidth} width="100%" height={`${j36And35Height}%`} left="0%" top={`${j36And35Height*index}%`}/>
                ) )
              }
            </View>
          </View>
        </View>

        {/* SECCION DE LAS J34 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "20%", height: "92%", left: "84%" , top: "0%", position: "absolute"}}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {
              j34.map( (house , index) => (
                <House handlePressHouse={handlePressHouse} apple="j34" house={house} borderBottomWidth={borderBottomWidth} width="100%" height={`${j34Height}%`} left="0%" top={`${j34Height*index}%`}/>
              ) )
            }
          </View>
        </View>

        {/* SECCION DE LAS J39 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "83%", height: "16%", left: "0%" , top: "76%", position: "absolute"}}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0, borderBottomWidth: 1 , flex: 1, flexDirection: 'row'}}>
              {
                j39A.map( (house , index) => (
                  <View style={{ width:`${j39Width}%` }}>
                    <House handlePressHouse={handlePressHouse} apple="j39" house={house} width="100%" borderLeftWidth={borderLeftWidth} height="100%" left={`${j39Width*index-0.01}%`} top="0%"/>
                  </View>
                ) )
              }
            </View>
            <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 0, flex: 1, flexDirection: 'row'}}>
              {
                j39B.map( (house , index) => (
                  <View style={{ width:`${j39Width}%` }}>
                    <House handlePressHouse={handlePressHouse} apple="j39" house={house} width="100%" borderLeftWidth={borderLeftWidth} height="100%" left={`${j39Width*index-0.01}%`} top="0%"/>
                  </View>
                ) )
              }
            </View>
          </View>
        </View>

        {/* SECCION DE LAS J40 */}
        <View style={{ borderColor: "rgb(0, 0, 0)" , borderWidth: 1 , width: "83%", height: "10%", left: "0%" , top: "92.6%", position: "absolute"}}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {
              j36And35And40A.map( (house , index) => (
                <View style={{ width:`${j40Width}%` }}>
                  <House handlePressHouse={handlePressHouse} apple="j40" house={house} width="100%" borderLeftWidth={borderLeftWidth} height="100%" left={`${j40Width*index-0.01}%`} top="0%"/>
                </View>
              ) )
            }
          </View>
        </View>
      </View>
    </View>
  );
}
