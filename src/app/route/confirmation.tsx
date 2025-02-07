import { Button, Image, Text, View } from "src/ui";
import { router } from "expo-router/build/imperative-api";

const ConfirmationScreen = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6 pt-[44px]">
      <View className="mb-4 mt-5">
        <Image
          source={require("../../assets/icons/Group.svg")}
          className="w-60 h-60"
          contentFit="contain"
        />
      </View>

      <View className="items-center mb-20">
        <Text className="text-2xl font-gilroyBold text-textColor mb-2">
          Booking Successful!
        </Text>
        <Text className="text-center text-[#667085] mb-8">
          We are pleased to confirm that your transaction was successful.
        </Text>
      </View>

      <View className="w-full mb-8 p-[4px] -pl-4 flex gap-[5px]">
        <View className="w-full flex flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              10:00AM
            </Text>
            <Text className="text-sm font-gilroyMedium text-textColor">
              Wuse, Abuja
            </Text>
          </View>
          <Image
            source={require("../../assets/icons/arrow.svg")}
            contentFit="contain"
            className="w-[51px] h-2"
          />
          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              12:50PM
            </Text>
            <Text className="text-sm font-gilroyMedium text-textColor">
              Ogaminana, Kogi state
            </Text>
          </View>
        </View>

        <View className="w-full flex flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              July 24th
            </Text>
          </View>
          <Text className="text-xs font-gilroyMedium text-textColor">
            2hr 45min
          </Text>
          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              July 24th
            </Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="w-full px-1 py-[18px] flex">
        <View className="w-full flex-row justify-between space-x-5">
          <Button
            className="bg-gray-200 py-3 px-10 rounded-lg"
            onPress={() => router.navigate("route/cancel-ticket")}
          >
            <Text className="text-primary font-gilroyMedium">View route</Text>
          </Button>
          <Button
            className="bg-primary py-3 px-10 rounded-lg"
            onPress={() => router.navigate("route/e-ticket")}
          >
            <Text className="text-white font-gilroyMedium">Show E-ticket</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationScreen;
