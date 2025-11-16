import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "@/components/auth/SmoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Page() {
  function openWebBrowser() {
    Linking.openURL("https://google.de");
  }

  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollContainer}>
        <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandlogo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>

        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View
          entering={FadeInDown.delay(400)}
          style={styles.privacyContainer}
        >
          <Text style={styles.privacyText}>
            Please visit{" "}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>{" "}
            to learn more about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandlogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 30,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "500",
  },
  buttonContainer: { width: "100%", gap: 12 },
  privacyContainer: { marginTop: 30, paddingHorizontal: 20 },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: { color: "#4285F4", textDecorationLine: "underline" },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    overflow: "hidden",
  },
});
