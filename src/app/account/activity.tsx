import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

import { ScreenLayout } from "@/components/screen-layout";
import { Image, Pressable, renderBackdrop, Text, View, WIDTH } from "@/ui";
import { TripsTab } from "@/components/account/trips-tab";
import { CancelsTab } from "@/components/account/cancels-tab";
import { useMemo, useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

const TAB_DATA = [
  {
    id: 0,
    component: <TripsTab />,
  },
  {
    id: 1,
    component: <CancelsTab />,
  },
];

export default function Screen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [226], []);

  const [period, setPeriod] = useState("weekly");

  const tabListRef = useRef<FlatList>(null);
  const [currentTabId, setCurrentTabId] = useState(0);

  const handleScrollToIndex = (index: number) => {
    setCurrentTabId(index);

    const offset = index > 0 ? index * WIDTH : 1;

    tabListRef.current?.scrollToOffset({ offset });
  };

  return (
    <>
      <ScreenLayout useStaticView backgroundColor="#FDFDFD">
        <View className="pt-5">
          <View className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative bg-white">
            <Pressable
              onPress={() => router.back()}
              className="absolute left-[16px]"
            >
              <AntDesign name="left" size={24} color="black" />
            </Pressable>

            <Text className="text-base text-textColor font-gilroySemibold">
              Activity
            </Text>

            {currentTabId === 0 && (
              <Pressable
                onPress={() => bottomSheetModalRef?.current?.present()}
                className="absolute right-[16px]"
              >
                <Image
                  source={require("@/assets/icons/sort.svg")}
                  className="w-6 h-6"
                  contentFit="contain"
                />
              </Pressable>
            )}
          </View>
        </View>

        <FlatList
          ref={tabListRef}
          data={TAB_DATA}
          renderItem={({ item }) => item.component}
          horizontal
          pagingEnabled
          bounces={false}
          scrollEnabled={false}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
        />

        <View className="w-full h-[67px] flex-row rounded-t-[10px] overflow-hidden">
          <Pressable
            onPress={() => handleScrollToIndex(0)}
            className={`flex-1 items-center justify-center ${
              currentTabId === 0 ? "bg-secondary" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-base ${
                currentTabId === 0 ? "text-white" : "text-textColor"
              } font-gilroySemibold`}
            >
              Trips
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleScrollToIndex(1)}
            className={`flex-1 items-center justify-center ${
              currentTabId === 1 ? "bg-secondary" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-base ${
                currentTabId === 1 ? "text-white" : "text-textColor"
              } font-gilroySemibold`}
            >
              Cancels
            </Text>
          </Pressable>
        </View>
      </ScreenLayout>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={snapPoints}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        handleComponent={() => <View className="absolute w-0 h-0" />}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View className="flex-1 justify-between">
            <Pressable
              onPress={() => setPeriod("weekly")}
              className="w-full h-[76px] border-b border-b-[#66708533] items-center justify-center"
            >
              <Text
                className={`font-gilroySemibold text-base ${
                  period === "weekly" ? "text-secondary" : "text-textColor"
                }`}
              >
                Weekly
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setPeriod("monthly")}
              className="w-full h-[76px] border-b border-b-[#66708533] items-center justify-center"
            >
              <Text
                className={`font-gilroySemibold text-base ${
                  period === "monthly" ? "text-secondary" : "text-textColor"
                }`}
              >
                Monthly
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setPeriod("yearly")}
              className="w-full h-[76px] border-b border-b-[#66708533] items-center justify-center"
            >
              <Text
                className={`font-gilroySemibold text-base ${
                  period === "yearly" ? "text-secondary" : "text-textColor"
                }`}
              >
                Yearly
              </Text>
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // paddingHorizontal: 16,
  },
});
