import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
import styles from "./styles";
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ height: height, width: width }}
        source={require("../../../assets/bg.png")}
      >
        <View>
          <View style={styles.form}>
            {/* <ScrollView> */}
            <View>
              <Text style={styles.heading}>Login</Text>
            </View>
            <View style={styles.view}>
              <View style={{ paddingTop: 20 }}></View>

              <View style={{ paddingTop: 10 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ paddingRight: 10 }}>
                    <Fontisto name="email" size={15} color="grey" />
                  </View>
                  <Text style={styles.text}>Email</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" ,  borderBottomColor:'#C4C4C4',marginTop:1.3}}>
                <TextInput style={styles.input} />
              </View>
              <View style={{ paddingTop: hp("3%") }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ paddingRight: 10 }}>
                    <AntDesign name="lock" size={20} color="grey" />
                  </View>
                  <Text style={styles.text}>Password</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row",marginTop:3 }}>
                <TextInput style={styles.input} />

              
              </View>


              <View style={{padding:15}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ForgetPassword")}
                  >
                    <Text style={styles.login}>forgot Password?</Text>
                  </TouchableOpacity>
                </View>

              <View
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: hp("1%"),
                }}
              >
                <View style={{ alignSelf: "center" }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontxt}>Login</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    padding: hp("2%"),
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Text style={styles.login}>Don't have an account? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("signup")}
                  >
                    <Text style={styles.resend}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.option}>or log in with </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <View style={{ paddingRight: 3 }}>
                  <TouchableOpacity style={styles.google}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ padding: wp("2%") }}>
                        <AntDesign name="google" size={20} color="white" />
                      </View>
                      <View
                        style={{
                          padding: wp("2%"),
                          width: wp("30%"),
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={styles.btnText}>Google</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 3 }}>
                  <TouchableOpacity style={styles.facebook}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ padding: wp("2%") }}>
                        <FontAwesome name="facebook" size={20} color="white" />
                      </View>
                      <View
                        style={{
                          padding: wp("2%"),
                          width: wp("30%"),
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={styles.btnText}>Facebook</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* </ScrollView> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
