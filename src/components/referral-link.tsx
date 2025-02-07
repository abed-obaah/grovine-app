import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Pressable, Text, View } from "src/ui";

type Props = {
  link?: string;
};
export const ReferralLink = ({ link = "trubooker.com/krvw-224" }: Props) => {
  return (
    <View className="w-full flex gap-3">
      <Text className="font-gilroySemibold text-base text-black">
        Referral link
      </Text>

      <View className="w-full h-[54px] border border-[#5554ED26] rounded-lg px-[16px] flex flex-row items-center justify-between">
        <Text className="font-gilroyMedium text-sm text-subTextColor">
          {link}
        </Text>

        <Pressable>
          <FontAwesome5 name="copy" size={16} color="#5554ED" />
        </Pressable>
      </View>
    </View>
  );
};
