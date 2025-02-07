import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

import { Image, Pressable, Text, View } from "@/ui";
import { router } from "expo-router";

type Props = {};
export const WalletCard = ({}: Props) => {
  const [show, setShow] = useState(true);

  return (
    <View className="w-full aspect-[343/175] rounded-[20px] bg-[#5554ED] px-4 py-6 justify-between">
      <View className="w-full gap-2">
        <View className="w-full flex-row items-center justify-between">
          <Text className="font-gilroyMedium text-sm text-white">
            Current balance
          </Text>

          <View className="h-[25px] px-3 bg-white rounded-[10px] items-center justify-center">
            <Text className="font-gilroyMedium text-sm text-textColor">
              NGN
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <Pressable onPress={() => setShow((prev) => !prev)}>
            <Ionicons
              name={show ? "eye-off-outline" : "eye-outline"}
              size={18}
              color="white"
            />
          </Pressable>

          <Text className="font-gilroyBold text-2xl text-white">
            {show ? "NGN50,000" : "***********"}
          </Text>
        </View>
      </View>

      <View className="flex flex-row">
        <Pressable
          onPress={() => router.navigate("/transactions/withdraw")}
          className="h-[37px] flex-row bg-white items-center rounded-full gap-[5px] px-4"
        >
          <Image
            source={require("@/assets/icons/thunder.svg")}
            className="w-5 h-5"
            contentFit="contain"
          />

          <Text className="font-gilroyMedium text-sm text-black">Withdraw</Text>
        </Pressable>
      </View>
    </View>
  );
};
