import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
// import { InfoAlert } from "@/components/trip/info-alert";
import { PickDropStationForm } from "@/components/trip/pick-drop-station-form";
import { TripDetailsForm } from "@/components/trip/trip-details-form";
import { TripSpecificationForm } from "@/components/trip/trip-specification-form";
import { Button, HEIGHT, ScrollView, Text, View } from "@/ui";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";

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
			<View className="pt-[20px]">
				<Header title="Create trip" onBackPress={handleOnbackPress} />
				{/* progress bar */}
				<View className="w-full h-[2px]">
					<View
						className="h-full bg-secondary"
						style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
					/>
				</View>
			</View>

			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<View className="flex-1">
					<View className="flex-1 gap-6 px-4 py-6">
						{/* {step === 1 && <InfoAlert />} */}

						<Text className="font-gilroyMedium text-sm text-subTextColor">
							Fill in the details below to schedule a new trip. Ensure all
							information is accurate to provide a smooth experience for your
							passengers.
						</Text>

						{step === 1 && <TripDetailsForm  tripDetails={tripDetails} setTripDetails={setTripDetails}/>}

						{step === 2 && <TripSpecificationForm tripSpecification={tripSpecification} setTripSpecification={setTripSpecification}/>}

						{step === 3 && <PickDropStationForm  pickDropStation={pickDropStation} setPickDropStation={setPickDropStation}/>}
					</View>
				</View>
			</ScrollView>

			<View
				style={styles.shadowBox}
				className="w-full bg-white flex justify-center px-[28px] rounded-tl-[15px] rounded-tr-[15px]"
			>
				<Button
					label="Next"
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
		// iOS shadow
		shadowColor: "#0C0C0D",
		shadowOffset: {
			width: 0, // X offset
			height: -2, // Y offset
		},
		shadowOpacity: 0.05, // 5% opacity
		shadowRadius: 4, // Same as Blur
		// Android shadow
		elevation: 4, // Elevation is typically equal to the shadow radius on iOS
	},
});
