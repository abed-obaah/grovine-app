import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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

export const DocumentTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <View className="gap-[20px] py-[36px] px-4">
          <Text className="font-gilroySemibold text-[18px] text-subTextColor">
            Driver requirements
          </Text>

          <VehicleDocument
            title="Personal information"
            subtitle="Completed"
            verified
          />
          <VehicleDocument
            title="Driver license"
            subtitle="Approved"
            verified
          />
        </View>

        <View className="gap-[20px] py-[36px] px-4 border-t border-t-[#66708533]">
          <Text className="font-gilroySemibold text-[18px] text-subTextColor">
            Toyota Hiace 2018
          </Text>

          <VehicleDocument
            title="Vehicle information"
            subtitle="Completed"
            verified
          />
          <VehicleDocument
            title="Vehicle insurance"
            subtitle="Completed"
            verified
          />
          <VehicleDocument
            title="Vehicle registration document"
            subtitle="Needs attention"
            verified={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

type Props = {
  title: string;
  subtitle: string;
  verified: boolean;
};
export const VehicleDocument = ({ ...props }: Props) => {
  return (
    <View
      style={{ backgroundColor: props.verified ? "#2EB5651A" : "#B3261E1A" }}
      className="w-full flex-row items-center justify-between px-[10px] py-[12px] rounded-[5px] gap-[10px]"
    >
      <View className="gap-1">
        <Text className="font-gilroySemibold text-base text-textColor">
          {props.title}
        </Text>
        <Text className="font-gilroyMedium text-xs text-subTextColor">
          {props.subtitle}
        </Text>
      </View>

      {props.verified ? (
        <AntDesign name="checkcircle" size={20} color="#75C640" />
      ) : (
        <MaterialIcons name="cancel" size={20} color="#EB3223" />
      )}
    </View>
  );
};
