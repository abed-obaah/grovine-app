import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { MenuButton } from "src/components/home/menu";
import { ScreenLayout } from "src/components/screen-layout";
import { Image, Pressable, ScrollView, Text, View } from "src/ui";
// import { CircularProgress } from "../_layout";
import { router } from "expo-router";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FFFFFF">
      <View className="flex-1 pt-[60px]">
        <View className="flex-1 bg-[#FAF9F6] gap-[30px]">
          <View className="w-full px-4 pt-5">
            {/* <MenuButton isAbsolute={false} /> */}

            <View className="w-full items-center justify-center gap-[14px]">
              <View className="w-[130px] aspect-square rounded-full bg-[#6670854D] relative">
                <Image
                  source={require("../../../assets/images/profile.png")}
                  contentFit="cover"
                  className="w-full h-full rounded-full"
                />

                <Pressable className="w-[32px] h-[32px] rounded-full bg-primary items-center justify-center absolute bottom-0 right-0">
                  <FontAwesome6 name="add" size={18} color="white" />
                </Pressable>
              </View>

              <View>
                <Text className="text-center text-base font-gilroySemibold text-textColor">
                 Okoro John
                </Text>
                <Text className="text-center text-sm font-gilroyRegular text-textColor">
                  Joined March 2024
                </Text>
              </View>
            </View>
          </View>

          <View className="px-4">
            <View className="w-full h-[60px] rounded-lg bg-[#6670851A] px-4 flex flex-row items-center border border-[#5554ED80]">
              <View className="flex-1">
                <Text className="font-gilroyMedium text-sm text-textColor">
                  Profile completion
                </Text>

                <Text className="font-gilroyRegular text-xs text-textColor">
                  60% left to complete your profile
                </Text>
              </View>

              {/* <CircularProgress percentage={40} /> */}
            </View>
          </View>

          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 gap-3">
              <View className="w-full bg-white rounded-[20px] px-4">
                <ProfileItem
                  icon={require("../../../assets/icons/profile.svg")}
                  label="Personal info"
                  onPress={() => router.navigate("/profile/personal-info")}
                />

                <ProfileItem
                  icon={require("../../../assets/icons/security.svg")}
                  label="Security"
                  onPress={() => router.navigate("/(app)/profile/security")}
                />
              </View>

              <View className="w-full bg-white rounded-[20px] px-4">
                <ProfileItem
                  icon={require("../../../assets/icons/profile.svg")}
                  label="Notification settings"
                  onPress={() => router.navigate("/notification")}
                />

                <ProfileItem
                  icon={require("../../../assets/icons/people.svg")}
                  label="Referrals"
                  onPress={() => router.navigate("profile/referral")}
                />

                <ProfileItem
                  icon={require("../../../assets/icons/card.svg")}
                  label="Payment method"
                  onPress={() => router.navigate("profile/payment-method")}
                />
              </View>

              <View className="w-full bg-white rounded-[20px] px-4">
                <ProfileItem
                  icon={require("../../../assets/icons/profile.svg")}
                  label="Log out"
                />

                <ProfileItem
                  icon={require("../../../assets/icons/trash.svg")}
                  label="Delete my account"
                  onPress={() => router.navigate("/(app)/profile/delete")}
                  isDanger
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScreenLayout>
  );
}

type Props = {
  label: string;
  icon: string;
  isDanger?: boolean;
  onPress?: () => void;
};
export const ProfileItem = ({ ...props }: Props) => {
  return (
    <Pressable
      onPress={props?.onPress}
      className="w-full h-[60px] items-center flex-row gap-[10px] border-b border-b-[#6670851A]"
    >
      <Image source={props?.icon} className="w-6 h-6" contentFit="contain" />

      <Text
        className={`font-gilroySemibold text-base ${
          props?.isDanger ? "text-[#B3261E]" : "text-subTextColor"
        }`}
      >
        {props?.label}
      </Text>
    </Pressable>
  );
};
