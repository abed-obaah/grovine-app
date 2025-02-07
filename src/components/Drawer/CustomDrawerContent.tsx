// src/components/CustomDrawerContent.tsx

import { Image, Pressable, Text, View } from 'src/ui'; // Ensure this path is correct
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Link } from "expo-router";
import ReferralLink from 'src/components/referralLink/index';

 import { MaterialCommunityIcons,Ionicons,SimpleLineIcons } from "@expo/vector-icons";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
      {/* Company Logo */}
      <View className="p-4">
        <Image
          source={require('../assets/images/logo.svg')}
          style={{ width: 120, height: 140, resizeMode: 'contain' }} // Adjust size and mode
        />
      </View>
      

       {/* Menu Section */}
       <View className="p-4">
        <Text className="text-lg font-gilroySemibold text-[#667085]">Menu</Text>
      </View>


      {/* Drawer Items */}
      <View className="flex-1">
      <View style={{ marginBottom: 16 }}>
              <DrawerItem
                label="My Bookings"
                icon={({ color }) => (
                  <MaterialCommunityIcons
                    name="ticket-confirmation-outline"
                    size={24}
                    color={color}
                  />
                )}
                onPress={() => props.navigation.navigate('bookings')}
                labelStyle={{ fontSize: 16, fontWeight: '500', marginLeft: -20 }}
              />
            </View>

            <View style={{ marginBottom: 16 }}>

        <DrawerItem
          label="Notification"
          icon={({ color }) => <MaterialCommunityIcons name="bell-outline" size={24} color={color} />}
          onPress={() => props.navigation.navigate('style')}
          labelStyle={{ fontSize: 16, fontWeight: '500' ,marginLeft:-20}}
        />

        </View>

        <View style={{ marginBottom: 16 }}>
        <DrawerItem
          label="Help & Support"
          icon={({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color}/>}
          onPress={() => props.navigation.navigate('settings')}
          labelStyle={{ fontSize: 16, fontWeight: '500' ,marginLeft:-20}}
        />
        </View>


        <View style={{ marginBottom: 10 }}>
        <DrawerItem
          label="Log out"
          icon={({ color }) => <SimpleLineIcons
          name="login"
          size={24}
          color={color}
          style={{ transform: [{ scaleX: -1 }] }}
        />}
          onPress={() => props.navigation.navigate('settings')}
          labelStyle={{ fontSize: 16, fontWeight: '500' ,marginLeft:-20}}
        />
        </View>
      </View>

      <ReferralLink/>
      
      {/* Other content like logout button */}
      <View className="p-4">
      <Link href="/feed/add-post" asChild>
        <Pressable className="rounded p-0 flex-row items-center">
          <Image
            source={require('../assets/images/profileImage.svg')}
            style={{ width: 60, height: 80, resizeMode: 'contain', marginRight: 12 }} // Adjust size and margin
          />
          <View>
            <Text className="font-gilroySemibold text-xl">Esther Adebisi</Text>
            <Text className="font-gilroyMedium">Edit your profile</Text>
          </View>
        </Pressable>
      </Link>
    </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
