import Feather from "@expo/vector-icons/Feather";

import { Text, View } from "@/ui";

// type Props = {

// };
export const InfoAlert = () => {
	return (
		<View className="w-full aspect-[343/35] bg-[#FD8C0026] rounded-[5px] border border-[#FD8C00] flex flex-row items-center gap-1 px-[10px]">
			<Feather name="info" size={15} color="#FD8C00" />

			<Text className="font-gilroyMedium text-xs text-textColor">
				You have to create trip 2-7 days before departure
			</Text>
		</View>
	);
};
