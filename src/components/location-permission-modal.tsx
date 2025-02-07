import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Modal } from "react-native";

import { Button, Text, View } from "src/ui";

export const LocationPermissionModal = () => {
	const [status, requestPermission] = Location.useForegroundPermissions();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (status) {
			if (status?.status === "granted") {
				setShowModal(false);
			} else {
				setShowModal(true);
			}
		}
	}, [status]);

	const getPermission = () => {
		requestPermission().finally(() => {
			setShowModal(false);
		});
	};

	return (
		<Modal
			animationType="slide"
			transparent
			visible={showModal}
			presentationStyle="overFullScreen"
			className="flex-1"
		>
			<View className="flex-1 bg-black/30 flex items-center justify-center p-4 ">
				<View className="w-full aspect-[346/268] bg-white rounded-[20px] flex items-center justify-center gap-8 py-4 px-[52px]">
					<View className="w-full flex gap-[10px]">
						<Text className="font-gilroyBold text-2xl text-textColor text-center">
							Allow your location
						</Text>

						<Text className="font-gilroyRegular text-lg text-subTextColor text-center">
							We will need your location to give you a better experience.
						</Text>
					</View>

					<View className="w-full">
						<Button
							label="Allow location access"
							fullWidth
							onPress={getPermission}
							//   onPress={() => setShowModal(false)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};
