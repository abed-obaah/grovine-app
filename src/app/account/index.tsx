import { PersonalTab } from "@/components/account/personal-tab";
import { SecurityTab } from "@/components/account/security-tab";
import { TabButton } from "@/components/bookings/tab-button";
import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { View, WIDTH } from "@/ui";
import { useRef, useState } from "react";
import { FlatList } from "react-native";

const TAB_DATA = [
  {
    id: 0,
    component: <PersonalTab />,
  },
  {
    id: 1,
    component: <SecurityTab />,
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
        <Header title="Account" />
      </View>
      <View className="flex-1">
        <View className="w-full flex flex-row h-[56px] bg-white border-b border-b-[#66708533]">
          <TabButton
            label="Personal info"
            onPress={() => handleScrollToIndex(0)}
            active={currentTabId === 0}
          />

          <TabButton
            label="Security"
            onPress={() => handleScrollToIndex(1)}
            active={currentTabId === 1}
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
