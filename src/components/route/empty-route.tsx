import { Button, Image, Text, View } from "src/ui";

export const EmptyRoute = () => {
	return (
		<View className="flex-1 flex items-center justify-center gap-[34px]">
			<View className="w-[178px] aspect-[178/246] flex items-center justify-center">
				<Image
					source={require("../assets/icons/empty-route.svg")}
					className="w-full h-full"
					contentFit="contain"
				/>
			</View>

			<View className="flex items-center justify-center gap-[6px] max-w-[65%]">
				<Text className="font-gilroyBold text-[24px] text-textColor text-center">
					Oops! No trips
				</Text>
				<Text className="font-gilroyRegular text-[16px] text-textColor text-center">
					It looks like there wont be any trip for this route on July 24, 2024
				</Text>
			</View>

			<View className="w-full">
				<Button label="Check again" />
			</View>
		</View>
	);
};
