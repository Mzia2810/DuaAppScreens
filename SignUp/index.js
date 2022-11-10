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
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
import styles from "./styles";
const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View>
          <Image
            style={{ height: height, width: width }}
            source={require("../../../assets/bg.png")}
          />
        </View>
        <View style={styles.form}>
          {/* <ScrollView> */}
          <View>
            <Text style={styles.heading}>Sign Up</Text>
          </View>
          <View style={styles.view}>
            <View style={{ paddingTop: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingRight: 10 }}>
                  <AntDesign name="user" size={20} color="grey" />
                </View>
                <Text style={styles.text}>Full Name</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.input} />
            </View>
            <View style={{ paddingTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingRight: 10 }}>
                  <Fontisto name="email" size={15} color="grey" />
                </View>
                <Text style={styles.text}>Email</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.input} />
            </View>
            <View style={{ paddingTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingRight: 10 }}>
                  <AntDesign name="lock" size={20} color="grey" />
                </View>
                <Text style={styles.text}>Password</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.input} />
            </View>
            <View style={{ paddingTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingRight: 10 }}>
                  <AntDesign name="lock" size={20} color="grey" />
                </View>
                <Text style={styles.text}>Confirm Password</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.input} />
              {/* <Image
                    style={styles.eye}
                    source={require('../../assets/eye.png')}
                    /> */}
            </View>
            <View
              style={{
                width: wp("70%"),
                justifyContent: "center",
                alignSelf: "center",
                padding: hp("2%"),
                marginRight: 15,
              }}
            >
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontxt}>Sign Up</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  padding: hp("1%"),
                  width: wp("60%"),
                }}
              >
                <Text style={styles.login}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <Text style={styles.resend}>Login</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.option}>or sign up with </Text>
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
    </View>
  );
};
export default SignUp;
