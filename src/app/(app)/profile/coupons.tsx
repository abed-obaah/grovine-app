import AntDesign from "@expo/vector-icons/AntDesign";

import {
  AllTab,
  ExpiredTab,
  TabButton,
  UsedTab,
} from "src/components/coupon/tabs";
import { ScreenLayout } from "src/components/screen-layout";
import { Text, View, WIDTH } from "src/ui";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { FlatList } from "react-native";

const TAB_DATA = [
  {
    id: 0,
    component: <AllTab />,
  },
  {
    id: 1,
    component: <ExpiredTab />,
  },
  {
    id: 2,
    component: <UsedTab />,
  },
];

export default function Screen() {
  const tabListRef = useRef<FlatList>(null);
  const [currentTabId, setCurrentTabId] = useState(0);

  const handleScrollToIndex = (index: number) => {
    setCurrentTabId(index);

    const offset = index > 0 ? index * WIDTH : 1;

    tabListRef.current?.scrollToOffset({ offset });
  };

  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <View className="pt-[20px]">
        <View
          style={styles.shadowBox}
          className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative shadow-lg bg-white"
        >
          <Pressable
            onPress={() => router.back()}
            className="absolute left-[16px]"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <Text className="text-base text-textColor font-gilroySemibold">
            My coupon
          </Text>

          <View className="w-6 h-6" />
        </View>
      </View>
      <View className="flex-1 bg-[#FAF9F6]">
        <View className="w-full flex flex-row h-[40px] bg-white border-b border-b-[#66708533]">
          <TabButton
            label="All"
            onPress={() => handleScrollToIndex(0)}
            active={currentTabId === 0}
          />

          <TabButton
            label="Expired"
            onPress={() => handleScrollToIndex(1)}
            active={currentTabId === 1}
          />

          <TabButton
            label="Used"
            onPress={() => handleScrollToIndex(2)}
            active={currentTabId === 2}
          />
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
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000000", // Black color
    shadowOffset: {
      width: 0, // X
      height: 4, // Y
    },
    shadowOpacity: 0.02, // 2% opacity
    shadowRadius: 5.3, // Blur

    // For Android
    elevation: 4, // Approximate elevation for the shadow effect
  },
});
