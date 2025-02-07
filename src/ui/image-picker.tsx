import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ExpoImagePicker from "expo-image-picker";
import * as React from "react";
import { Pressable, View } from "react-native";

import { Image } from "./image";
import { Text } from "./text";

type Props = {
	label?: string;
	disabled?: boolean;
	error?: string;
	placeholder?: string;
	maxNumOfImages?: number;
};
export const ImagePicker = ({ maxNumOfImages = 3, ...props }: Props) => {
	const { label, error } = props;

	const [selectedFiles, setSelectedFiles] = React.useState<
		ExpoImagePicker.ImagePickerAsset[]
	>([]);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		if (selectedFiles?.length === maxNumOfImages) return;

		const result = await ExpoImagePicker.launchImageLibraryAsync({
			mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
			// allowsEditing: true,
			// aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			//   const uri = result.assets[0].uri
			if (selectedFiles?.length < maxNumOfImages) {
				setSelectedFiles((prev) => [...prev, result.assets[0]]);
			}
		}
	};

	function deleteSelectedFile(fileToDelete: ExpoImagePicker.ImagePickerAsset) {
		setSelectedFiles((prevSelectedFiles) =>
			prevSelectedFiles.filter((file) => file.uri !== fileToDelete.uri),
		);
	}

	return (
		<View className="flex gap-[6px]">
			{label && (
				<Text className="font-gilroyMedium text-sm text-[#344054]">
					{label}
				</Text>
			)}

			<View className="w-full">
				<View className="w-full flex gap-[10px]">
					<Pressable
						onPress={pickImage}
						// style={StyleSheet.flatten([inputProps.style])}
						className="w-full aspect-[339/156] border border-[#66708533] rounded-lg flex items-center justify-center gap-[15px]"
					>
						<Text className="font-gilroyMedium text-sm text-center text-[#667085] max-w-[60%]">
							{props?.placeholder}
						</Text>

						<Image
							source={require("@/assets/icons/gallery-export.svg")}
							className="w-[50px] h-[50px]"
							contentFit="contain"
						/>
					</Pressable>

					<View className="w-full flex gap-6 pr-5">
						{selectedFiles?.map((item) => (
							<View
								key={item?.assetId}
								className="w-full flex flex-row justify-between"
							>
								<View className="flex flex-row gap-[10px]">
									<Ionicons name="image-outline" size={24} color="#FD8C00" />

									<View className="flex gap-1">
										<Text className="font-gilroyMedium text-sm text-[#344054]">
											{item?.fileName}
										</Text>

										<Text className="font-gilroyRegular text-xs text-[#344054]">
											{item.fileSize ? Math.ceil(item.fileSize / 1000) : "0"}KB
										</Text>
									</View>
								</View>

								<Pressable
									onPress={() => deleteSelectedFile(item)}
									className="w-6 h-6"
								>
									<MaterialCommunityIcons
										name="trash-can-outline"
										size={24}
										color="#667085"
									/>
								</Pressable>
							</View>
						))}
					</View>
				</View>

				{error && (
					<Text className="text-sm text-danger-400 dark:text-danger-600">
						{error}
					</Text>
				)}
			</View>
		</View>
	);
};
