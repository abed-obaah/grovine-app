import { Image, Pressable, Text, View } from "@/ui";

// type Props = {};

export const CompleteKYC = () => {
	return (
		<Pressable
			style={{
				shadowColor: "#000000",
				shadowOffset: {
					width: 0,
					height: 4,
				},
				// shadowOpacity: 0.05,
				shadowRadius: 33.8,
				elevation: 33.8,
			}}
			className="w-full p-3 rounded-[10px] flex flex-row gap-[10px] items-center bg-[#FD8C0033] border border-[#DDDDDD26]"
		>
			<View className="w-[35px] h-[40px] bg-[#EB963F] rounded-[12px] flex items-center justify-center">
				<Image
					className="w-[19px] h-[21px]"
					contentFit="contain"
					source={require("@/assets/images/logo.png")}
				/>
			</View>

			<View className="flex-1">
				<Text className="font-gilroyBold text-textColor text-base">
					Complete Your KYC to Unlock Full Access!
				</Text>

				<Text className="font-gilroyRegular text-textColor text-sm">
					Verify your identity now for a safer and more secure experience.
				</Text>
			</View>
		</Pressable>
	);
};
