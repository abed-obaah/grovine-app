import { Image, Pressable, ScrollView, Text, View, WIDTH } from "@/ui";
import { router } from "expo-router";
import { useBookingTypes } from "@/api/bookings";

// type Props = {

// };
export const UpcomingTab = () => {
	const bookingTypes = useBookingTypes('upcoming');
  	console.log("booking upcoming;",bookingTypes?.data);

	return (
		<View style={{ width: WIDTH }} className="flex-1">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				// bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<View className="flex-1 p-4 flex gap-6 bg-white">
					<Trip />

					<Trip />
				</View>
			</ScrollView>
		</View>
	);
};

const Trip = () => {
	return (
		<Pressable
			onPress={() => router.navigate("/trip/details")}
			className="w-full aspect-[343/140] bg-[#FAF9F6] rounded-[10px] flex justify-between px-[10px] py-[16px]"
		>
			<View className="flex flex-row items-center justify-between">
				<Text className="font-gilroyRegular text-xs text-textColor">
					12/09/2024
				</Text>

				<Text className="font-gilroyRegular text-xs text-secondary">
					12/09/2024
				</Text>
			</View>

			<View className="flex gap-1">
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

				<View className="flex flex-row items-center justify-between">
					<Text className="font-gilroyRegular text-xs text-textColor">
						10:00AM
					</Text>

					<Text className="font-gilroyRegular text-xs text-textColor">
						12:50PM
					</Text>
				</View>
			</View>

			<Text className="font-gilroySemibold text-base text-textColor">
				NGN12,000
			</Text>
		</Pressable>
	);
};
