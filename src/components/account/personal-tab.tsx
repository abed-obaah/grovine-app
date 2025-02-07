import Ionicons from "@expo/vector-icons/Ionicons";

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

const genders: Option[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const PersonalTab = () => {
  return (
    <View style={{ width: WIDTH }} className="flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 gap-10 py-[30px] px-4">
          <View className="w-full items-center justify-center gap-[14px]">
            <View className="w-[130px] aspect-square rounded-full relative">
              <Image
                source={require("@/assets/images/user.jpg")}
                className="w-full h-full rounded-full"
                contentFit="cover"
              />

              <Pressable className="w-8 h-8 items-center justify-center rounded-full bg-secondary absolute bottom-0 right-0">
                <Ionicons name="add-sharp" size={24} color="white" />
              </Pressable>
            </View>

            <View className="gap-[4px]">
              <Text className="font-gilroySemibold text-base text-textColor text-center">
                Stanley James
              </Text>
              <Text className="font-gilroyRegular text-xs text-textColor text-center">
                Joined March 2024
              </Text>
            </View>
          </View>

          <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
            <Input label="First name" placeholder="Esther" sm />

            <Input label="Last name" placeholder="Adebisi" sm />

            <Input label="Address" placeholder="123, Test street, Abuja" sm />

            <Input label="City" placeholder="Abuja" sm />

            <Select label="Gender" placeholder="female" options={genders} sm />

            <DatePicker label="Date of birth" placeholder="10/10/2001" />

            <Input label="Country" placeholder="Nigeria" sm />
          </View>
        </View>
      </ScrollView>

      <View className="w-full bg-[#F7F7F7] py-6 px-4">
        <Button label="Save changes" />
      </View>
    </View>
  );
};
