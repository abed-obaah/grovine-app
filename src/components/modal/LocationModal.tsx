import { Modal, View, Text, TouchableOpacity } from 'react-native';


type LocationModalProps = {
  visible: boolean;
  onRequestClose: () => void;
  onAllow: () => void;
};

const LocationModal: React.FC<LocationModalProps> = ({
  visible,
  onRequestClose,
  onAllow,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onRequestClose}>
      <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
        <View className="bg-white rounded-lg w-11/12 p-6 items-center">
          <Text className="text-xl font-bold text-black mb-4">Allow your location</Text>
          <Text className="text-gray-500 text-center mb-6 font-gilroyBold">
            We will need your location to give you a better experience.
          </Text>

          <TouchableOpacity
            className="bg-[#5554ED] w-full py-3 rounded-lg justify-center items-center"
            onPress={onAllow}
          >
            <Text className="text-white font-gilroyRegular">Allow location access</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
