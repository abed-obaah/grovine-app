import { useAuth } from "../../core";
import { Image, Pressable, Text, View } from "../../ui";
import { router } from "expo-router";

export const Header = () => {
  const { user } = useAuth();

  return (
    <View
      className="w-full flex flex-row justify-between items-center"
    >
      <View className="flex flex-row items-center gap-3">
        

        <View className="flex-row items-center gap-1">
            <Text className="font-gilroyMedium text-subTextColor text-sm">
            Hello,{' '}
            </Text>
            <Text className="font-gilroySemibold text-subTextColor text-base">
            Craig 👋🏾
            </Text>
        </View>
      </View>

      <Pressable
        onPress={() => router.navigate("/notifications")}
        className="w-6 h-6 flex items-center justify-center"
      >
        <Image
          source={require("../../assets/icons/bell.svg")}
          className="w-full h-full"
          contentFit="contain"
        />
      </Pressable>
    </View>
  );
};
