import { ScrollView, View, WIDTH } from "@/ui";
// import { router } from "expo-router";
import { RouteDisplay } from "./route-display";
import { VehicleDetailsDisplay } from "./vehicle-details-display";
import { VehicleFeaturesDisplay } from "./vehicle-features-display";

// type Props = {

// };
export const InformationTab = () => {
	return (
		<View style={{ width: WIDTH }} className="flex-1">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				// bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<View className="flex-1 p-4 flex gap-6 bg-white">
					<View className="flex-1 gap-6 px-4 py-6">
						<RouteDisplay />

						<VehicleFeaturesDisplay showCounter={false} />

						<VehicleDetailsDisplay />
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
