// LocationPermissionModal.js
import { Modal } from "react-native";
import { Button, Text, View, Image } from "src/ui";
import { useRouter } from "expo-router"; // Import useRouter from expo-router

export const LocationPermissionModal = ({ showModal, setShowModal }) => {
  const router = useRouter();

  const handlePress = () => {
    setShowModal(false);
    router.push("route/others");
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={showModal}
      presentationStyle="overFullScreen"
      className="flex-1"
    >
      <View className="flex-1 bg-black/30 flex items-center justify-center p-4">
        {/* Adjusted the height directly */}
        <View className="w-full aspect-square bg-white rounded-[20px] flex items-center justify-center gap-6 px-[32px]">
          <View className="w-full flex items-center gap-[20px]">
            <Image
              source={require("../../assets/icons/cancel.svg")}
              contentFit="contain"
              className="w-[127px] h-[127px]"
            />

            <View className="gap-[10px]">
              <Text className="font-gilroyBold text-2xl text-textColor text-center">
                Booking Cancelled!
              </Text>

              <Text className="font-gilroyRegular text-sm text-subTextColor text-center">
                Your booking with Id: ABC-123DHCX has been cancelled
                successfully.
              </Text>
            </View>
          </View>

          <View className="w-full">
            <Button label="Got it" fullWidth onPress={handlePress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
