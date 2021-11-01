import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_572_2916} />
      <View style={styles.View_572_2917}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae68/4ca2/12404fe7ead4482ea32c7d78ff00b49d"
          }}
          style={styles.ImageBackground_572_2918}
        />
        <View style={styles.View_572_2919}>
          <Text style={styles.Text_572_2919}>Order is open for feedback</Text>
        </View>
      </View>
      <View style={styles.View_572_2920}>
        <View style={styles.View_572_2921}>
          <Text style={styles.Text_572_2921}>Order</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_572_2922}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("572_1923"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd70/2c4b/6a4d77d8763e068588b7974868233589"
            }}
            style={styles.ImageBackground_572_2923}
          />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9b8/69b2/e9f6be65d2672872f9d0ad50c76ee6fe"
          }}
          style={styles.ImageBackground_572_2927}
        />
      </View>
      <View style={styles.View_572_2928}>
        <Text style={styles.Text_572_2928}>English language</Text>
      </View>
      <View style={styles.View_572_2929}>
        <View style={styles.View_I572_2929_572_2991} />
        <View style={styles.View_I572_2929_572_2992}>
          <View style={styles.View_I572_2929_572_2993}>
            <View style={styles.View_I572_2929_572_2994}>
              <Text style={styles.Text_I572_2929_572_2994}>£25 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_2929_572_2995}>
            <View style={styles.View_I572_2929_572_2996}>
              <Text style={styles.Text_I572_2929_572_2996}>
                124 hours taught
              </Text>
            </View>
          </View>
          <View style={styles.View_I572_2929_572_2997}>
            <View style={styles.View_I572_2929_572_2998}>
              <Text style={styles.Text_I572_2929_572_2998}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58a0/39dd/027d930555db36553eca4d4ee3e5f05f"
          }}
          style={styles.ImageBackground_I572_2929_572_2999}
        />
        <View style={styles.View_I572_2929_572_3002}>
          <Text style={styles.Text_I572_2929_572_3002}>Tyler Nyx</Text>
        </View>
        <View style={styles.View_I572_2929_572_3003}>
          <Text style={styles.Text_I572_2929_572_3003}>
            My teaching style and lessons tend to be focused around exam...
          </Text>
        </View>
        <View style={styles.View_I572_2929_572_3004}>
          <View style={styles.View_I572_2929_572_3005}>
            <Text style={styles.Text_I572_2929_572_3005}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_572_2930}>
        <View style={styles.View_I572_2930_572_2991} />
        <View style={styles.View_I572_2930_572_2992}>
          <View style={styles.View_I572_2930_572_2993}>
            <View style={styles.View_I572_2930_572_2994}>
              <Text style={styles.Text_I572_2930_572_2994}>£14 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_2930_572_2995}>
            <View style={styles.View_I572_2930_572_2996}>
              <Text style={styles.Text_I572_2930_572_2996}>
                56 hours taught
              </Text>
            </View>
          </View>
          <View style={styles.View_I572_2930_572_2997}>
            <View style={styles.View_I572_2930_572_2998}>
              <Text style={styles.Text_I572_2930_572_2998}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a15/b098/62558704052fc3103a0f11ba5ab0acfa"
          }}
          style={styles.ImageBackground_I572_2930_572_2999}
        />
        <View style={styles.View_I572_2930_572_3002}>
          <Text style={styles.Text_I572_2930_572_3002}>Edward Howell</Text>
        </View>
        <View style={styles.View_I572_2930_572_3003}>
          <Text style={styles.Text_I572_2930_572_3003}>
            My teaching style and lessons tend to be focused around exam...
          </Text>
        </View>
        <View style={styles.View_I572_2930_572_3004}>
          <View style={styles.View_I572_2930_572_3005}>
            <Text style={styles.Text_I572_2930_572_3005}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_572_2931}>
        <View style={styles.View_I572_2931_572_2991} />
        <View style={styles.View_I572_2931_572_2992}>
          <View style={styles.View_I572_2931_572_2993}>
            <View style={styles.View_I572_2931_572_2994}>
              <Text style={styles.Text_I572_2931_572_2994}>£12 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_2931_572_2995}>
            <View style={styles.View_I572_2931_572_2996}>
              <Text style={styles.Text_I572_2931_572_2996}>
                37 hours taught
              </Text>
            </View>
          </View>
          <View style={styles.View_I572_2931_572_2997}>
            <View style={styles.View_I572_2931_572_2998}>
              <Text style={styles.Text_I572_2931_572_2998}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f83/cdda/4d7b43209e1ac8c4fe0f34dc7f101375"
          }}
          style={styles.ImageBackground_I572_2931_572_2999}
        />
        <View style={styles.View_I572_2931_572_3002}>
          <Text style={styles.Text_I572_2931_572_3002}>Mathilde Langevin</Text>
        </View>
        <View style={styles.View_I572_2931_572_3003}>
          <Text style={styles.Text_I572_2931_572_3003}>
            My teaching style and lessons tend to be focused around exam...
          </Text>
        </View>
      </View>
      <View style={styles.View_572_2932}>
        <View style={styles.View_I572_2932_572_2991} />
        <View style={styles.View_I572_2932_572_2992}>
          <View style={styles.View_I572_2932_572_2993}>
            <View style={styles.View_I572_2932_572_2994}>
              <Text style={styles.Text_I572_2932_572_2994}>£15 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_2932_572_2995}>
            <View style={styles.View_I572_2932_572_2996}>
              <Text style={styles.Text_I572_2932_572_2996}>
                56 hours taught
              </Text>
            </View>
          </View>
          <View style={styles.View_I572_2932_572_2997}>
            <View style={styles.View_I572_2932_572_2998}>
              <Text style={styles.Text_I572_2932_572_2998}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d70/6e3c/75bf5cfeefa60490ff93abcdfb869f83"
          }}
          style={styles.ImageBackground_I572_2932_572_2999}
        />
        <View style={styles.View_I572_2932_572_3002}>
          <Text style={styles.Text_I572_2932_572_3002}>Brooke Cagle</Text>
        </View>
        <View style={styles.View_I572_2932_572_3003}>
          <Text style={styles.Text_I572_2932_572_3003}>
            My teaching style and lessons tend to be focused around exam...
          </Text>
        </View>
      </View>
      <View style={styles.View_572_2933}>
        <View style={styles.View_I572_2933_572_2991} />
        <View style={styles.View_I572_2933_572_2992}>
          <View style={styles.View_I572_2933_572_2993}>
            <View style={styles.View_I572_2933_572_2994}>
              <Text style={styles.Text_I572_2933_572_2994}>£30 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_2933_572_2995}>
            <View style={styles.View_I572_2933_572_2996}>
              <Text style={styles.Text_I572_2933_572_2996}>
                196 hours taught
              </Text>
            </View>
          </View>
          <View style={styles.View_I572_2933_572_2997}>
            <View style={styles.View_I572_2933_572_2998}>
              <Text style={styles.Text_I572_2933_572_2998}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1eb0/04b9/4c90ea0ba5ffce8c6fcdfe044dd822d4"
          }}
          style={styles.ImageBackground_I572_2933_572_2999}
        />
        <View style={styles.View_I572_2933_572_3002}>
          <Text style={styles.Text_I572_2933_572_3002}>Tabitha Turner</Text>
        </View>
        <View style={styles.View_I572_2933_572_3003}>
          <Text style={styles.Text_I572_2933_572_3003}>
            My teaching style and lessons tend to be focused around exam...
          </Text>
        </View>
        <View style={styles.View_I572_2933_572_3004}>
          <View style={styles.View_I572_2933_572_3005}>
            <Text style={styles.Text_I572_2933_572_3005}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_572_2934}>
        <View style={styles.View_I572_2934_572_2991} />
        <View style={styles.View_I572_2934_572_2992}>
          <View style={styles.View_I572_2934_572_2993}>
            <View style={styles.View_I572_2934_572_2994}>
              <Text style={styles.Text_I572_2934_572_2994}>£25 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_2934_572_2995}>
            <View style={styles.View_I572_2934_572_2996}>
              <Text style={styles.Text_I572_2934_572_2996}>
                124 hours taught
              </Text>
            </View>
          </View>
          <View style={styles.View_I572_2934_572_2997}>
            <View style={styles.View_I572_2934_572_2998}>
              <Text style={styles.Text_I572_2934_572_2998}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8d5/8286/f702509483fdcc4dfb0cebffaaba5f8e"
          }}
          style={styles.ImageBackground_I572_2934_572_2999}
        />
        <View style={styles.View_I572_2934_572_3002}>
          <Text style={styles.Text_I572_2934_572_3002}>Chermiti Mohamed</Text>
        </View>
        <View style={styles.View_I572_2934_572_3003}>
          <Text style={styles.Text_I572_2934_572_3003}>
            My teaching style and lessons tend to be focused around exam...
          </Text>
        </View>
      </View>
      <View style={styles.View_572_2935}>
        <Text style={styles.Text_572_2935}>
          You have 17 feedbacks from tutors
        </Text>
      </View>
      <View style={styles.View_572_2936}>
        <View style={styles.View_572_2937} />
        <View style={styles.View_572_2938}>
          <View style={styles.View_572_2939} />
          <View style={styles.View_572_2940}>
            <View style={styles.View_572_2941}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d63d/25a9/33d2b268154a16af8f39bad70e241e81"
                }}
                style={styles.ImageBackground_572_2942}
              />
              <View source={{ uri: "null" }} style={styles.View_572_2945} />
            </View>
          </View>
        </View>
        <View style={styles.View_572_2946}>
          <Text style={styles.Text_572_2946}>Explore tutors by yourself</Text>
        </View>
      </View>
      <View style={styles.View_572_2947}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55b1/0c58/ab6e21d8df386ab42a460265a936e4ab"
          }}
          style={styles.ImageBackground_572_2948}
        />
        <View style={styles.View_572_2949} />
        <View style={styles.View_572_2950}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a1c/0c8b/87d0812fc5b6515b53b6e609c8be2051"
            }}
            style={styles.ImageBackground_572_2951}
          />
          <View style={styles.View_572_2953}>
            <Text style={styles.Text_572_2953}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_572_2954}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60a8/bcd5/be62a0e2ae2e66bb3e4d1e8a4bf54376"
            }}
            style={styles.ImageBackground_572_2955}
          />
          <View style={styles.View_572_2957}>
            <Text style={styles.Text_572_2957}>Favourites</Text>
          </View>
        </View>
        <View style={styles.View_572_2958}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/159c/c6f7/dbf2f92d6dfb37ea1a086d06c35567fa"
            }}
            style={styles.ImageBackground_572_2959}
          />
          <View style={styles.View_572_2965}>
            <Text style={styles.Text_572_2965}>Orders</Text>
          </View>
        </View>
        <View style={styles.View_572_2966}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d8e/d6c7/47647d131845a62b31138ca3075184ce"
            }}
            style={styles.ImageBackground_572_2967}
          />
          <View style={styles.View_572_2970}>
            <Text style={styles.Text_572_2970}>Messages</Text>
          </View>
        </View>
        <View style={styles.View_572_2971}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fab5/d01f/4f907f0be000b32f2b0ffad9afb9c7ec"
            }}
            style={styles.ImageBackground_572_2972}
          />
          <View style={styles.View_572_2975}>
            <Text style={styles.Text_572_2975}>Account</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("177%") },
  View_572_2916: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_2917: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2918: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_572_2919: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_572_2919: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2920: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_2921: {
    width: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_572_2921: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_572_2922: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2923: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_572_2927: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_572_2928: {
    width: wp("53%"),
    minWidth: wp("53%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_572_2928: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2929: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2929_572_2991: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_2929_572_2992: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2929_572_2993: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2929_572_2994: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2929_572_2994: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2929_572_2995: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2929_572_2996: {
    flexGrow: 1,
    width: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2929_572_2996: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2929_572_2997: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2929_572_2998: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2929_572_2998: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_2929_572_2999: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I572_2929_572_3002: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I572_2929_572_3002: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2929_572_3003: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I572_2929_572_3003: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2929_572_3004: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("7%"),
    backgroundColor: "rgba(235, 45, 124, 1)"
  },
  View_I572_2929_572_3005: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I572_2929_572_3005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2930: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2930_572_2991: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_2930_572_2992: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2930_572_2993: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2930_572_2994: {
    flexGrow: 1,
    width: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2930_572_2994: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2930_572_2995: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2930_572_2996: {
    flexGrow: 1,
    width: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2930_572_2996: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2930_572_2997: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2930_572_2998: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2930_572_2998: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_2930_572_2999: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I572_2930_572_3002: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I572_2930_572_3002: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2930_572_3003: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I572_2930_572_3003: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2930_572_3004: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("7%"),
    backgroundColor: "rgba(235, 45, 124, 1)"
  },
  View_I572_2930_572_3005: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I572_2930_572_3005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2931: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2931_572_2991: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_2931_572_2992: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2931_572_2993: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2931_572_2994: {
    flexGrow: 1,
    width: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2931_572_2994: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2931_572_2995: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2931_572_2996: {
    flexGrow: 1,
    width: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2931_572_2996: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2931_572_2997: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2931_572_2998: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2931_572_2998: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_2931_572_2999: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I572_2931_572_3002: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I572_2931_572_3002: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2931_572_3003: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I572_2931_572_3003: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2932: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2932_572_2991: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_2932_572_2992: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2932_572_2993: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2932_572_2994: {
    flexGrow: 1,
    width: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2932_572_2994: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2932_572_2995: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2932_572_2996: {
    flexGrow: 1,
    width: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2932_572_2996: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2932_572_2997: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2932_572_2998: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2932_572_2998: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_2932_572_2999: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I572_2932_572_3002: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I572_2932_572_3002: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2932_572_3003: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I572_2932_572_3003: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2933: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2933_572_2991: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_2933_572_2992: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2933_572_2993: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2933_572_2994: {
    flexGrow: 1,
    width: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2933_572_2994: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2933_572_2995: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2933_572_2996: {
    flexGrow: 1,
    width: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2933_572_2996: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2933_572_2997: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2933_572_2998: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2933_572_2998: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_2933_572_2999: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I572_2933_572_3002: {
    flexGrow: 1,
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I572_2933_572_3002: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2933_572_3003: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I572_2933_572_3003: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2933_572_3004: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("7%"),
    backgroundColor: "rgba(235, 45, 124, 1)"
  },
  View_I572_2933_572_3005: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I572_2933_572_3005: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2934: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2934_572_2991: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_2934_572_2992: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2934_572_2993: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2934_572_2994: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2934_572_2994: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2934_572_2995: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2934_572_2996: {
    flexGrow: 1,
    width: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2934_572_2996: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2934_572_2997: {
    width: wp("20%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_2934_572_2998: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_2934_572_2998: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_2934_572_2999: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I572_2934_572_3002: {
    flexGrow: 1,
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I572_2934_572_3002: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_2934_572_3003: {
    flexGrow: 1,
    width: wp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I572_2934_572_3003: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2935: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_572_2935: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2936: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("154%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_2937: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_2938: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_2939: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_572_2940: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_2941: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_572_2942: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_2945: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_572_2946: {
    flexGrow: 1,
    width: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_572_2946: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2947: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2948: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_572_2949: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_2950: {
    width: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2951: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_2953: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_2953: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2954: {
    width: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2955: {
    width: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_572_2957: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_2957: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2958: {
    width: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2959: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_572_2965: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_2965: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2966: {
    width: wp("13%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2967: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_2970: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_2970: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_2971: {
    width: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_2972: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_2975: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_2975: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
