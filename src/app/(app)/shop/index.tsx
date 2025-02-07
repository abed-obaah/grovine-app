import { ChocoCard } from "@/components/chococard";
import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
// import { InfoAlert } from "@/components/trip/info-alert";
import { PickDropStationForm } from "@/components/trip/pick-drop-station-form";
import { TripDetailsForm } from "@/components/trip/trip-details-form";
import { TripSpecificationForm } from "@/components/trip/trip-specification-form";
import { Button, HEIGHT, ScrollView, Text, View, Image} from "@/ui";
import { router } from "expo-router";
import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";




const categories = ["Vegetables",
     "Fruits", 
     "Baby & Kids", 
     "Proteins", 
     "Grains",
     'Baked Foods',
    "Beverages",
"Snacks & Treats",
"Frozen Foods",
"House Essentials",
"Desserts & Sweetners",
"International Cuisines"];

export default function Screen() {
	const [step, setStep] = useState(1);

	const [tripDetails, setTripDetails] = useState({
        departureLocation: "",
        arrivalLocation: "",
        departureDate: "",
        departureTime: "",
        arrivalDate: "",
        arrivalTime: "",
        vehicle: "",
    });

	const [tripSpecification, setTripSpecification] = useState({
        tripPrice: "",
        luggageSize: "",
        extraLuggageCharge: "",
        vehicleFeatures: [],
    });

    // State for Pick/Drop Station
    const [pickDropStation, setPickDropStation] = useState({
        pickupStation: "",
        dropOffStation: "",
        stops: [],
        closeBookingDate: "",
        closeBookingTime: "",
    });

	const handleOnbackPress = () => {
		if (step === 1) {
			router.back();
		}
		if (step === 2) {
			setStep(1);
		}
		if (step === 3) {
			setStep(2);
		}
	};

	return (
		<ScreenLayout useStaticView>
		<View className="flex flex-row px-4 my-2 items-center justify-between">
            <View className="mt-4">
                <Text className="text-[#4A4A4A] text-lg font-gilroySemibold">What Are You Looking</Text>    
                <Text className="text-[#4A4A4A] text-lg font-gilroySemibold">To Shop Today?</Text>    
            </View>

            <View className="flex-row items-center gap-4 border border-[#E0E5ED] rounded-lg px-2">
                    {/* Profile Image */}
                    <Image
                        source={require("@/assets/images/profile.png")}
                        className="w-9 h-9 rounded-full"
                    />

                    {/* Text Content */}
                    <View>
                        <Text className="text-sm font-semibold text-gray-800">Your</Text>
                        <Text className="text-sm font-semibold text-gray-800">Shopping</Text>
                        <Text className="text-sm font-semibold text-gray-800">Assistant</Text>
                    </View>
    </View>
            
        </View>

			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
                	 {/* Top Search Bar */}
                     <View
                            className="border border-[#93939340] bg-[#ffffff] flex flex-row items-center px-2 rounded-lg mx-2"
                            style={{ height: 40 }} // Set explicit height
                            >
                            <TextInput
                                className="flex-1 font-gilroyRegular text-sm text-textColor"
                                placeholder="Search for groceries, recipes etc"
                                placeholderTextColor="#667085"
                                style={{ height: 36, paddingVertical: 0 }} // Explicit height and remove extra padding
                            />

                            <Image
                                source={require("@/assets/images/search.png")}
                                style={{ width: 18, height: 18 }} // Adjusted icon size
                                resizeMode="contain"
                            />
                    </View>
      {/* Category Selection */}
                <View className="px-4 mt-4">
                  <Text className="text-[#939393] text-md font-gilroyRegular">Choose one or more categories</Text>
                </View>
            
                <View className="mt-4 flex-row flex-wrap px-2">
                    
                    {categories.map((category, index) => (
                    <TouchableOpacity key={index} className="border-[#E0E5ED] border px-6 py-2 rounded-md mb-2 mx-1.5">
                        <Text className="text-[#939393] text-xs">{category}</Text>
                    </TouchableOpacity>
                    ))}
                </View>
				<View className="flex-1 mt-4">
                <ChocoCard/>
				</View>
			</ScrollView>

			<View
				style={styles.shadowBox}
				className="w-full flex justify-center px-[28px] rounded-tl-[15px] rounded-tr-[15px]"
			>
				<Button
					label="Start Shopping"
					fullWidth
					onPress={() => {
						if (step === 1) {
							setStep(2);
						}
						if (step === 2) {
							setStep(3);
						}
						if (step === 3) {
                            // You can now pass the collected data to the next screen
                            router.navigate("/trip/review", {
                                params: {
                                    tripDetails,
                                    tripSpecification,
                                    pickDropStation,
                                },
                            });
                        }
					}}
				/>
			</View>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	shadowBox: {
		height: HEIGHT * 0.1162,
		// // iOS shadow
		// shadowColor: "#0C0C0D",
		// shadowOffset: {
		// 	width: 0, // X offset
		// 	height: -2, // Y offset
		// },
		// shadowOpacity: 0.05, // 5% opacity
		// shadowRadius: 4, // Same as Blur
		// // Android shadow
		// elevation: 4, // Elevation is typically equal to the shadow radius on iOS
	},
});
