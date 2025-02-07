import type { LoginFormProps } from "src/components/auth/login-form";
import { LoginForm } from "src/components/auth/login-form";
import { FocusAwareStatusBar, ScrollView, Text, View } from "src/ui";

export default function Login() {
	const onSubmit: LoginFormProps["onSubmit"] = (data) => {
		console.log(data);
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
				<View className="flex-1 flex gap-[33px] py-[70px]">
					<View className="w-full flex gap-[10px]">
						<Text className="font-gilroyBold text-3xl text-textColor text-left">
							Welcome 
						</Text>
						<Text className="font-gilroyBold text-3xl text-textColor text-left">
							Back!
						</Text>
					</View>

					<LoginForm onSubmit={onSubmit} />
				</View>
			</ScrollView>
		</View>
	);
}
