import { Button, Image, Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";

export default function Screen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingVertical: 30,
      }}
    >
      {/* <EmptyActiveState /> */}

      <ActiveCard />
    </ScrollView>
  );
}

type Props = {};
export const ActiveCard = ({}: Props) => {
  return (
    <View className="w-full bg-white py-[18px] px-[10px] rounded-lg gap-[15px]">
      <View className="w-full flex-row items-center justify-between gap-4">
        <Text className="text-sm font-gilroyMedium text-textColor">
          Booking Id: ABC-123GHZ
        </Text>

        <Pressable onPress={() => router.navigate("bookings/live")}>
          <Text className="text-sm font-gilroyMedium text-primary">
            Live tracking
          </Text>
        </Pressable>
      </View>

      <View className="w-full gap-[10px]">
        <View className="w-full flex-row items-center justify-between gap-4">
          <Text className="text-xs font-gilroyRegular text-textColor">
            10:00AM
          </Text>

          <Text className="text-xs font-gilroyRegular text-textColor">
            12:50PM
          </Text>
        </View>

        <View className="w-full flex flex-row items-center justify-between">
          <Text className="font-gilroyMedium text-sm text-textColor">
            Wuse, Abuja
          </Text>

          <Image
            source={require("../../assets/icons/arrow.svg")}
            className="w-[50px] h-[16px]"
            contentFit="contain"
          />

          <Text className="font-gilroyMedium text-sm text-textColor text-right">
            Ogaminana, Kogi state
          </Text>
        </View>

        <View className="w-full flex-row items-center justify-between gap-4">
          <Text className="text-xs font-gilroyRegular text-textColor">
            July 30th 2023
          </Text>

          <Text className="text-xs font-gilroyMedium text-textColor">
            2hr 45min
          </Text>

          <Text className="text-xs font-gilroyRegular text-textColor">
            July 30th 2023
          </Text>
        </View>
      </View>
    </View>
  );
};

export const EmptyActiveState = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={require("../../assets/images/bookings.svg")}
        contentFit="contain"
        className="w-40 h-60"
      />

      <View className="py-20 -mt-12">
        <Text className="text-center text-3xl font-gilroyBold">
          No Active trip yet!
        </Text>
        <Text className=" text-center text-lg font-gilroyRegular">
          Start your journey by booking a trip. Your active adventures will
          appear here
        </Text>
      </View>

      <View className=" w-full">
        <Button label="Explore" />
      </View>
    </View>
  );
};
