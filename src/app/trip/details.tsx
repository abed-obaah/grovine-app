import { TabButton } from "@/components/bookings/tab-button";
import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { InformationTab } from "@/components/trip/information-tab";
import { PassengersTab } from "@/components/trip/passengers-tab";
import { Button, renderBackdrop, Text, View, WIDTH } from "@/ui";
import { useMemo, useRef, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { CustomHandle } from "./passengers";
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
  const tabListRef = useRef<FlatList>(null);
  const [currentTabId, setCurrentTabId] = useState(0);

  const [showMenu, setShowMenu] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["80%"], []);

  const [selectedOption, setSelectedOption] = useState("");

  const handleScrollToIndex = (index: number) => {
    setCurrentTabId(index);

    const offset = index > 0 ? index * WIDTH : 1;

    tabListRef.current?.scrollToOffset({ offset });
  };

  return (
    <>
      <ScreenLayout useStaticView backgroundColor="#FDFDFD">
        <View className="pt-[20px]">
          <Header
            title="Trip details"
            showMenuButton
            onMenuButtonPress={() => setShowMenu((prev) => !prev)}
          />
        </View>
        <View className="flex-1">
          <View className="w-full flex flex-row h-[56px] bg-white border-b border-b-[#66708533]">
            <TabButton
              label="Information"
              onPress={() => handleScrollToIndex(0)}
              active={currentTabId === 0}
            />

            <TabButton
              label="Passengers info"
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

      {/* menu options modal */}
      <Modal transparent visible={showMenu}>
        <View className="flex-1 bg-black/30 p-4 relative">
          <Pressable className="flex-1" onPress={() => setShowMenu(false)} />

          <View className="w-[172px] py-[6px] px-[10px] bg-white rounded-lg absolute right-[16px] top-[50px]">
            <Pressable className="w-full flex flex-row items-center gap-[10px] h-[42px] border-b border-b-[#66708526]">
              <FontAwesome6 name="edit" size={20} color="#667085" />

              <Text className="font-gilroyMedium text-sm text-subTextColor">
                Edit trip
              </Text>
            </Pressable>

            <Pressable className="w-full flex flex-row items-center gap-[10px] h-[42px] border-b border-b-[#66708526]">
              <MaterialIcons name="lock-outline" size={20} color="#667085" />

              <Text className="font-gilroyMedium text-sm text-subTextColor">
                Close booking
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setShowMenu(false);
                bottomSheetModalRef?.current?.present();
              }}
              className="w-full flex flex-row items-center gap-[10px] h-[42px] border-b border-b-transparent"
            >
              <AntDesign name="closecircleo" size={20} color="#667085" />

              <Text className="font-gilroyMedium text-sm text-subTextColor">
                Cancel trip
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* cancel trip modal */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={snapPoints}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        handleComponent={CustomHandle}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View className="flex-1 justify-between">
            <View className="w-full flex px-4 flex-row justify-between border-b border-b-[#66708526] py-[14px]">
              <Pressable
                onPress={() => {
                  bottomSheetModalRef?.current?.close();
                }}
                className="w-6 h-6 flex items-center justify-center"
              >
                <AntDesign name="close" size={24} color="black" />
              </Pressable>

              <Text className="font-gilroySemibold text-base text-textColor">
                Cancel trip
              </Text>

              <View className="w-6 h-6" />
            </View>

            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View className="flex-1 gap-5 px-4 py-5">
                <View className="w-full flex flex-row gap-1 items-center rounded-[5px] bg-[#FD8C0026] border border-[#FD8C00] py-2 px-[10px]">
                  <Feather name="info" size={20} color="#FD8C00" />

                  <Text className="font-gilroyMedium text-xs text-textColor">
                    Cancelling a trip after a passenger has booked will result
                    in an additional charge from your account.
                  </Text>
                </View>

                <Text className="font-gilroySemibold text-base text-subTextColor">
                  Please select a reason for canceling this trip
                </Text>

                <View>
                  {cancelOptions?.map((item, index) => (
                    <CancelOption
                      key={index}
                      label={item}
                      onPress={() => setSelectedOption(item)}
                      isActive={selectedOption === item}
                    />
                  ))}
                </View>

                <Button
                  label="Continue"
                  style={{ marginTop: 20 }}
                  onPress={() => {
                    bottomSheetModalRef?.current?.close();
                    setShowSuccessModal(true);
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </BottomSheetView>
      </BottomSheetModal>

      {/* cancel trip success modal */}
      <Modal transparent visible={showSuccessModal}>
        <View className="flex-1 bg-black/50 items-center justify-center">
          <Pressable
            onPress={() => setShowSuccessModal(false)}
            className="absolute top-0 left-0 bottom-0 right-0"
          />

          <View className="w-[346px] aspect-[346/356] bg-white rounded-[20px] gap-6 items-center justify-center">
            <View className="w-[127px] aspect-square rounded-full flex items-center justify-center bg-[#FD8C0080]/5">
              <View className="w-[74px] aspect-square rounded-full flex items-center justify-center bg-secondary">
                <AntDesign name="close" size={37} color="white" />
              </View>
            </View>

            <Text className="font-gilroyBold text-2xl text-textColor text-center">
              Trip Cancelled!
            </Text>

            <Text className="font-gilroyRegular text-base text-subTextColor text-center max-w-[60%]">
              Your trip has been cancelled successfully.
            </Text>

            <View className="w-full px-[35px]">
              <Button
                label="Got it"
                onPress={() => {
                  // setShowSuccessModal(false);
                  router.navigate("/(app)/bookings");
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
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

type Props = {
  label: string;
  onPress?: () => void;
  isActive?: boolean;
};
const CancelOption = ({ label, onPress, isActive }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`w-full ${
        isActive ? "bg-[#FD8C001A]" : "bg-transparent"
      } px-[10px] py-[15px] border rounded-[8px] ${
        isActive ? "border-[#FD8C00]" : "border-transparent"
      } ${isActive ? "border-b-[#FD8C00]" : "border-b-[#6670854D]"}`}
    >
      <Text className="font-gilroyMedium text-sm text-black">{label}</Text>
    </Pressable>
  );
};
