import AntDesign from "@expo/vector-icons/AntDesign";

import { Pressable, ScrollView, Text, View, WIDTH } from "src/ui";

type Props = {
  active: boolean;
  label: string;
  onPress: () => void;
};

export const TabButton = ({ active, label, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 flex items-center justify-center relative"
    >
      <Text
        className={`font-gilroySemibold text-sm ${
          active ? "text-textColor" : "text-subTextColor"
        }`}
      >
        {label}
      </Text>

      {active && (
        <View className="w-[60%] h-[2px] bg-secondary absolute bottom-0" />
      )}
    </Pressable>
  );
};

export const AllTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1 gap-[10px] py-[26px] px-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-[10px]">
          <CouponItem type="active" />
          <CouponItem type="active" />
        </View>
      </ScrollView>
    </View>
  );
};

export const ExpiredTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1 gap-[20px] py-[26px] px-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-[20px]">
          <Text className="font-gilroyRegular text-sm text-textColor">
            Expired coupon will be cleared out permanently after 5 days.
          </Text>

          <View className="gap-[10px]">
            <CouponItem type="expired" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export const UsedTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1 gap-[10px] py-[26px] px-4">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="gap-[10px]">
          <CouponItem type="used" />
        </View>
      </ScrollView>
    </View>
  );
};

type CouponItemProps = {
  type: "active" | "used" | "expired";
};
export const CouponItem = ({ ...props }: CouponItemProps) => {
  return (
    <View
      className={`w-full rounded-[10px] ${
        props?.type === "used" ? "bg-[#6670851A]" : "bg-white"
      }`}
    >
      <View className="w-full px-[10px] py-[12px] border-b border-b-[#667085]">
        <View className="w-full flex-row items-center justify-between">
          <Text className="font-gilroySemibold text-base text-textColor">
            Trip 5% off
          </Text>
          <Text
            className={`font-gilroySemibold text-base ${
              props?.type === "used" ? "text-subTextColor" : "text-primary"
            }`}
          >
            5%
          </Text>
        </View>

        <View className="w-full flex-row">
          {props?.type === "active" && (
            <View className="h-5 px-1 items-center justify-center rounded-lg bg-[#FD8C001A]">
              <Text className="font-gilroyMedium text-xs text-[#FD8C00]">
                Expires in 30 days
              </Text>
            </View>
          )}

          {props?.type === "expired" && (
            <View className="h-5 px-1 items-center justify-center rounded-lg bg-[#B3261E1A]">
              <Text className="font-gilroyMedium text-xs text-[#B3261E]">
                Expired
              </Text>
            </View>
          )}

          {props?.type === "used" && (
            <View className="h-5 px-1 items-center justify-center rounded-lg bg-[#6670851A]">
              <Text className="font-gilroyMedium text-xs text-[#667085]">
                Used
              </Text>
            </View>
          )}
        </View>
      </View>

      <View className="w-full flex-row px-[10px] py-[14px] items-center gap-2">
        <Text className="text-sm font-gilroyMedium text-textColor">
          Rules of use
        </Text>

        <AntDesign name="right" size={16} color="black" />
      </View>
    </View>
  );
};
