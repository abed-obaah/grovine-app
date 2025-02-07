import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { Image, Pressable, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";

export const SearchModal = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Snap points: 30% for the initial position, 80% for expanded position
  const snapPoints = useMemo(() => ["35%", "80%"], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={snapPoints}
        enableDismissOnClose={false}
        enablePanDownToClose={false}
        handleComponent={CustomHandle}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
            bounces={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets
          >
            <View className="flex-1 flex gap-5">
              <Text className="font-gilroySemibold text-lg text-textColor">
                Good evening John Doe!
              </Text>

              <SearchInput bottomSheetModalRef={bottomSheetModalRef} />

              <Terminal />
              <Terminal />
              <Terminal />
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

type LiveModalProps = {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
};

export const LiveTrackingModal = ({ bottomSheetModalRef }: LiveModalProps) => {
  // Snap points: 30% for the initial position, 80% for expanded position
  const snapPoints = useMemo(() => ["30%", 468], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={snapPoints}
        enableDismissOnClose={false}
        enablePanDownToClose={false}
        handleComponent={CustomHandle}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
            bounces={false}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets
          >
            <View className="flex-1 flex gap-5">
              <View className="w-full gap-[10px] border-b border-b-[#66708526] pb-[10px]">
                <View className="w-full flex-row items-center justify-between gap-4">
                  <Text className="text-sm font-gilroyMedium text-subTextColor">
                    From
                  </Text>

                  <Text className="text-sm font-gilroyMedium text-subTextColor">
                    To
                  </Text>
                </View>

                <View className="w-full flex flex-row items-center justify-between">
                  <Text className="font-gilroyBold text-sm text-textColor">
                    Wuse, Abuja
                  </Text>

                  <Image
                    source={require("../../assets/icons/arrow.svg")}
                    className="w-[50px] h-[16px]"
                    contentFit="contain"
                  />

                  <Text className="font-gilroyBold text-sm text-textColor text-right">
                    Ogaminana, Kogi state
                  </Text>
                </View>

                <View className="w-full flex-row items-center justify-between gap-4">
                  <Text className="text-sm font-gilroyMedium text-subTextColor">
                    10:00AM
                  </Text>

                  <Text className="text-sm font-gilroyMedium text-subTextColor">
                    12:50PM
                  </Text>
                </View>
              </View>

              <View className="w-full flex-row items-center justify-between">
                <Text className="font-gilroySemibold text-base text-textColor">
                  Bus stops
                </Text>

                <Pressable onPress={() => router.navigate("bookings/driver")}>
                  <Text className="font-gilroyMedium text-sm text-primary">
                    View driver details
                  </Text>
                </Pressable>
              </View>

              <View className="w-full flex">
                <View className="w-full flex flex-row">
                  <Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
                    10:00am
                  </Text>

                  <View className="w-full h-[76px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
                    <View className="w-5 h-5 bg-white absolute left-[-11px] top-0 flex items-center justify-center">
                      <Entypo name="location-pin" size={20} color="#FD8C00" />
                    </View>

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Abuja bus terminal
                    </Text>
                  </View>
                </View>

                <View className="w-full flex flex-row">
                  <Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
                    10:15am
                  </Text>

                  <View className="w-full h-[54px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
                    <View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" />

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Ejuelegba
                    </Text>
                  </View>
                </View>

                <View className="w-full flex flex-row">
                  <Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
                    11:00am
                  </Text>

                  <View className="w-full h-[74px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
                    <View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" />

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Jiwon park
                    </Text>
                  </View>
                </View>

                <View className="w-full flex flex-row">
                  <Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
                    12:10am
                  </Text>

                  <View className="w-full border-l-[2px] border-l-transparent px-4 relative">
                    {/* <View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" /> */}

                    <Text className="font-gilroyMedium text-sm text-textColor">
                      Ogaminana
                    </Text>
                  </View>
                </View>
              </View>

              <View className="w-full border border-[#5554EDF5] rounded-[10px] bg-[#5554ED26] p-[10px]">
                <Text className="font-gilroyRegular text-sm text-textColor">
                  Time taken may vary according to the conditions related to the
                  road, weather and traffic.
                </Text>
              </View>
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 16,
  },
});

export const CustomHandle = () => {
  return (
    <View className="w-full flex items-center justify-center py-[14px]">
      <View className="w-[64px] h-[6px] bg-[#D9D9D9] rounded-[10px]" />
    </View>
  );
};

type Props = {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
};
export const SearchInput = ({ bottomSheetModalRef }: Props) => {
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
      className="w-full h-[44px] bg-white flex flex-row items-center gap-2 px-[14px] rounded-lg"
    >
      <Image
        source={require("../../assets/icons/search.svg")}
        className="w-6 h-6"
        contentFit="contain"
      />
      <TextInput
        className="flex-1 font-gilroyRegular text-sm text-textColor"
        placeholder="Where to ?"
        placeholderTextColor="#667085"
        onFocus={() => {
          bottomSheetModalRef?.current?.expand();
        }}
      />
    </View>
  );
};

// type Props = {

// };
export const Terminal = () => {
  return (
    <Pressable
      onPress={() => router.navigate("route")}
      className="w-full flex flex-row items-center gap-[10px]"
    >
      <Image
        source={require("../../assets/icons/timer.svg")}
        contentFit="contain"
        className="w-5 h-5"
      />

      <View className="flex-1">
        <Text className="text-base font-gilroyRegular text-textColor">
          Abuja station terminal
        </Text>
        <Text className="text-sm font-gilroyRegular text-subTextColor">
          123, Airport road, Lugbe
        </Text>
      </View>
    </Pressable>
  );
};
