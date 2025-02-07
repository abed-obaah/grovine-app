import {
	RegisterForm,
	type RegisterFormProps,
} from "src/components/auth/register-form";
import { FocusAwareStatusBar, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";

export default function Register() {
	const onSubmit: RegisterFormProps["onSubmit"] = (data) => {
		console.log(data);
		router.navigate(`/auth/verify-email?email=${data.phone_number}`);
	};

	return (
		<View className="flex-1 bg-white px-4">
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				bounces={false}
				showsVerticalScrollIndicator={false}
				automaticallyAdjustKeyboardInsets
			>
				<FocusAwareStatusBar />
				<View className="flex-1 flex gap-[33px] py-[72px]">
					<View className="w-full flex gap-[10px]">
						<Text className="font-gilroyBold text-3xl text-textColor text-left">
						Create Your
						</Text>
						<Text className="font-gilroyBold text-3xl text-textColor text-left">
						Account.
						</Text>
					</View>

					<RegisterForm onSubmit={onSubmit} />
				</View>
			</ScrollView>
		</View>
	);
}
