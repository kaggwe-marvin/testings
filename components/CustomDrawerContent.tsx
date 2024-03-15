import { useAuth } from "@/context/AuthContext";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props: any) {
  const { top, bottom } = useSafeAreaInsets();

  const { authState, onLogout } = useAuth();
  const router = useRouter();
  const onLogoutPressed = () => {
    onLogout!();
    router.replace("/");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#dde3fe" }}>
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/1976498?v=4",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
              color: "#5363df",
            }}>
            {" "}
            Dummy user
          </Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={"Logout"} onPress={onLogoutPressed} />
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}>
        <Text>Signed in as: {authState?.username}</Text>
      </View>
    </View>
  );
}
