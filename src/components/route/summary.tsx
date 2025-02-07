import { Image, Text, View } from "src/ui";

type Props = {
  label: string;
};

export const SummaryCard = ({ label }: Props) => {
  return (
    <View className="w-full flex bg-white rounded-[10px] p-6">
      <View className="w-full flex flex-col gap-[10px]">
        {/* Header Section */}
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-base font-gilroySemibold text-textColor">
            {label}
          </Text>
        </View>

        {/* Travel Type */}
        <Text className="text-xs font-gilroyRegular text-textColor">Luxury</Text>

        {/* Stations Section */}
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-sm font-gilroyMedium text-textColor">
            Wuse bus station
          </Text>

          <Image
            source={require("../../assets/icons/arrow.svg")}
            contentFit="contain"
            className="w-[51px] h-2"
          />

          <Text className="text-sm font-gilroyMedium text-textColor">
            Kogi bus station
          </Text>
        </View>

        {/* Time & Duration Section */}
        <View className="w-full flex flex-row items-center justify-between">
          <View className="flex flex-col">
            <Text className="text-xs font-gilroyRegular text-textColor">
              July 24th
            </Text>
            <Text className="text-xs font-gilroyRegular text-textColor">
              10:00AM
            </Text>
          </View>

          <Text className="text-xs font-gilroyMedium text-textColor">
            2hr 45min
          </Text>

          <View className="flex flex-col">
            <Text className="text-xs font-gilroyRegular text-textColor">
              July 24th
            </Text>
            <Text className="text-xs font-gilroyRegular text-textColor">
              12:50PM
            </Text>
          </View>
        </View>

        {/* Dotted Line */}
        <View
          style={{
            width: "100%",
            height: 0,
            borderStyle: "dashed",
            borderWidth: 1,
            borderColor: "#667085",
          }}
        />

        {/* Passengers & Luggage Section */}
        <View className="w-full flex flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              Passengers No.
            </Text>
            <Text className="text-xs font-gilroyRegular text-textColor">3</Text>
          </View>

          <View>
            <Text className="text-xs font-gilroyMedium text-textColor">
              Luggage
            </Text>
            <Text className="text-xs font-gilroyMedium text-textColor">
              1 piece (20kg)
            </Text>
          </View>

          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              Price
            </Text>
            <Text className="text-xs font-gilroyRegular text-textColor">
              NGN12,000
            </Text>
          </View>
        </View>

        {/* Total Amount Section */}
        <View className="w-full flex flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-gilroyRegular text-textColor">
              Passengers No.
            </Text>
            <Text className="text-xs font-gilroyRegular text-textColor">3</Text>
          </View>

          <View>
            <Text className="text-xs font-gilroyMedium text-textColor">
              Total amount
            </Text>
            <Text className="text-xs font-gilroyMedium text-textColor">
              NGN15,000
            </Text>
          </View>

          <View>
            <Text className="text-xs font-gilroyRegular text-white">Price</Text>
            <Text className="text-xs font-gilroyRegular text-white">
              NGN12,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
