import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

import { Image, Pressable, Text, View, WIDTH } from "@/ui";
import { ScrollView } from "react-native";
import React from "react";

// type Props = {

// };
export const UpcomingTrips = () => {
	return (
		<View className="w-full flex gap-4">
			{/* <FlatList
        horizontal
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        data={new Array(5).fill(0)}
        renderItem={() => <TripCard />}
        pagingEnabled
        snapToInterval={WIDTH - 16}
        decelerationRate="fast"
      /> */}

			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
				decelerationRate="fast"
			>
				{new Array(1).fill(0).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<TripCard key={index} />
				))}

				{/* <View className="w-[52px] aspect-[52/159] flex items-center justify-center">
					<Pressable
						//   onPress={() => router.navigate("/trip/create")}
						className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-secondary"
					>
						<Feather name="plus" size={24} color="white" />
					</Pressable>
				</View> */}
			</ScrollView>
		</View>
	);
};

export const TripCard = () => {
	return (
	  <View
		style={{ width: WIDTH - 32 }}
		className="aspect-[353/133] bg-[#F29D35] rounded-lg px-0 py-2 flex justify-between relative"
	  >
		{/* Background Images */}
		<Image
		  source={require("@/assets/images/Ellipse-2.png")}
		  className="absolute top-0 left-0 w-[110px] h-[99px] opacity-100 rounded-lg"
		  contentFit="cover"
		/>
		<Image
		  source={require("@/assets/images/Ellipse-3.png")}
		  className="absolute bottom-0 right-0 w-[24%] h-[56px] opacity-100 rounded-lg"
		  contentFit="cover"
		/>
		
		{/* Trip Date */}
		
  
		{/* Trip Details */}
		<View className="w-full flex flex-row items-center gap-0">
		  {/* Trip Image */}
		  <Image
			source={require("@/assets/images/bag.png")}
			className="w-[42%] h-[110px] rounded-md"
			contentFit="contain"
		  />
  
		  {/* Trip Information */}
		  <View className="flex-1">
		  <View className="flex flex-col items-start justify-between mt-4">
				<Text className="font-gilroyBold text-3xl text-[#F6F5F3] font-[900] leading-none pb-2">
					50% DISCOUNT
				</Text>
				<Text className="font-gilroyBold text-md text-[#F6F5F3] font-[900] leading-none">
					ON ALL VEGETABLES YOU BUY FROM DECEMBER 1ST TO JANUARY 28TH
				</Text>
		</View>

  
			<View className="flex flex-row items-start justify-between my-5">
			  {/* <Text className="font-gilroyRegular text-md text-[#F6F5F3]">
			  ON ALL VEGETABLE YOU BUY FROM DECEMBER 1ST TO JANUARY 28TH
			  </Text> */}
			  <Text className="font-gilroyRegular text-sm text-[#F29D35] rounded-sm bg-[#F6F5F3] px-9 py-1">
			 	 Order Now
			  </Text>
			  {/* <Text className="font-gilroyRegular text-sm text-[#F29D35] rounded-sm bg-[#F6F5F3] px-9 py-1">
			 	 Order Now
			  </Text> */}
			 <Image
			 source={require("@/assets/images/tickets.png")}
			 className="w-12 h-10 rounded-md mr-5"
			contentFit="contain"
			 />
			</View>
		  </View>
		</View>
		
	  </View>
	);
  };
  
