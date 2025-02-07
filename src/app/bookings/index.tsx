import ActiveServices from "@/components/bookings/Active";
import Completed from "@/components/bookings/Completed";
import Upcoming from "@/components/bookings/upcoming";
import GroupTab from "@/components/groupTabs/group-tab";
import { ScreenLayout } from "@/components/screen-layout";
import { Text, View } from "@/ui";
import { SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

// Define the type for the tabs mapping
type Tabs = {
  [key: number]: React.ReactNode;
};

const MyServiceScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Define the tabs
  const tabs: Tabs = {
    0: <ActiveServices />,
    1: <Upcoming />,
    2: <Completed />,
  };

  return (
    <ScreenLayout>
      <View className="flex-1 bg-white pt-10">
        <View className=" bg-white border-b border-gray-300">
          <View className="flex-row items-center justify-between px-5 py-4">
            <TouchableOpacity onPress={() => router.back()}>
              <SimpleLineIcons name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <Text className="text-[16px] font-gilroySemibold">My Bookings</Text>
            <View className="w-6" />
          </View>

          <GroupTab
            tabs={["Active", "Upcoming", "Completed"]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>

        <View className="mt-0 flex-1 bg-[#F1F1F1]">{tabs[activeTab]}</View>
      </View>
    </ScreenLayout>
  );
};

export default MyServiceScreen;
