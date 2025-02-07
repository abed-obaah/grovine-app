import { Text, View } from "src/ui";
import type React from "react";
import {
	TouchableOpacity,
	type ViewStyle,
	useWindowDimensions,
} from "react-native";

// Define the types for the props
interface GroupTabProps {
	tabs: string[];
	activeTab: number;
	setActiveTab: (index: number) => void;
}

const GroupTab: React.FC<GroupTabProps> = ({
	tabs,
	activeTab,
	setActiveTab,
}) => {
	const { width } = useWindowDimensions();

	return (
		<View className="flex-row justify-between border-b border-gray-300 mt-10 bg-white">
			{tabs.map((item, i) => (
				<TouchableOpacity
					key={item} // Use the tab name as the key
					onPress={() => setActiveTab(i)}
					className="flex-1 items-center pb-2"
					style={{
						width: width / tabs.length,
					}}
				>
					<View
						style={
							{
								borderBottomWidth: activeTab === i ? 2 : 0,
								borderBottomColor: activeTab === i ? "#FD8C00" : "transparent",
								width: "70%",
								alignSelf: "center",
								position: "absolute",
								bottom: 0,
							} as ViewStyle
						}
					/>
					<Text
						className="text-base font-gilroySemibold"
						style={{
							color: activeTab === i ? "#28282B" : "#667085",
						}}
					>
						{item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

export default GroupTab;
