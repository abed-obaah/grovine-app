import { Input, Pressable, Text, View } from "src/ui";
import {FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from "react-native";

const ReferralLink = () => {
  const referralLink = 'Trubooker.com/krvw-224';

  return (
    <View className="p-4">
      <Text className="font-gilroySemibold text-black pl-2 pb-4">Referral link</Text>
      <View className="flex-row items-center justify-between rounded-lg p-2 border border-gray-300">
      <TextInput
          style={{ flex: 1, color: '#000' }}
          value={referralLink}
          editable={false}
        />
        <Pressable onPress={() => console.log('Copied')}>
          <FontAwesome5 name="copy" size={20}  color="#5554ED" />
        </Pressable>
      </View>
    </View>
  );
};

export default ReferralLink;
