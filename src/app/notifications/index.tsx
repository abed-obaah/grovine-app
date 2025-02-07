import { TabButton } from "@/components/bookings/tab-button";
import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { InformationTab } from "@/components/trip/information-tab";
import { PassengersTab } from "@/components/trip/passengers-tab";
import { Button, Image, renderBackdrop, Text, View, WIDTH } from "@/ui";
import { useMemo, useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";

const TAB_DATA = [
  {
    id: 0,
    component: <InformationTab />,
  },
  {
    id: 1,
    component: <PassengersTab />,
  },
];

const cancelOptions = [
  "My plans have changed",
  "Personal emergency",
  "Vehicle issue",
  "Change in schedule",
  "Route no longer available",
  "Weather condition",
  "Unexpected delays",
  "Road closures",
];

export default function Screen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => [140], []);

  return (
    <>
      <ScreenLayout useStaticView backgroundColor="#FDFDFD">
        <View className="pt-[20px]">
          <Header
            title="Notification"
            showMenuButton
            onMenuButtonPress={() => bottomSheetModalRef?.current?.present()}
          />
        </View>
        <View className="flex-1 bg-[#FAF9F6]">
          {/* <Empty /> */}

          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingVertical: 20,
              gap: 24,
            }}
          >
            <View className="">
              <Text className="font-gilroySemibold text-base text-[#667085] px-4 mb-6">
                New
              </Text>

              <NotificationItem
                read
                time="1 mins ago"
                title="Payment received"
                subtitle="Your trip from City A to City B has started now. Track your trip now!"
                footnote="Departure: July 30, 2024, 09:00 AM"
              />
              <NotificationItem
                time="1 hour ago"
                title="Upcoming trip reminder!"
                subtitle="Your trip from City A to City B is approaching. Here are the route details:..."
                footnote="Departure: July 30, 2024, 09:00 AM"
              />
            </View>

            <View className="">
              <Text className="font-gilroySemibold text-base text-[#667085] px-4 mb-6">
                Yesterday
              </Text>

              <NotificationItem
                read
                time="yesterday"
                title="Trip Completed successfully!"
                subtitle="Your trip from City A to City B has been booked successfully. Download your ticket now!"
              />
              <NotificationItem
                read
                time="1 hour ago"
                title="Account Verification Complete"
                subtitle="Your account verification has been completed  successfully. Download your ticket now!"
                footnote="yesterday"
              />
            </View>
          </ScrollView>
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
            <Pressable className="flex-1 items-center justify-center">
              <Text className="font-gilroySemibold text-base text-textColor">
                Mark all as read
              </Text>
            </Pressable>
            <Pressable className="flex-1 items-center justify-center">
              <Text className="font-gilroySemibold text-base text-[#FF3B30]">
                Clear all
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

const Empty = () => {
  return (
    <View className="flex-1 flex items-center justify-center gap-[30px] p-4">
      <View className="w-[178px] aspect-[178/224]">
        <Image
          source={require("@/assets/images/empty-bookings.svg")}
          contentFit="contain"
          className="w-full h-full"
        />
      </View>

      <View className="max-w-[80%]">
        <Text className="text-2xl font-gilroyBold text-textColor text-center">
          No message notifications
        </Text>

        <Text className="text-sm font-gilroyRegular text-textColor text-center">
          Once you get any notification please check here
        </Text>
      </View>

      <View className="w-full">
        <Button label="Create trip" fullWidth />
      </View>
    </View>
  );
};

type Props = {
  title: string;
  subtitle: string;
  time: string;
  footnote?: string;
  read?: boolean;
};
const NotificationItem = ({ ...props }: Props) => {
  return (
    <View
      style={{ backgroundColor: props?.read ? "transparent" : "white" }}
      className="w-full px-4 py-6 flex-row gap-[10px]"
    >
      <View className="w-[50px] aspect-square rounded-full items-center justify-center bg-[#EB963F]">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-5 h-5"
          contentFit="contain"
        />
      </View>

      <View className="flex-1">
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-base font-gilroySemibold text-textColor">
            {props?.title}
          </Text>

          <Text className="text-xs font-gilroyRegular text-textColor">
            {props?.time}
          </Text>
        </View>

        <Text className="text-sm font-gilroyMedium text-textColor">
          {props?.subtitle}
        </Text>

        {props?.footnote && (
          <Text className="text-xs font-gilroyRegular text-subTextColor">
            {props?.footnote}
          </Text>
        )}
      </View>
    </View>
  );
};
