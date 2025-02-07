import { useRef, useCallback, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import type BottomSheet from "@gorhom/bottom-sheet";
import { ScreenLayout } from "src/components/screen-layout";
import { Button, Pressable, Text, View,} from "src/ui";
import { router } from "expo-router";
import { SummaryCard } from "src/components/route/summary";
import { LocationPermissionModal } from "src/components/route/cancel-modal";
import { TextInput } from "react-native";

export default function Screen() {
	// Create a ref for the bottom sheet
	const bottomSheetRef = useRef<BottomSheet>(null);

	// Function to open the bottom sheet
	const handlePresentBottomSheet = useCallback(() => {
		bottomSheetRef.current?.expand();
	}, []);
  
    const [review, setReview] = useState("");

	return (
		<ScreenLayout useStaticView backgroundColor="#FAF9F6">
			<View className="w-full flex gap-4 bg-white">
				<View className="w-full px-4 flex flex-row items-center justify-between pt-[40px] pb-5 relative">
					<Pressable onPress={() => router.back()} className="">
						<AntDesign name="left" size={24} color="black" />
					</Pressable>

					<View className="flex-1 flex items-center justify-center">
						<Text className="text-textColor font-gilroySemibold text-lg">
                            Others
						</Text>
					</View>

					<View className="w-6 h-6" />
				</View>
			</View>

            <View className="p-4">
                    <Text className="font-gilroySemibold text-[#667085] text-lg">
                          We’d love to hear your feedback!
                    </Text>
                    </View>

                    <View className="px-4 py-2">
                        <Text className="text-lg font-bold mb-2">Review</Text>
                        <TextInput
                            className="h-60 border border-gray-300 rounded-lg p-4 text-base text-gray-800 font-gilroyRegular "
                            style={{ textAlignVertical: 'top' }} // Ensures text starts from the top
                            multiline
                            placeholder="Share your experience and suggestions"
                            value={review}
                            onChangeText={(text) => setReview(text)}
                            />

                        </View>
                
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <View className="w-full px-4 py-[18px] flex gap-4 absolute bottom-0 border-t-2 border-[#F7F7F7] rounded-tl-lg rounded-tr-lg">
                            <Button label="Submit"/>
                        </View>
                    </View>
                    

		</ScreenLayout>
	);
}
