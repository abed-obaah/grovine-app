import Entypo from "@expo/vector-icons/Entypo";
import {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";

import { Image, Pressable, ScrollView, Text, View } from "@/ui";
import { router } from "expo-router";

export const LiveModal = () => {
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	// Snap points: 30% for the initial position, 80% for expanded position
	const snapPoints = useMemo(() => ["30%", "80%"], []);

	useEffect(() => {
		bottomSheetModalRef.current?.present();
	}, []);

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={bottomSheetModalRef}
				index={0} // Default to 30% when modal is opened
				snapPoints={snapPoints}
				enableDismissOnClose={false}
				enablePanDownToClose={false}
				handleComponent={CustomHandle}
			>
				<BottomSheetView style={styles.contentContainer}>
					<ScrollView
						contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
						bounces={false}
						showsVerticalScrollIndicator={false}
						automaticallyAdjustKeyboardInsets
					>
						<View className="flex-1 flex gap-5">
							<View className="flex gap-1 border-b border-b-[#66708526] pb-4">
								<View className="w-full flex flex-row items-center justify-between">
									<Text className="font-gilroyMedium text-base text-textColor">
										Wuse, Abuja
									</Text>

									<Image
										source={require("@/assets/icons/arrow.svg")}
										className="w-[50px] h-[16px]"
										contentFit="contain"
									/>

									<Text className="font-gilroyMedium text-base text-textColor text-right">
										Ogaminana, Kogi state
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

							<View className="w-full flex flex-row items-center flex-wrap gap-5">
								<View className="flex flex-row gap-[5px] items-center">
									<Image
										source={require("@/assets/icons/wagon.png")}
										className="w-5 h-5"
										contentFit="contain"
									/>

									<Text className="font-gilroyMedium text-sm text-subTextColor">
										Vehicle XYZ
									</Text>
								</View>

								<View className="flex flex-row gap-[5px] items-center">
									<Image
										source={require("@/assets/icons/passenger.png")}
										className="w-5 h-5"
										contentFit="contain"
									/>

									<Text className="font-gilroyMedium text-sm text-subTextColor">
										12 passengers
									</Text>
								</View>

								<View className="flex flex-row gap-[5px] items-center">
									<Image
										source={require("@/assets/icons/time.png")}
										className="w-5 h-5"
										contentFit="contain"
									/>

									<Text className="font-gilroyMedium text-sm text-subTextColor">
										02:45:03
									</Text>
								</View>
							</View>

							<View className="w-full flex gap-5">
								<View className="w-full flex flex-row items-center justify-between">
									<Text className="font-gilroySemibold text-base text-textColor">
										Bus stops
									</Text>

									<Pressable
										onPress={() => router.navigate("/trip/passengers")}
									>
										<Text className="font-gilroyMedium text-sm text-secondary">
											View passengers info
										</Text>
									</Pressable>
								</View>

								<View className="w-full flex">
									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											10:00am
										</Text>

										<View className="w-full h-[76px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
											<View className="w-5 h-5 bg-white absolute left-[-11px] top-0 flex items-center justify-center">
												<Entypo name="location-pin" size={20} color="#FD8C00" />
											</View>

											<Text className="font-gilroyMedium text-sm text-textColor">
												Abuja bus terminal
											</Text>
										</View>
									</View>

									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											10:15am
										</Text>

										<View className="w-full h-[54px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
											<View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" />

											<Text className="font-gilroyMedium text-sm text-textColor">
												Ejuelegba
											</Text>
										</View>
									</View>

									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											11:00am
										</Text>

										<View className="w-full h-[74px] border-l-[2px] border-l-[#FD8C00] px-4 relative">
											<View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" />

											<Text className="font-gilroyMedium text-sm text-textColor">
												Jiwon park
											</Text>
										</View>
									</View>

									<View className="w-full flex flex-row">
										<Text className="font-gilroyMedium text-sm text-subTextColor w-[20%]">
											12:10am
										</Text>

										<View className="w-full border-l-[2px] border-l-transparent px-4 relative">
											{/* <View className="w-3 h-3 rounded-full bg-white absolute left-[-6px] top-1 flex items-center justify-center border border-[#5554ED]" /> */}

											<Text className="font-gilroyMedium text-sm text-textColor">
												Ogaminana
											</Text>
										</View>
									</View>
								</View>

								<Pressable
									onPress={() => {
										router.dismissAll();
										router.replace("/trip/end");
									}}
									className="w-full h-[45px] gap-[10px] mt-5 bg-subTextColor rounded-lg flex flex-row items-center justify-center"
								>
									<Text className="font-gilroySemibold text-base text-white">
										End trip
									</Text>

									<Image
										source={require("@/assets/icons/forward.svg")}
										className="w-5 h-5"
										contentFit="contain"
									/>
								</Pressable>
							</View>
						</View>
					</ScrollView>
				</BottomSheetView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		backgroundColor: "white",
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingHorizontal: 16,
	},
});

export const CustomHandle = () => {
	return (
		<View className="w-full flex ">
			<View className="w-full flex flex-row items-center justify-between h-[47px] bg-[#FFB458] px-6 rounded-t-[10px]">
				<View className="flex flex-row items-center gap-[10px]">
					<Image
						source={require("@/assets/icons/forward.svg")}
						className="w-5 h-5"
						contentFit="contain"
					/>

					<Text className="font-gilroyBold text-sm text-white">
						Trip in progress
					</Text>
				</View>

				<Text className="font-gilroyBold text-sm text-white">02:54:10</Text>
			</View>
			<View className="w-full flex items-center justify-center py-[14px]">
				<View className="w-[64px] h-[6px] bg-[#D9D9D9] rounded-[10px]" />
			</View>
		</View>
	);
};
