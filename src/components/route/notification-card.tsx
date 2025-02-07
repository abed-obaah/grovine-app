import { Button, View, Text, Image } from 'src/ui'; // Ensure Image is imported from the correct source
import { router } from 'expo-router';
import type React from 'react';
import { FlatList } from 'react-native';

// SectionHeader Component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <View className="py-2">
    <Text className="text-lg text-[667085] font-gilroyBold">{title}</Text>
  </View>
);

// NotificationItem Component
const NotificationItem: React.FC<{ 
  item: { 
    id: string; 
    message: string; 
    time: string; 
    isNew: boolean; 
    description: string;  
    departureTime: string; 
  }, 
  showButton: boolean, 
  isFirst: boolean,
  isLast: boolean // Add isLast prop to control the background
}> = ({ item, showButton, isFirst, isLast }) => (
  <View className={`p-4 mb-4 rounded-lg flex flex-row items-start ${isFirst || isLast ? 'bg-transparent' : 'bg-white'}`}>
    {/* Image with Gray Background */}
    <Image 
      source={require("../../assets/icons/logo1.svg")} 
      style={{ height: 48, width: 48, borderRadius: 14, marginRight: 12 }} 
    />
    
    <View style={{ flex: 1 }}>
      <View className="flex flex-row justify-between items-center">
        <Text className="font-gilroyBold">{item.message}</Text>
        <View>
            <Text className="">{item.time}</Text>
            {/* <Text className="">{item.time}</Text> */}
          </View>
      </View>
      <View className='flex-row justify-between items-center'>
        <Text className="text-gray-600">{item.departureTime}</Text>
        <Text
          className={`font-gilroyBold text-sm ${
            item.status === "Successful" ? "text-[#1B7829]" : "text-[#A02724]"
          }`}
        >
          {item.status}
        </Text>

      </View>
      
    </View>
  </View>
);

// Notifications List Component
const NotificationsList: React.FC = () => {
  const notifications = [
    { 
      id: '1', 
      message: 'Transfer to Abednego Obaah!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
    { 
      id: '2', 
      message: 'Recieved from Abednego Obaah!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Failed'
    },
    { 
      id: '3', 
      message: 'Payment to  GoTV!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
    { 
      id: '4', 
      message: 'Payment to Sporty Bet!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
    { 
      id: '5', 
      message: 'Airtime Purchase!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
    { 
      id: '6', 
      message: 'Data Purchase!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
    { 
      id: '7', 
      message: 'Data Purchase!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
    { 
      id: '8', 
      message: 'Data Purchase!', 
      time: '-N12,000', 
      isNew: true, 
      departureTime: '25th Jan, 23:17:44' ,
      status:'Successful'
    },
  ];

  const newNotifications = notifications.filter((n) => n.isNew);
  const yesterdayNotifications = notifications.filter((n) => !n.isNew);

  return (
    <View className='w-full flex rounded-[10px]'>
      {/* Render New Notifications Section */}
      {newNotifications.length > 0 && (
        <>
          <SectionHeader title="New" />
          <FlatList
            data={newNotifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <NotificationItem 
                item={item} 
                isFirst={index === 0}
                isLast={false} // isLast is false for new notifications
              />
            )}
          />
        </>
      )}

      {/* Render Yesterday's Notifications Section */}
      {/* {yesterdayNotifications.length > 0 && (
        <>
          <SectionHeader title="Yesterday" />
          <FlatList
            data={yesterdayNotifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <NotificationItem 
                item={item} 
                showButton={index === 0 || index === 2}
                isFirst={index === 0}
                isLast={index === yesterdayNotifications.length - 1} // Check if it's the last item
              />
            )}
          />
        </>
      )} */}
    </View>
  );
};

export { NotificationsList };
