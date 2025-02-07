import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";
import { SvgUri } from "react-native-svg";

type Props = {
  label: string;
};

const TicketCard = ({ label }: Props) => {
  return (
    <View className="w-full flex bg-white rounded-[10px]">
      {/* Header */}
      <View className="w-full p-[10px] flex gap-[5px]">
        <View className="flex flex-row items-center justify-between w-full">
          <Image
            source={require("../../assets/images/logo.png")}
            contentFit="contain"
            className="w-[80px] h-[60px]" // Adjust size as needed
          />
          <Text className="text-lg font-gilroyRegular text-textColor">
            26th July, 2024
          </Text>
        </View>

        {/* Departure and Arrival Information */}
        <View className="w-full  flex gap-[5px]">
          <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-sm font-gilroyMedium text-textColor">
              From
            </Text>

            <Text className="text-sm font-gilroyMedium text-textColor">To</Text>
          </View>
          <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-sm font-gilroyBold text-textColor">
              Wuse, Abuja
            </Text>

            {/* Using react-native-svg for the arrow */}
            <Image
              source={require("../../assets/icons/arrow.svg")}
              contentFit="contain"
              className="w-[51px] h-2"
            />

            <Text className="text-sm font-gilroyBold  text-textColor">
              Ogaminana, Kogi state
            </Text>
          </View>

          {/* Date and Duration */}
          <View className="w-full flex flex-row items-center justify-between -mt-1">
            <View>
              <Text className="text-xs font-gilroyBold text-[#5554ED]">
                10:00AM
              </Text>
            </View>

            {/* <Text className="text-xs font-gilroyMedium text-textColor">
              2hr 45min
            </Text> */}

            <View>
              <Text className="text-xs font-gilroyBold text-[#5554ED]">
                12:50PM
              </Text>
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-1">
            <View>
              <Text className="text-md font-gilroyRegular text-textColor">
                Departure date
              </Text>
            </View>

            <View>
              <Text className="text-md font-gilroyRegular text-textColor">
                Arrival date
              </Text>
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-1">
            <View>
              <Text className="text-xs font-gilroyBold text-textColor">
                24th July, 2024
              </Text>
            </View>

            <View>
              <Text className="text-xs font-gilroyBold text-textColor">
                25th July, 2024
              </Text>
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-2">
            <View>
              <Text className="text-md font-gilroyRegular text-textColor">
                Number of ticket
              </Text>
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between -mt-1">
            <View>
              <Text className="text-xs font-gilroyBold text-textColor">01</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Dashed Line Separator */}
      <View
        style={{
          width: "100%",
          height: 0,
          borderStyle: "dashed",
          borderWidth: 1,
          borderColor: "#66708526",
        }}
      />

      {/* Passenger and Luggage Info */}
      <View className="w-full p-[10px] flex gap-[5px]">
        {/* Departure and Arrival Information */}
        <View className="w-full flex gap-[5px] my-4">
          <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-sm font-gilroyMedium text-textColor">
              Car number
            </Text>

            <Text className="text-sm font-gilroyMedium text-textColor">
              Booking Id
            </Text>
          </View>
          <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-sm font-gilroyBold text-textColor">
              ABC-123XC
            </Text>

            <Text className="text-sm font-gilroyBold  text-textColor">
              1235-GHJZ
            </Text>
          </View>

          {/* Date and Duration */}
          <View className="w-full flex flex-row items-center justify-between mt-4">
            <View>
              <Text className="text-md font-gilroyRegular text-textColor">
                Passenger details
              </Text>
            </View>
          </View>
          <View className="w-full flex flex-row items-center justify-between mt-1">
            <View>
              <Text className="text-md font-gilroyBold text-textColor">
                Esther Adebisi
              </Text>
            </View>

            <View>
              <Text className="text-md font-gilroyBold text-textColor">
                0905678945
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Dashed Line Separator */}
      <View
        style={{
          width: "100%",
          height: 0,
          borderStyle: "dashed",
          borderWidth: 1,
          borderColor: "#66708526",
        }}
      />
      <View className="w-full p-[10px] flex gap-[5px]">
        {/* Departure and Arrival Information */}
        <View className="w-full flex gap-[5px] my-4">
          <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-sm font-gilroyMedium text-textColor">
              Bus name
            </Text>
          </View>
          <View className="w-full flex flex-row items-center justify-between">
            <Text className="text-sm font-gilroyBold text-textColor">
              Mercedes-Benz Tourismo
            </Text>
          </View>

          {/* Date and Duration */}
          <View className="w-full flex flex-row items-center justify-between mt-4">
            <View>
              <Text className="text-md font-gilroyRegular text-textColor">
                Bus type
              </Text>
              <Text className="text-md font-gilroyBold text-textColor">
                Luxury
              </Text>
            </View>

            <Image
              source={require("../../assets/icons/qr.svg")}
              contentFit="contain"
              className="w-[90px] h-[80px]" // Adjust size as needed
            />
          </View>

          <View className="w-full flex flex-row items-center justify-between mt-1">
            <View>
              <Text className="text-md font-gilroyRegular text-textColor">
                Total Cost
              </Text>
              <Text className="text-md font-gilroyBold text-textColor">
                NGN15,000
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Total Amount Section */}
      <View className="w-full p-[10px] flex gap-[5px]">
        <View className="w-full flex flex-row items-center justify-between">
          <View>
            <Text className="text-md font-gilroyRegular text-textColor">
              Support contact
            </Text>
            <Text className="text-xs font-gilroyMedium text-textColor">
              support@trubooker.com
            </Text>
          </View>

          <Text className="text-xs font-gilroyMedium text-textColor">
            0902-345-678
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TicketCard;
