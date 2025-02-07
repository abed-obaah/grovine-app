import { Image, ScrollView, Text, View, WIDTH } from "src/ui";

export const CancellationTab = () => {
	return (
		<View style={{ width: WIDTH }} className="flex-1 bg-white p-4">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1, gap: 20 }}
				showsVerticalScrollIndicator={false}
			>
				<View className="w-full flex gap-5">
					<Text className="text-xs font-gilroyMedium text-subTextColor">
						Cancellation policy
					</Text>

					<Policy label="Full refund if canceled 2 hours before departure." />
					<Policy label="50% refund if canceled within 1-2 hours before departure." />
					<Policy label="No refund if canceled less than 1 hour before departure." />
					<Policy label="No refund after departure." />
					<Policy label="Cancellation requests must be made through the app." />
					<Policy label="Refunds will be processed within 3-5 business days." />
					<Policy label="Booking changes are allowed up to 1 hour before departure with no additional fees." />
				</View>
			</ScrollView>
		</View>
	);
};

type Props = {
	label: string;
};
export const Policy = ({ label }: Props) => {
	return (
		<View className="w-full flex flex-row items-center gap-[5px]">
			<Image
				source={require("../../assets/icons/check.svg")}
				className="w-5 h-5"
				contentFit="contain"
			/>

			<Text className="text-black font-gilroyMedium text-sm">{label}</Text>
		</View>
	);
};
