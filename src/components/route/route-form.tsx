import { useRef, useState } from "react";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Image, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";

type Props = {
  label: string;
  iconSrc: string;
  active?: boolean;
  onPress?: () => void;
};
export const RouteType = ({ label, iconSrc, active, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 flex flex-row items-center justify-center gap-[10px] border-b-[2px] ${
        active ? "border-b-[#5554ED]" : "border-b-transparent"
      }`}
    >
      <Image source={iconSrc} className="w-5 h-5" contentFit="contain" />

      <Text className="font-gilroySemibold text-base text-textColor">
        {label}
      </Text>
    </Pressable>
  );
};

export const RouteInputForm = () => {
  const startPointInput = useRef<TextInput>(null);
  const endPointInput = useRef<TextInput>(null);

  return (
    <View
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
      }}
      className="w-full aspect-[342/113] bg-[#F7F7F7] flex flex-row items-center gap-[10px] px-[14px] rounded-lg"
    >
      <View className="flex-1 flex">
        <Pressable
          onPress={() => startPointInput?.current?.focus()}
          className="flex-1 flex-row items-center gap-2 border-b border-b-[#66708580]"
        >
          <Image
            className="w-5 h-5"
            source={require("../../assets/icons/location.svg")}
            contentFit="contain"
          />

          <TextInput
            ref={startPointInput}
            className="flex flex-row items-center text-sm font-gilroyRegular text-textColor"
            placeholderTextColor="#667085"
            placeholder="start point"
          />
        </Pressable>

        <Pressable
          onPress={() => endPointInput?.current?.focus()}
          className="flex-1 flex-row items-center gap-2 border-b border-b-transparent"
        >
          <Image
            className="w-5 h-5"
            source={require("../../assets/icons/location-tick.svg")}
            contentFit="contain"
          />

          <TextInput
            ref={endPointInput}
            className="flex flex-row items-center text-sm font-gilroyRegular text-textColor"
            placeholderTextColor="#667085"
            placeholder="end point"
          />
        </Pressable>
      </View>
      <Image
        className="w-10 h-10"
        source={require("../../assets/icons/arrow-two-way.svg")}
        contentFit="contain"
      />
    </View>
  );
};

export const DepartureDate = () => {
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
    <Pressable
      onPress={showDatePicker}
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
      }}
      className="w-full h-[46px] flex flex-row items-center gap-2 bg-[#F7F7F7] rounded-lg px-[14px]"
    >
      <Image
        className="w-5 h-5"
        source={require("../../assets/icons/calendar.svg")}
        contentFit="contain"
      />

      {selected ? (
        <View className="flex-1 flex">
          <Text className="font-gilroyRegular text-sm text-[#667085]">
            Date
          </Text>
          <Text className="font-gilroyMedium text-sm text-textColor">
            {selected.toDateString()}
          </Text>
        </View>
      ) : (
        <Text className="font-gilroyMedium text-sm text-textColor">
          Departure date
        </Text>
      )}

      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selected}
      />
    </Pressable>
  );
};

export const PassengerCounter = () => {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  return (
    <View
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
      }}
      className="w-full flex gap-4 bg-[#F7F7F7] rounded-lg p-[14px]"
    >
      <Text className="font-gilroySemibold text-base text-black">
        Passenger
      </Text>

      <View className="w-full flex flex-row items-center">
        <View className="flex-1 flex flex-row items-center gap-2 border-r border-r-[#6670854D]">
          <Pressable
            onPress={() => {
              setAdult((prev) => {
                if (prev < 2) {
                  return prev;
                }
                return prev - 1;
              });
            }}
            className="w-6 h-6 rounded-[5px] bg-[#66708526] flex items-center justify-center"
          >
            <Text className="font-gilroyBold text-[22px] text-secondary">
              -
            </Text>
          </Pressable>

          <Text className="font-gilroyMedium text-sm text-black">
            {adult} Seats
          </Text>

          <Pressable
            onPress={() => {
              setAdult((prev) => {
                return prev + 1;
              });
            }}
            className="w-6 h-6 rounded-[5px] bg-[#66708526] flex items-center justify-center"
          >
            <Text className="font-gilroyBold text-[22px] text-secondary">
              +
            </Text>
          </Pressable>
        </View>

        {/* <View className="flex-1 flex flex-row items-center justify-center gap-2">
					<Pressable
						onPress={() => {
							setChild((prev) => {
								if (prev < 1) {
									return prev;
								}
								return prev - 1;
							});
						}}
						className="w-6 h-6 rounded-[5px] bg-[#66708526] flex items-center justify-center"
					>
						<Text className="font-gilroyBold text-[22px] text-secondary">
							-
						</Text>
					</Pressable>

					<Text className="font-gilroyMedium text-sm text-black">
						{child} Child
					</Text>

					<Pressable
						onPress={() => {
							setChild((prev) => {
								return prev + 1;
							});
						}}
						className="w-6 h-6 rounded-[5px] bg-[#66708526] flex items-center justify-center"
					>
						<Text className="font-gilroyBold text-[22px] text-secondary">
							+
						</Text>
					</Pressable>
				</View> */}
      </View>
    </View>
  );
};

type LocationItemProps = {
  type?: "default" | "my-location";
};

export const LocationItem = ({ type = "default" }: LocationItemProps) => {
  if (type === "my-location")
    return (
      <Pressable
        onPress={() => router.navigate("route/route-id")}
        className="w-full flex flex-row items-center gap-[10px] py-4 border-b border-b-[#66708533]"
      >
        <Image
          source={require("../../assets/icons/direct-up.svg")}
          className="w-4 h-4"
          contentFit="contain"
        />

        <Text className="text-base font-gilroyRegular text-textColor">
          My location
        </Text>
      </Pressable>
    );

  return (
    <Pressable className="w-full flex flex-row items-center gap-[10px] py-4 border-b border-b-[#66708533]">
      <Image
        source={require("../../assets/icons/location-circle.svg")}
        className="w-6 h-6"
        contentFit="contain"
      />

      <Text className="text-base font-gilroyRegular text-textColor">
        Sanlam life insurance Nigeria Limited
      </Text>
    </Pressable>
  );
};
