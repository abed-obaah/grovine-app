import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

import { Image, Pressable, Text, View, WIDTH } from "../../ui";
import { ScrollView } from "react-native";

// type Props = {

// };
export const Card = () => {
	return (
		// <View className="w-full flex gap-4">
		// 	<ScrollView
		// 		horizontal
		// 		contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
		// 		decelerationRate="fast"
		// 	>
		// 		{new Array(1).fill(0).map((_, index) => (
		// 			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		// 			<TripCard key={index} />
		// 		))}

		// 		{/* <View className="w-[52px] aspect-[52/159] flex items-center justify-center">
		// 			<Pressable
		// 				//   onPress={() => router.navigate("/trip/create")}
		// 				className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-secondary"
		// 			>
		// 				<Feather name="plus" size={24} color="white" />
		// 			</Pressable>
		// 		</View> */}
		// 	</ScrollView>
		// </View>
        <View className="w-full flex gap-4 px-4">
                {new Array(1).fill(0).map((_, index) => (
                    <TripCard key={index} />
                ))}
            </View>
	);
};

export const TripCard = () => {
	return (
		<View
			style={{ width: WIDTH - 32 }}
			className="aspect-[353/159] bg-[#413AC3] rounded-[10px] px-4 py-6 flex justify-between"
		>
            <View className="w-full flex flex-row items-center justify-between">
            <Image
                    className="w-[60px] h-[31px]"
                    contentFit="contain"
                    source={require("../../assets/images/oniix.png")}
                />
                    <Image
                                        className="w-[60px] h-[21px]"
                                        contentFit="contain"
                                        source={require("../../assets/images/card.png")}
                                    />
            </View>
			

			{/* <View className="w-full flex">
				<View className="w-full flex flex-row items-center justify-between">
					<Text className="font-gilroyMedium text-sm text-textColor">
						Wuse bus station
					</Text>

					<Image
						source={require("@/assets/icons/arrow.svg")}
						className="w-[50px] h-[16px]"
						contentFit="contain"
					/>

					<Text className="font-gilroyMedium text-sm text-textColor text-right">
						Kogi bus station
					</Text>
				</View>

				<View className="w-full flex flex-row items-center justify-between">
					<Text className="font-gilroyRegular text-xs text-textColor">
						10:00AM
					</Text>

					<Text className="font-gilroyRegular text-xs text-textColor text-right">
						12:50PM
					</Text>
				</View>
			</View> */}

			<View className="w-full flex flex-row items-center justify-between">
                <View>
                    <Text className="font-gilroySemibold text-base text-[#FFFFFF]">
                    Okokon Ewomazino Gift
                    </Text>
                <Text className="font-gilroySemibold text-base text-[#FFFFFF]">
                 53*******68
				</Text>
                </View>
			</View>
		</View>
	);
};
