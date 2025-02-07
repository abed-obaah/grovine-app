import { useRef, useCallback, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import type BottomSheet from "@gorhom/bottom-sheet";
import { ScreenLayout } from "src/components/screen-layout";
import { Button, Pressable, Text, View,} from "src/ui";
import { router } from "expo-router";
import { SummaryCard } from "src/components/route/summary";
import { LocationPermissionModal } from "src/components/route/cancel-modal";

export default function Screen() {
	// Create a ref for the bottom sheet
	const bottomSheetRef = useRef<BottomSheet>(null);

	// Function to open the bottom sheet
	const handlePresentBottomSheet = useCallback(() => {
		bottomSheetRef.current?.expand();
	}, []);
    
    const [showModal, setShowModal] = useState(false);

	return (
		<ScreenLayout useStaticView backgroundColor="#FAF9F6">
			<View className="w-full flex gap-4 bg-white">
				<View className="w-full px-4 flex flex-row items-center justify-between pt-[40px] pb-5 relative">
					<Pressable onPress={() => router.back()} className="">
						<AntDesign name="left" size={24} color="black" />
					</Pressable>

					<View className="flex-1 flex items-center justify-center">
						<Text className="text-textColor font-gilroySemibold text-lg">
                        Cancel ticket
						</Text>
					</View>

					<View className="w-6 h-6" />
				</View>
			</View>
            <View className="p-4">
                    <Text>
                        Are you sure you want to cancel your{'\n'}booking?
                    </Text>
                    </View>

                
                    <View className="rounded-md mt-4 p-2">
                        <SummaryCard label="Mercedes-Benz Tourismo" />
                    </View>

                    <View className="border border-[#5554EDF5] bg-[#5554ED26] p-4 mx-auto rounded-lg mt-10">
                        <Text className="font-gilroyMedium text-[#28282B] pb-2">Refund information</Text>
                        <Text className="text-[#667085] font-gilroyRegular">Cancellation Fee: A 1% fee of the total trip cost will apply for cancellations made.</Text>
                    </View>
                
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <View className="w-full px-4 py-[18px] flex gap-4 absolute bottom-0 border-t-2 border-[#F7F7F7] rounded-tl-lg rounded-tr-lg">
                            <Button label="Confirm"   onPress={() => setShowModal(true)} />
                        </View>
                    </View>
                    <LocationPermissionModal showModal={showModal} setShowModal={setShowModal} />

		</ScreenLayout>
	);
}
