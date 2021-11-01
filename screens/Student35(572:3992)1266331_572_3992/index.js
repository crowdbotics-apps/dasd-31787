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
      <View style={styles.View_572_3993}>
        <Text style={styles.Text_572_3993}>712 results</Text>
      </View>
      <View style={styles.View_572_3994}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef5/8eaf/369172743e8d1ffe535707aa24a82bca"
          }}
          style={styles.ImageBackground_I572_3994_572_1796}
        />
        <View style={styles.View_I572_3994_572_1797}>
          <View style={styles.View_I572_3994_572_1798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/308a/2425/f0a4d52fe38c6f04a424837cce4de586"
              }}
              style={styles.ImageBackground_I572_3994_572_1799}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I572_3994_572_1802}
            />
          </View>
          <View style={styles.View_I572_3994_572_1803}>
            <Text style={styles.Text_I572_3994_572_1803}>Victoria Bremner</Text>
          </View>
        </View>
        <View style={styles.View_I572_3994_572_1804}>
          <View style={styles.View_I572_3994_572_1805}>
            <View style={styles.View_I572_3994_572_1806}>
              <Text style={styles.Text_I572_3994_572_1806}>english</Text>
            </View>
          </View>
          <View style={styles.View_I572_3994_572_1807}>
            <View style={styles.View_I572_3994_572_1808}>
              <Text style={styles.Text_I572_3994_572_1808}>online</Text>
            </View>
          </View>
          <View style={styles.View_I572_3994_572_1809}>
            <View style={styles.View_I572_3994_572_1810}>
              <Text style={styles.Text_I572_3994_572_1810}>primary</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3994_572_1811}>
          <Text style={styles.Text_I572_3994_572_1811}>
            Hi! I’m a 23 year old MA Graduate from UCL who is looking forward to
            tutoring you in German or History at all levels! I have been in
            academia for a number of years...
          </Text>
        </View>
        <View style={styles.View_I572_3994_572_1812}>
          <View style={styles.View_I572_3994_572_1813}>
            <View style={styles.View_I572_3994_572_1814}>
              <Text style={styles.Text_I572_3994_572_1814}>£15 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_3994_572_1815}>
            <View style={styles.View_I572_3994_572_1816}>
              <Text style={styles.Text_I572_3994_572_1816}>5 hours taught</Text>
            </View>
          </View>
          <View style={styles.View_I572_3994_572_1817}>
            <View style={styles.View_I572_3994_572_1818}>
              <Text style={styles.Text_I572_3994_572_1818}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3994_572_1819}>
          <View style={styles.View_I572_3994_572_1820}>
            <View style={styles.View_I572_3994_572_1821}>
              <Text style={styles.Text_I572_3994_572_1821}>Send message</Text>
            </View>
            <View style={styles.View_I572_3994_572_1822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f776/d4f2/1fbb565fd38d5d84881d4f62678844bc"
                }}
                style={styles.ImageBackground_I572_3994_572_1823}
              />
              <View
                source={{ uri: "null" }}
                style={styles.View_I572_3994_572_1826}
              />
            </View>
          </View>
          <View style={styles.View_I572_3994_572_1827}>
            <View style={styles.View_I572_3994_572_1828}>
              <Text style={styles.Text_I572_3994_572_1828}>Go to profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdc/c680/7f70d671fc26f094720dc22099f17769"
              }}
              style={styles.ImageBackground_I572_3994_572_1829}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_572_3995}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef5/8eaf/369172743e8d1ffe535707aa24a82bca"
          }}
          style={styles.ImageBackground_I572_3995_572_1796}
        />
        <View style={styles.View_I572_3995_572_1797}>
          <View style={styles.View_I572_3995_572_1798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/308a/2425/f0a4d52fe38c6f04a424837cce4de586"
              }}
              style={styles.ImageBackground_I572_3995_572_1799}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I572_3995_572_1802}
            />
          </View>
          <View style={styles.View_I572_3995_572_1803}>
            <Text style={styles.Text_I572_3995_572_1803}>Victoria Bremner</Text>
          </View>
        </View>
        <View style={styles.View_I572_3995_572_1804}>
          <View style={styles.View_I572_3995_572_1805}>
            <View style={styles.View_I572_3995_572_1806}>
              <Text style={styles.Text_I572_3995_572_1806}>english</Text>
            </View>
          </View>
          <View style={styles.View_I572_3995_572_1807}>
            <View style={styles.View_I572_3995_572_1808}>
              <Text style={styles.Text_I572_3995_572_1808}>online</Text>
            </View>
          </View>
          <View style={styles.View_I572_3995_572_1809}>
            <View style={styles.View_I572_3995_572_1810}>
              <Text style={styles.Text_I572_3995_572_1810}>primary</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3995_572_1811}>
          <Text style={styles.Text_I572_3995_572_1811}>
            Hi! I’m a 23 year old MA Graduate from UCL who is looking forward to
            tutoring you in German or History at all levels! I have been in
            academia for a number of years...
          </Text>
        </View>
        <View style={styles.View_I572_3995_572_1812}>
          <View style={styles.View_I572_3995_572_1813}>
            <View style={styles.View_I572_3995_572_1814}>
              <Text style={styles.Text_I572_3995_572_1814}>£15 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_3995_572_1815}>
            <View style={styles.View_I572_3995_572_1816}>
              <Text style={styles.Text_I572_3995_572_1816}>5 hours taught</Text>
            </View>
          </View>
          <View style={styles.View_I572_3995_572_1817}>
            <View style={styles.View_I572_3995_572_1818}>
              <Text style={styles.Text_I572_3995_572_1818}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3995_572_1819}>
          <View style={styles.View_I572_3995_572_1820}>
            <View style={styles.View_I572_3995_572_1821}>
              <Text style={styles.Text_I572_3995_572_1821}>Send message</Text>
            </View>
            <View style={styles.View_I572_3995_572_1822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f776/d4f2/1fbb565fd38d5d84881d4f62678844bc"
                }}
                style={styles.ImageBackground_I572_3995_572_1823}
              />
              <View
                source={{ uri: "null" }}
                style={styles.View_I572_3995_572_1826}
              />
            </View>
          </View>
          <View style={styles.View_I572_3995_572_1827}>
            <View style={styles.View_I572_3995_572_1828}>
              <Text style={styles.Text_I572_3995_572_1828}>Go to profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdc/c680/7f70d671fc26f094720dc22099f17769"
              }}
              style={styles.ImageBackground_I572_3995_572_1829}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_572_3996}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef5/8eaf/369172743e8d1ffe535707aa24a82bca"
          }}
          style={styles.ImageBackground_I572_3996_572_1796}
        />
        <View style={styles.View_I572_3996_572_1797}>
          <View style={styles.View_I572_3996_572_1798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/308a/2425/f0a4d52fe38c6f04a424837cce4de586"
              }}
              style={styles.ImageBackground_I572_3996_572_1799}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I572_3996_572_1802}
            />
          </View>
          <View style={styles.View_I572_3996_572_1803}>
            <Text style={styles.Text_I572_3996_572_1803}>Victoria Bremner</Text>
          </View>
        </View>
        <View style={styles.View_I572_3996_572_1804}>
          <View style={styles.View_I572_3996_572_1805}>
            <View style={styles.View_I572_3996_572_1806}>
              <Text style={styles.Text_I572_3996_572_1806}>english</Text>
            </View>
          </View>
          <View style={styles.View_I572_3996_572_1807}>
            <View style={styles.View_I572_3996_572_1808}>
              <Text style={styles.Text_I572_3996_572_1808}>online</Text>
            </View>
          </View>
          <View style={styles.View_I572_3996_572_1809}>
            <View style={styles.View_I572_3996_572_1810}>
              <Text style={styles.Text_I572_3996_572_1810}>primary</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3996_572_1811}>
          <Text style={styles.Text_I572_3996_572_1811}>
            Hi! I’m a 23 year old MA Graduate from UCL who is looking forward to
            tutoring you in German or History at all levels! I have been in
            academia for a number of years...
          </Text>
        </View>
        <View style={styles.View_I572_3996_572_1812}>
          <View style={styles.View_I572_3996_572_1813}>
            <View style={styles.View_I572_3996_572_1814}>
              <Text style={styles.Text_I572_3996_572_1814}>£15 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_3996_572_1815}>
            <View style={styles.View_I572_3996_572_1816}>
              <Text style={styles.Text_I572_3996_572_1816}>5 hours taught</Text>
            </View>
          </View>
          <View style={styles.View_I572_3996_572_1817}>
            <View style={styles.View_I572_3996_572_1818}>
              <Text style={styles.Text_I572_3996_572_1818}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3996_572_1819}>
          <View style={styles.View_I572_3996_572_1820}>
            <View style={styles.View_I572_3996_572_1821}>
              <Text style={styles.Text_I572_3996_572_1821}>Send message</Text>
            </View>
            <View style={styles.View_I572_3996_572_1822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f776/d4f2/1fbb565fd38d5d84881d4f62678844bc"
                }}
                style={styles.ImageBackground_I572_3996_572_1823}
              />
              <View
                source={{ uri: "null" }}
                style={styles.View_I572_3996_572_1826}
              />
            </View>
          </View>
          <View style={styles.View_I572_3996_572_1827}>
            <View style={styles.View_I572_3996_572_1828}>
              <Text style={styles.Text_I572_3996_572_1828}>Go to profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdc/c680/7f70d671fc26f094720dc22099f17769"
              }}
              style={styles.ImageBackground_I572_3996_572_1829}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_572_3997}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef5/8eaf/369172743e8d1ffe535707aa24a82bca"
          }}
          style={styles.ImageBackground_I572_3997_572_1796}
        />
        <View style={styles.View_I572_3997_572_1797}>
          <View style={styles.View_I572_3997_572_1798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/308a/2425/f0a4d52fe38c6f04a424837cce4de586"
              }}
              style={styles.ImageBackground_I572_3997_572_1799}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I572_3997_572_1802}
            />
          </View>
          <View style={styles.View_I572_3997_572_1803}>
            <Text style={styles.Text_I572_3997_572_1803}>Victoria Bremner</Text>
          </View>
        </View>
        <View style={styles.View_I572_3997_572_1804}>
          <View style={styles.View_I572_3997_572_1805}>
            <View style={styles.View_I572_3997_572_1806}>
              <Text style={styles.Text_I572_3997_572_1806}>english</Text>
            </View>
          </View>
          <View style={styles.View_I572_3997_572_1807}>
            <View style={styles.View_I572_3997_572_1808}>
              <Text style={styles.Text_I572_3997_572_1808}>online</Text>
            </View>
          </View>
          <View style={styles.View_I572_3997_572_1809}>
            <View style={styles.View_I572_3997_572_1810}>
              <Text style={styles.Text_I572_3997_572_1810}>primary</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3997_572_1811}>
          <Text style={styles.Text_I572_3997_572_1811}>
            Hi! I’m a 23 year old MA Graduate from UCL who is looking forward to
            tutoring you in German or History at all levels! I have been in
            academia for a number of years...
          </Text>
        </View>
        <View style={styles.View_I572_3997_572_1812}>
          <View style={styles.View_I572_3997_572_1813}>
            <View style={styles.View_I572_3997_572_1814}>
              <Text style={styles.Text_I572_3997_572_1814}>£15 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_3997_572_1815}>
            <View style={styles.View_I572_3997_572_1816}>
              <Text style={styles.Text_I572_3997_572_1816}>5 hours taught</Text>
            </View>
          </View>
          <View style={styles.View_I572_3997_572_1817}>
            <View style={styles.View_I572_3997_572_1818}>
              <Text style={styles.Text_I572_3997_572_1818}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3997_572_1819}>
          <View style={styles.View_I572_3997_572_1820}>
            <View style={styles.View_I572_3997_572_1821}>
              <Text style={styles.Text_I572_3997_572_1821}>Send message</Text>
            </View>
            <View style={styles.View_I572_3997_572_1822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f776/d4f2/1fbb565fd38d5d84881d4f62678844bc"
                }}
                style={styles.ImageBackground_I572_3997_572_1823}
              />
              <View
                source={{ uri: "null" }}
                style={styles.View_I572_3997_572_1826}
              />
            </View>
          </View>
          <View style={styles.View_I572_3997_572_1827}>
            <View style={styles.View_I572_3997_572_1828}>
              <Text style={styles.Text_I572_3997_572_1828}>Go to profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdc/c680/7f70d671fc26f094720dc22099f17769"
              }}
              style={styles.ImageBackground_I572_3997_572_1829}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_572_3998}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ef5/8eaf/369172743e8d1ffe535707aa24a82bca"
          }}
          style={styles.ImageBackground_I572_3998_572_1796}
        />
        <View style={styles.View_I572_3998_572_1797}>
          <View style={styles.View_I572_3998_572_1798}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/308a/2425/f0a4d52fe38c6f04a424837cce4de586"
              }}
              style={styles.ImageBackground_I572_3998_572_1799}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I572_3998_572_1802}
            />
          </View>
          <View style={styles.View_I572_3998_572_1803}>
            <Text style={styles.Text_I572_3998_572_1803}>Victoria Bremner</Text>
          </View>
        </View>
        <View style={styles.View_I572_3998_572_1804}>
          <View style={styles.View_I572_3998_572_1805}>
            <View style={styles.View_I572_3998_572_1806}>
              <Text style={styles.Text_I572_3998_572_1806}>english</Text>
            </View>
          </View>
          <View style={styles.View_I572_3998_572_1807}>
            <View style={styles.View_I572_3998_572_1808}>
              <Text style={styles.Text_I572_3998_572_1808}>online</Text>
            </View>
          </View>
          <View style={styles.View_I572_3998_572_1809}>
            <View style={styles.View_I572_3998_572_1810}>
              <Text style={styles.Text_I572_3998_572_1810}>primary</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3998_572_1811}>
          <Text style={styles.Text_I572_3998_572_1811}>
            Hi! I’m a 23 year old MA Graduate from UCL who is looking forward to
            tutoring you in German or History at all levels! I have been in
            academia for a number of years...
          </Text>
        </View>
        <View style={styles.View_I572_3998_572_1812}>
          <View style={styles.View_I572_3998_572_1813}>
            <View style={styles.View_I572_3998_572_1814}>
              <Text style={styles.Text_I572_3998_572_1814}>£15 per hour</Text>
            </View>
          </View>
          <View style={styles.View_I572_3998_572_1815}>
            <View style={styles.View_I572_3998_572_1816}>
              <Text style={styles.Text_I572_3998_572_1816}>5 hours taught</Text>
            </View>
          </View>
          <View style={styles.View_I572_3998_572_1817}>
            <View style={styles.View_I572_3998_572_1818}>
              <Text style={styles.Text_I572_3998_572_1818}>
                5++ tutor rating
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I572_3998_572_1819}>
          <View style={styles.View_I572_3998_572_1820}>
            <View style={styles.View_I572_3998_572_1821}>
              <Text style={styles.Text_I572_3998_572_1821}>Send message</Text>
            </View>
            <View style={styles.View_I572_3998_572_1822}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f776/d4f2/1fbb565fd38d5d84881d4f62678844bc"
                }}
                style={styles.ImageBackground_I572_3998_572_1823}
              />
              <View
                source={{ uri: "null" }}
                style={styles.View_I572_3998_572_1826}
              />
            </View>
          </View>
          <View style={styles.View_I572_3998_572_1827}>
            <View style={styles.View_I572_3998_572_1828}>
              <Text style={styles.Text_I572_3998_572_1828}>Go to profile</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbdc/c680/7f70d671fc26f094720dc22099f17769"
              }}
              style={styles.ImageBackground_I572_3998_572_1829}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_572_3999}>
        <View style={styles.View_572_4000}>
          <Text style={styles.Text_572_4000}>Show more</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da77/7507/59d4454213d447b9d5cc96f355d88e35"
          }}
          style={styles.ImageBackground_572_4001}
        />
      </View>
      <View style={styles.View_572_4002}>
        <View style={styles.View_572_4003} />
        <View style={styles.View_572_4004}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20b0/a3bb/a4a98912edb152243ef3afcc2b476c12"
            }}
            style={styles.ImageBackground_572_4005}
          />
          <View style={styles.View_572_4007}>
            <Text style={styles.Text_572_4007}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_572_4008}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60a8/bcd5/be62a0e2ae2e66bb3e4d1e8a4bf54376"
            }}
            style={styles.ImageBackground_572_4009}
          />
          <View style={styles.View_572_4011}>
            <Text style={styles.Text_572_4011}>Favourites</Text>
          </View>
        </View>
        <View style={styles.View_572_4012}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef37/f6b0/52f794b98ef2ed33f1f78147b15a760e"
            }}
            style={styles.ImageBackground_572_4013}
          />
          <View style={styles.View_572_4019}>
            <Text style={styles.Text_572_4019}>Orders</Text>
          </View>
        </View>
        <View style={styles.View_572_4020}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8dd/8881/17e7f745a4db91048e3bc1cb9fc62738"
            }}
            style={styles.ImageBackground_572_4021}
          />
          <View style={styles.View_572_4024}>
            <Text style={styles.Text_572_4024}>Messages</Text>
          </View>
        </View>
        <View style={styles.View_572_4025}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fab5/d01f/4f907f0be000b32f2b0ffad9afb9c7ec"
            }}
            style={styles.ImageBackground_572_4026}
          />
          <View style={styles.View_572_4029}>
            <Text style={styles.Text_572_4029}>Account</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_572_4030}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e225/2003/cdb08399aa7922c9c419aa80db866255"
          }}
          style={styles.ImageBackground_572_4031}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dac/c2f3/ab22b7d78b941567a1b34610b13909b5"
          }}
          style={styles.ImageBackground_572_4032}
        />
      </View>
      <View style={styles.View_572_4033}>
        <View style={styles.View_572_4034} />
        <View style={styles.View_572_4035}>
          <Text style={styles.Text_572_4035}>English Tutors</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_572_4036}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("572_3484"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f922/3f00/0a8658b967c75995be3d1f0c80f79831"
            }}
            style={styles.ImageBackground_572_4037}
          />
          <View source={{ uri: "null" }} style={styles.View_572_4040} />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995b/14ca/4a0040481b21cdc956fd45a11813d98c"
          }}
          style={styles.ImageBackground_572_4041}
        />
      </View>
      <View style={styles.View_572_4043}>
        <View style={styles.View_572_4044} />
        <TouchableOpacity
          style={styles.TouchableOpacity_572_4045}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("572_3837"))
          }
        >
          <View style={styles.View_572_4046}>
            <Text style={styles.Text_572_4046}>Filters</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31ea/61f0/cdc3c4e5817ebc6731d790a48aac0182"
            }}
            style={styles.ImageBackground_572_4047}
          />
        </TouchableOpacity>
        <View style={styles.View_572_4048}>
          <View style={styles.View_572_4049}>
            <Text style={styles.Text_572_4049}>Highest Rating</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/560e/9b5d/ccac9539387a8536aecff14c3adc6fa8"
            }}
            style={styles.ImageBackground_572_4050}
          />
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("273%") },
  View_572_3993: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_572_3993: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_3994: {
    width: wp("91%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I572_3994_572_1796: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_I572_3994_572_1797: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3994_572_1798: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I572_3994_572_1799: {
    width: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_3994_572_1802: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I572_3994_572_1803: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1803: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3994_572_1804: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("14%")
  },
  View_I572_3994_572_1805: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3994_572_1806: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1806: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3994_572_1807: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3994_572_1808: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3994_572_1809: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3994_572_1810: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3994_572_1811: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1811: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3994_572_1812: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3994_572_1813: {
    width: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3994_572_1814: {
    flexGrow: 1,
    width: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1814: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3994_572_1815: {
    width: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3994_572_1816: {
    flexGrow: 1,
    width: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1816: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3994_572_1817: {
    width: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3994_572_1818: {
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
  Text_I572_3994_572_1818: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3994_572_1819: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3994_572_1820: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3994_572_1821: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3994_572_1822: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_I572_3994_572_1823: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I572_3994_572_1826: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I572_3994_572_1827: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_3994_572_1828: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3994_572_1828: {
    color: "rgba(46, 12, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_3994_572_1829: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_572_3995: {
    width: wp("91%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("67%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I572_3995_572_1796: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_I572_3995_572_1797: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3995_572_1798: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I572_3995_572_1799: {
    width: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_3995_572_1802: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I572_3995_572_1803: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1803: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3995_572_1804: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("14%")
  },
  View_I572_3995_572_1805: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3995_572_1806: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1806: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3995_572_1807: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3995_572_1808: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3995_572_1809: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3995_572_1810: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3995_572_1811: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1811: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3995_572_1812: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3995_572_1813: {
    width: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3995_572_1814: {
    flexGrow: 1,
    width: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1814: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3995_572_1815: {
    width: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3995_572_1816: {
    flexGrow: 1,
    width: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1816: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3995_572_1817: {
    width: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3995_572_1818: {
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
  Text_I572_3995_572_1818: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3995_572_1819: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3995_572_1820: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3995_572_1821: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3995_572_1822: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_I572_3995_572_1823: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I572_3995_572_1826: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I572_3995_572_1827: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_3995_572_1828: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3995_572_1828: {
    color: "rgba(46, 12, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_3995_572_1829: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_572_3996: {
    width: wp("91%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("111%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I572_3996_572_1796: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_I572_3996_572_1797: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3996_572_1798: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I572_3996_572_1799: {
    width: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_3996_572_1802: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I572_3996_572_1803: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1803: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3996_572_1804: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("14%")
  },
  View_I572_3996_572_1805: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3996_572_1806: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1806: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3996_572_1807: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3996_572_1808: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3996_572_1809: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3996_572_1810: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3996_572_1811: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1811: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3996_572_1812: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3996_572_1813: {
    width: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3996_572_1814: {
    flexGrow: 1,
    width: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1814: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3996_572_1815: {
    width: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3996_572_1816: {
    flexGrow: 1,
    width: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1816: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3996_572_1817: {
    width: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3996_572_1818: {
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
  Text_I572_3996_572_1818: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3996_572_1819: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3996_572_1820: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3996_572_1821: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3996_572_1822: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_I572_3996_572_1823: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I572_3996_572_1826: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I572_3996_572_1827: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_3996_572_1828: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3996_572_1828: {
    color: "rgba(46, 12, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_3996_572_1829: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_572_3997: {
    width: wp("91%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("155%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I572_3997_572_1796: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_I572_3997_572_1797: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3997_572_1798: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I572_3997_572_1799: {
    width: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_3997_572_1802: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I572_3997_572_1803: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1803: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3997_572_1804: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("14%")
  },
  View_I572_3997_572_1805: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3997_572_1806: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1806: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3997_572_1807: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3997_572_1808: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3997_572_1809: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3997_572_1810: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3997_572_1811: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1811: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3997_572_1812: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3997_572_1813: {
    width: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3997_572_1814: {
    flexGrow: 1,
    width: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1814: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3997_572_1815: {
    width: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3997_572_1816: {
    flexGrow: 1,
    width: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1816: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3997_572_1817: {
    width: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3997_572_1818: {
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
  Text_I572_3997_572_1818: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3997_572_1819: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3997_572_1820: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3997_572_1821: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3997_572_1822: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_I572_3997_572_1823: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I572_3997_572_1826: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I572_3997_572_1827: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_3997_572_1828: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3997_572_1828: {
    color: "rgba(46, 12, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_3997_572_1829: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_572_3998: {
    width: wp("91%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("200%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I572_3998_572_1796: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_I572_3998_572_1797: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3998_572_1798: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I572_3998_572_1799: {
    width: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I572_3998_572_1802: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I572_3998_572_1803: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1803: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3998_572_1804: {
    flexGrow: 1,
    width: wp("48%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("14%")
  },
  View_I572_3998_572_1805: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3998_572_1806: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1806: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3998_572_1807: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3998_572_1808: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3998_572_1809: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3998_572_1810: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I572_3998_572_1811: {
    flexGrow: 1,
    width: wp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1811: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3998_572_1812: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3998_572_1813: {
    width: wp("18%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3998_572_1814: {
    flexGrow: 1,
    width: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1814: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3998_572_1815: {
    width: wp("24%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3998_572_1816: {
    flexGrow: 1,
    width: wp("24%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1816: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3998_572_1817: {
    width: wp("19%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3998_572_1818: {
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
  Text_I572_3998_572_1818: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 12.702031135559082,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3998_572_1819: {
    flexGrow: 1,
    width: wp("80%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I572_3998_572_1820: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_I572_3998_572_1821: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1821: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I572_3998_572_1822: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_I572_3998_572_1823: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I572_3998_572_1826: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I572_3998_572_1827: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I572_3998_572_1828: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I572_3998_572_1828: {
    color: "rgba(46, 12, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I572_3998_572_1829: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_572_3999: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("246%"),
    backgroundColor: "rgba(84, 51, 147, 1)"
  },
  View_572_4000: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_572_4000: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_4001: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("3%")
  },
  View_572_4002: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_4003: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_4004: {
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
  ImageBackground_572_4005: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_4007: {
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
  Text_572_4007: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_4008: {
    width: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_4009: {
    width: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_572_4011: {
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
  Text_572_4011: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_4012: {
    width: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_4013: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_572_4019: {
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
  Text_572_4019: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_4020: {
    width: wp("12%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_4021: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_4024: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_4024: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_4025: {
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
  ImageBackground_572_4026: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_572_4029: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_572_4029: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_572_4030: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("176%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_572_4031: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_572_4032: {
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  View_572_4033: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_4034: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_4035: {
    width: wp("32%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_572_4035: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_572_4036: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_572_4037: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_572_4040: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_572_4041: {
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_572_4043: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_572_4044: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_572_4045: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_4046: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_572_4046: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_4047: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_572_4048: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_572_4049: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_572_4049: {
    color: "rgba(32, 32, 58, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_572_4050: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
