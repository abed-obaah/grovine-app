import AntDesign from "@expo/vector-icons/AntDesign";
import { Svg, Circle, G, Text as SvgText } from "react-native-svg";

import {
  Button,
  DatePicker,
  Image,
  Input,
  Option,
  Pressable,
  ScrollView,
  Select,
  Text,
  View,
  WIDTH,
} from "@/ui";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export const CancelsTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 gap-[20px] py-[20px] px-4">
          <Text className="font-gilroySemibold text-base text-black text-center">
            Total percentage of cancelled trips
          </Text>

          <View className="w-full flex-row items-center justify-center aspect-[343/194] border border-[#6670851A] rounded-lg px-6 gap-6">
            <DonutChart primaryPercentage={30} secondaryPercentage={70} />

            <View className="flex-1 gap-[5px]">
              <View className="flex-row items-center gap-2">
                <View className="w-2 h-2 rounded-full bg-[#607D8B]" />
                <Text className="font-gilroyMedium text-sm text-black">
                  Driver
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                <View className="w-2 h-2 rounded-full bg-[#FFA726]" />
                <Text className="font-gilroyMedium text-sm text-black">
                  Passengers
                </Text>
              </View>
            </View>
          </View>

          <Text className="font-gilroySemibold text-base text-black text-center">
            Reasons for passengers cancellation
          </Text>

          <View className="w-full border border-[#6670851A] rounded-lg px-3 py-6 gap-4">
            <View className="w-full flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="w-2 h-2 rounded-full bg-[#FFB458]" />
                <Text className="font-gilroyMedium text-sm text-black">
                  My travel plans has changed
                </Text>
              </View>

              <Text className="font-gilroyMedium text-sm text-black">10%</Text>
            </View>

            <View className="w-full flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="w-2 h-2 rounded-full bg-[#FFB458]" />
                <Text className="font-gilroyMedium text-sm text-black">
                  I’ve a personal emergency
                </Text>
              </View>

              <Text className="font-gilroyMedium text-sm text-black">10%</Text>
            </View>

            <View className="w-full flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="w-2 h-2 rounded-full bg-[#FFB458]" />
                <Text className="font-gilroyMedium text-sm text-black">
                  I’m unwell and can’t travel
                </Text>
              </View>

              <Text className="font-gilroyMedium text-sm text-black">10%</Text>
            </View>

            <View className="w-full flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="w-2 h-2 rounded-full bg-[#FFB458]" />
                <Text className="font-gilroyMedium text-sm text-black">
                  My travel plans has changed
                </Text>
              </View>

              <Text className="font-gilroyMedium text-sm text-black">10%</Text>
            </View>
          </View>

          <Text className="font-gilroySemibold text-base text-black text-center">
            Actionable advice
          </Text>

          <View className="w-full gap-[18px]">
            <View className="w-full aspect-[322/105] rounded-lg bg-[#FAF9F6] items-center justify-center">
              <Text className="font-gilroySemibold text-base text-black text-center">
                Adjust your schedules
              </Text>
              <Text className="font-gilroyMedium text-sm text-subTextColor max-w-[80%] text-center">
                To better align with peak passenger demand and minimize
                cancellations.
              </Text>
            </View>

            <View className="w-full flex-row items-center justify-center gap-1">
              <View className="w-6 h-2 rounded-full bg-secondary" />
              <View className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
              <View className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

type DonutChartProps = {
  primaryPercentage: number;
  secondaryPercentage: number;
};
export const DonutChart = ({
  primaryPercentage,
  secondaryPercentage,
}: DonutChartProps) => {
  const radius = 50;
  const strokeWidth = 28;
  const circleCircumference = 2 * Math.PI * radius;

  // Calculate the offsets
  const primaryStrokeDashoffset =
    circleCircumference - (circleCircumference * primaryPercentage) / 100;
  const secondaryStrokeDashoffset =
    circleCircumference -
    (circleCircumference * (primaryPercentage + secondaryPercentage)) / 100;

  // Helper function to calculate the text position for percentages
  const getCoordinatesForPercentage = (percentage: number) => {
    const angle = (percentage * 3.6 - 90) * (Math.PI / 180); // Convert percentage to degrees
    const x = 75 + 40 * Math.cos(angle); // Adjust the '40' multiplier to fine-tune text positioning
    const y = 75 + 40 * Math.sin(angle);
    return { x, y };
  };

  const primaryCoords = getCoordinatesForPercentage(primaryPercentage / 2); // Center of primary arc
  const secondaryCoords = getCoordinatesForPercentage(
    primaryPercentage + secondaryPercentage / 2
  ); // Center of secondary arc

  return (
    <View style={styles.container}>
      <Svg width={150} height={150} viewBox="0 0 150 150">
        <G rotation="-90" origin="75, 75">
          {/* Secondary Circle */}
          <Circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#FFA726" // orange color
            strokeWidth={strokeWidth}
            strokeDasharray={circleCircumference}
            strokeDashoffset={secondaryStrokeDashoffset}
            fill="transparent"
          />
          {/* Primary Circle */}
          <Circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#607D8B" // grey color
            strokeWidth={strokeWidth}
            strokeDasharray={circleCircumference}
            strokeDashoffset={primaryStrokeDashoffset}
            fill="transparent"
          />
        </G>
        {/* Text for Primary Percentage */}
        <SvgText
          x={primaryCoords.x + 4}
          y={primaryCoords.y}
          fontSize="12"
          fill="#FFFFFF"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {primaryPercentage}%
        </SvgText>

        {/* Text for Secondary Percentage */}
        <SvgText
          x={secondaryCoords.x - 18}
          y={secondaryCoords.y}
          fontSize="12"
          fill="#FFFFFF"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {secondaryPercentage}%
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
