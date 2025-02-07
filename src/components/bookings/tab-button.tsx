import { Pressable, Text, View } from "@/ui";

type Props = {
	active: boolean;
	label: string;
	onPress: () => void;
};
export const TabButton = ({ active, label, onPress }: Props) => {
	return (
		<Pressable
			onPress={onPress}
			className="flex-1 flex items-center justify-center relative"
		>
			<Text
				className={`font-gilroySemibold text-sm ${
					active ? "text-textColor" : "text-subTextColor"
				}`}
			>
				{label}
			</Text>

			{active && (
				<View className="w-[60%] h-[2px] bg-secondary absolute bottom-0" />
			)}
		</Pressable>
	);
};
