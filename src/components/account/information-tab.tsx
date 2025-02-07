import AntDesign from "@expo/vector-icons/AntDesign";

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

const genders: Option[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const InformationTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 gap-[34px] py-[20px] px-4">
          <Text className="font-gilroyMedium text-sm text-subTextColor">
            Keep your vehicle information up-to-date for accurate trip bookings.
          </Text>

          <View className="gap-4">
            <Vehicle
              type="Bus"
              name="Toyota hiace 2018"
              license="ABZ-123-ZE4"
            />

            <Vehicle type="Car" name="Mercedez Benz" license="ABZ-123-ZE4" />
          </View>
        </View>
      </ScrollView>

      <View className="w-full bg-[#F7F7F7] py-6 px-4">
        <Button
          label="Add a vehicle"
          onPress={() => router.navigate("/account/add-vehicle")}
        />
      </View>
    </View>
  );
};

type Props = {
  type: string;
  name: string;
  license: string;
};
export const Vehicle = ({ ...props }: Props) => {
  return (
    <Pressable
      onPress={() => router.navigate("/account/vehicle")}
      className="w-full px-[10px] py-[18px] rounded-[10px] bg-[#FAF9F6] gap-[10px]"
    >
      <View className="w-full flex-row items-center justify-between">
        <Text className="font-gilroyMedium text-sm text-subTextColor">
          {props.type}
        </Text>

        <Text className="font-gilroyMedium text-sm text-subTextColor">
          {props.license}
        </Text>
      </View>

      <View className="w-full flex-row items-center justify-between">
        <Text className="font-gilroySemibold text-base text-textColor">
          {props.name}
        </Text>

        <AntDesign name="right" size={20} color="#667085" />
      </View>
    </Pressable>
  );
};
