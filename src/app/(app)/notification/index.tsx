import AntDesign from "@expo/vector-icons/AntDesign";
import { NotificationsList } from "src/components/route/notification-card";
import { ScreenLayout } from "src/components/screen-layout";
import { Pressable, ScrollView, Text, View,Image } from "src/ui";
import { router } from "expo-router";
import { TextInput } from "react-native";
import { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";



const people = [
	{ name: "Trip 5% off", username: "Expires in 30 days" },
	{ name: "Trip 5% off", username: "Expires in 15 days" },
	{ name: "Trip 5% off", username: "Expires in 2 days" },
  ];


export default function Screen() {
	 const [selected, setSelected] = useState<{
		name: string;
		username: string;
	  } | null>(null);
	  const [dropdownOpen, setDropdownOpen] = useState(false);
	
	  const handleSelect = (person: { name: string; username: string }) => {
		setSelected(person);
		setDropdownOpen(false); // Close dropdown after selection
	  };
	
	  const getStyleForExpiry = (expiry: string) => {
		switch (expiry) {
		  case "Expires in 30 days":
		  case "Expires in 15 days":
			return "inline-flex items-center rounded-full bg-[#FD8C001A] px-4 py-1 text-md font-gilroyMedium text-[#FD8C00] ring-1 ring-inset ring-yellow-600/20";
		  case "Expires in 2 days":
			return "inline-flex items-center rounded-full bg-[#B3261E1A] px-4 py-1 text-md font-gilroyMedium text-[#B3261E] ring-1 ring-inset ring-red-600/10";
		  default:
			return "";
		}
	  };

	return (
		<ScreenLayout useStaticView backgroundColor="#FAF9FF">
			<View className="w-full px-4 flex gap-4 bg-white">
				<View className="w-full flex flex-row items-center justify-between pt-[40px] pb-5 relative">
					{/* <Pressable onPress={() => router.back()} className="">
						<AntDesign name="left" size={24} color="black" />
					</Pressable> */}

					<View className="flex-1 flex items-center justify-center">
						<Text className="text-[#000000] font-gilroyLight text-lg">
							Transactions History
						</Text>
					</View>
					{/* <Image
							source={require("../../../assets/icons/elipsis.svg")}
							contentFit="contain"
							className="w-[51px] h-4"
						/> */}
				</View>
			</View>

			<ScrollView
				contentContainerStyle={{ flexGrow: 1, padding: 16, gap: 12 }}
				showsVerticalScrollIndicator={false}
			>
				 <View
							 
							  className="flex-1 h-[44px] bg-[#FFFFFF] justify-between flex flex-row items-center gap-2 px-[14px] rounded-lg"
							>
								  <TextInput
								className="flex-1 font-gilroyRegular text-sm text-textColor"
								placeholder="Search..."
								placeholderTextColor="#667085"
							  />

							  <Image
								source={require("../../../assets/icons/search.svg")}
								className="w-6 h-6"
								contentFit="contain"
							  />
							
							</View>

							<View className="">
      {/* Button to toggle dropdown */}
      <TouchableOpacity
        className="mt-2 w-full bg-[#FFFFFF] rounded-md py-3 px-4 flex-row justify-between items-center shadow-sm"
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <View className="flex-row">
          <Text className="text-[#221D7A] font-gilroyMedium truncate">
            {selected ? selected.name : "Jan"}
          </Text>
		  <MaterialIcons
          name={dropdownOpen ? "expand-less" : "expand-more"}
          size={24}
          color="#221D7A"
        />
        </View>
		<View className="flex-row gap-2">
				<Text>In:<Text className="text-[#221D7A] font-gilroyBold">N120,000.00 </Text></Text>
				<Text>Out:<Text className="text-[#221D7A] font-gilroyBold">N120,000.00 </Text></Text>
		</View>
       
      </TouchableOpacity>

      {/* Display dropdown options if open */}
      {dropdownOpen && (
        <View className="bg-white mt-1 rounded-md shadow-sm border border-gray-200 max-h-60">
          <FlatList
            data={people}
            keyExtractor={(item) => item.username}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex-row justify-between py-2 px-4 border-b border-gray-200"
                onPress={() => handleSelect(item)}
              >
                <View className="flex-row">
                  <Text className="text-gray-900 truncate">{item.name}</Text>
                </View>
                <Text className={`ml-2 ${getStyleForExpiry(item.username)}`}>
                  {item.username}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
				<NotificationsList />
			</ScrollView>
		</ScreenLayout>
	);
}
