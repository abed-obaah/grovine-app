import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

import { Pressable, Text, View } from "@/ui";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

type Props = {
  title: string;
  showMenuButton?: boolean;
  showBackButton?: boolean;
  onBackPress?: () => void;
  onMenuButtonPress?: () => void;
};
export const Header = ({
  title,
  showMenuButton = false,
  showBackButton = true,
  onBackPress,
  onMenuButtonPress,
}: Props) => {
  const handleOnbackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View
      style={styles.shadowBox}
      className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative shadow-lg bg-white"
    >
      {showBackButton && (
        <Pressable onPress={handleOnbackPress} className="absolute left-[16px]">
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
      )}

      <Text className="text-base text-textColor font-gilroySemibold">
        {title}
      </Text>

      {showMenuButton && (
        <Pressable
          onPress={onMenuButtonPress}
          className="absolute right-[16px]"
        >
          <Entypo name="dots-three-vertical" size={18} color="black" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000000", // Black color
    shadowOffset: {
      width: 0, // X
      height: 4, // Y
    },
    shadowOpacity: 0.02, // 2% opacity
    shadowRadius: 5.3, // Blur

    // For Android
    elevation: 4, // Approximate elevation for the shadow effect
  },
});
