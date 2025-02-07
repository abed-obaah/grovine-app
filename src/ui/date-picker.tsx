import { Pressable, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useState } from "react";

import { Image } from "./image";
import { Text } from "./text";

type Props = {
  placeholder: string;
  showIcon?: boolean;
  label?: string;
};

export const DatePicker = ({ placeholder, showIcon = true, label }: Props) => {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);
  const [selected, setSelected] = useState<Date>();

  const showDatePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelected(date);
    hideDatePicker();
  };

  return (
    <>
      <View className="w-full gap-2">
        {label && (
          <Text className="text-sm font-gilroyMedium text-textColor">
            {label}
          </Text>
        )}

        <Pressable
          onPress={showDatePicker}
          className="w-full h-[36px] rounded-[8px] border-[1px] border-[#66708533] px-[10px] flex items-center flex-row justify-between"
        >
          {selected ? (
            <Text className="text-sm font-gilroyMedium text-textColor">
              {selected.toDateString()}
            </Text>
          ) : (
            <Text className="text-sm font-gilroyMedium text-subTextColor">
              {placeholder}
            </Text>
          )}

          {showIcon && (
            <Image
              source={require("../assets/icons/date.svg")}
              className="w-5 h-5"
              contentFit="contain"
            />
          )}
        </Pressable>
      </View>

      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selected}
      />
    </>
  );
};
