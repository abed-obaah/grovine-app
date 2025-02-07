import {
  Button,
  HEIGHT,
  Image,
  Input,
  Pressable,
  renderBackdrop,
  ScrollView,
  Text,
  View,
  WIDTH,
} from "@/ui";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useCameraPermissions, CameraView } from "expo-camera";
import { router } from "expo-router";
import { Modal, StyleSheet, TextInput } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { CustomHandle } from "@/app/trip/passengers";

// type Props = {

// };
export const PassengersTab = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const cameraSheetModalRef = useRef<BottomSheetModal>(null);
  const bookingIdSheetModalRef = useRef<BottomSheetModal>(null);
  const successSheetModalRef = useRef<BottomSheetModal>(null);

  const [cameraMounted, setCameraMounted] = useState(false);

  // Snap points: 30% for the initial position, 80% for expanded position
  const snapPoints = useMemo(() => [254], []);
  const cameraSnapPoints = useMemo(() => ["100%"], []);
  const bookingIdsnapPoints = useMemo(() => [396], []);

  const handleOnScan = () => {
    if (isPermissionGranted) {
      cameraSheetModalRef?.current?.present();
      bottomSheetModalRef?.current?.close();
      setCameraMounted(true);
    } else {
      requestPermission().then((res) => {
        cameraSheetModalRef?.current?.present();
        bottomSheetModalRef?.current?.close();
        setCameraMounted(true);
      });
    }
  };

  return (
    <>
      <View style={{ width: WIDTH }} className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          // bounces={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <View className="flex-1 p-4 flex gap-6 bg-white">
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
                source={require("@/assets/icons/search.svg")}
                className="w-6 h-6"
                contentFit="contain"
              />
              <TextInput
                className="flex-1 font-gilroyRegular text-sm text-textColor"
                placeholder="search..."
                placeholderTextColor="#667085"
              />
            </View>

            <PassengerCard label="Tobi Samson & 3 others" confirmed />
            <PassengerCard label="Esther Alabi James" />
            <PassengerCard label="Esther Alabi James" />
            <PassengerCard label="Esther Alabi James" />
            <PassengerCard label="Esther Alabi James" />
          </View>
        </ScrollView>

        <View
          style={styles.shadowBox}
          className="w-full bg-[#F7F7F7] flex justify-center px-[28px] rounded-tl-[15px] rounded-tr-[15px]"
        >
          <Button
            label="Validate ticket"
            fullWidth
            onPress={() => {
              bottomSheetModalRef?.current?.present();
            }}
          />
        </View>
      </View>

      {/* option select modal */}
      <BottomSheetModalProvider>
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
                  Validate ticket
                </Text>

                <View className="w-6 h-6" />
              </View>

              <View className="flex-1 items-center justify-center gap-4 px-4">
                <Pressable
                  onPress={handleOnScan}
                  className="w-full h-[45px] flex flex-row items-center justify-center gap-2 rounded-lg bg-[#FD8C0026]"
                >
                  <Feather name="camera" size={24} color="#FD8C00" />

                  <Text className="font-gilroySemibold text-base text-secondary">
                    Scan with QR code
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    bottomSheetModalRef?.current?.close();
                    bookingIdSheetModalRef?.current?.present();
                  }}
                  className="w-full h-[45px] flex flex-row items-center justify-center gap-2 rounded-lg bg-[#FD8C0026]"
                >
                  <Text className="font-gilroySemibold text-base text-secondary">
                    Validate with booking Id
                  </Text>
                </Pressable>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      {/* qr code modal */}
      <BottomSheetModal
        ref={cameraSheetModalRef}
        index={0} // Default to 30% when modal is opened
        snapPoints={cameraSnapPoints}
        enableDismissOnClose={true}
        enablePanDownToClose={true}
        handleComponent={() => <View className="absolute w-0 h-0" />}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <View className="flex-1">
            <CameraView
              style={StyleSheet.absoluteFillObject}
              facing="back"
              onBarcodeScanned={({ data }) => {
                console.log(data);
                cameraSheetModalRef?.current?.close();
                setCameraMounted(false);
                setShowSuccessModal(true);
              }}
              active={cameraMounted}
            />

            <Pressable
              onPress={() => {
                setCameraMounted(false);
                cameraSheetModalRef?.current?.close();
              }}
              className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full absolute top-[56px] right-[24px]"
            >
              <AntDesign name="close" size={24} color="white" />
            </Pressable>
          </View>
        </BottomSheetView>
      </BottomSheetModal>

      {/* booking id modal */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bookingIdSheetModalRef}
          index={0} // Default to 30% when modal is opened
          snapPoints={bookingIdsnapPoints}
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
                    bookingIdSheetModalRef?.current?.close();
                    bottomSheetModalRef?.current?.present();
                  }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <AntDesign name="left" size={24} color="black" />
                </Pressable>

                <Text className="font-gilroySemibold text-base text-textColor">
                  Validate with booking id
                </Text>

                <View className="w-6 h-6" />
              </View>

              <View className="flex-1 flex gap-9 px-4 pt-[28px]">
                <Text className="font-gilroyMedium text-sm text-subTextColor">
                  Enter your passenger’s booking id for validation.
                </Text>

                <Input placeholder="#XYZ-1230Z" label="Booking Id" />

                <Button
                  label="Confirm"
                  onPress={() => {
                    bookingIdSheetModalRef?.current?.close();
                    setShowSuccessModal(true);
                  }}
                />
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

      {/* success modal */}
      <Modal transparent visible={showSuccessModal}>
        <View className="flex-1 bg-black/50 items-center justify-center">
          <Pressable
            onPress={() => setShowSuccessModal(false)}
            className="absolute top-0 left-0 bottom-0 right-0"
          />

          <View className="w-[346px] aspect-[346/356] bg-white rounded-[20px] gap-6 items-center justify-center">
            <View className="w-[127px] aspect-square rounded-full flex items-center justify-center bg-[#FD8C0080]/5">
              <View className="w-[74px] aspect-square rounded-full flex items-center justify-center bg-secondary">
                <FontAwesome5 name="check" size={37} color="white" />
              </View>
            </View>

            <Text className="font-gilroyBold text-2xl text-textColor text-center">
              Validation Successful!
            </Text>

            <Text className="font-gilroyRegular text-base text-subTextColor text-center max-w-[60%]">
              Your passenger validation is complete. You’re all set to go!
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

type Props = {
  label: string;
  confirmed?: boolean;
};
export const PassengerCard = ({ label, confirmed }: Props) => {
  return (
    <Pressable
      onPress={() => router.navigate("/trip/passenger-detail")}
      className="w-full px-[10px] py-4 rounded-[10px] bg-[#FAF9F6] flex gap-5"
    >
      <Text className="text-base font-gilroySemibold text-textColor">
        {label}
      </Text>

      <View className="w-full flex flex-row items-center justify-between">
        <Text className="font-gilroyMedium text-base text-textColor">
          Wuse bus station
        </Text>

        <Image
          source={require("@/assets/icons/arrow.svg")}
          className="w-[50px] h-[16px]"
          contentFit="contain"
        />

        <Text className="font-gilroyMedium text-base text-textColor text-right">
          Kogi bus station
        </Text>
      </View>

      <View className="w-full flex flex-row items-center justify-between">
        <Text className="text-base font-gilroySemibold text-textColor">
          NGN12,000
        </Text>

        {confirmed ? (
          <Text className="text-xs font-gilroyMedium text-[#FD8C00]">
            Confirmed
          </Text>
        ) : (
          <Text className="text-xs font-gilroyMedium text-[#FC1A1A]">
            Pending
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shadowBox: {
    height: HEIGHT * 0.1162,
    // iOS shadow
    shadowColor: "#0C0C0D",
    shadowOffset: {
      width: 0, // X offset
      height: -2, // Y offset
    },
    shadowOpacity: 0.05, // 5% opacity
    shadowRadius: 4, // Same as Blur
    // Android shadow
    elevation: 4, // Elevation is typically equal to the shadow radius on iOS
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // paddingHorizontal: 16,
  },
});
