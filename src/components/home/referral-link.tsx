import { Pressable, Text, View } from "@/ui";

type Props = {
	link?: string;
};
export const ReferralLink = ({ link = "trubooker.com/krvw-224" }: Props) => {
	return (
		<View className="w-full flex gap-3">
			<Text className="font-gilroySemibold text-base text-black">
				Referral link
			</Text>

			<View className="w-full h-[54px] border border-[#FD8C0026] rounded-lg px-[16px] flex flex-row items-center justify-between">
				<Text className="font-gilroyMedium text-sm text-subTextColor">
					{link}
				</Text>

				<Pressable>
					<Text className="font-gilroyMedium text-sm text-secondary">Copy</Text>
				</Pressable>
			</View>
		</View>
	);
};
