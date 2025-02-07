import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
	Button,
	ControlledInput,
	FocusAwareStatusBar,
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
} from "src/ui";

const schema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email("Invalid email format"),
});

export type FormType = z.infer<typeof schema>;

export type ForgotPasswordFormProps = {
	onSubmit?: SubmitHandler<FormType>;
};

export default function ForgotPassword() {
	const { handleSubmit, control } = useForm<FormType>({
		resolver: zodResolver(schema),
	});

	const onSubmit: ForgotPasswordFormProps["onSubmit"] = (data) => {
		console.log(data);
		router.navigate(`/auth/password/verify-code?email=${data.email}`);
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
				<View className="flex-1 flex gap-[54px] py-[40px]">
					<View className="w-full flex gap-[27px]">
						<View className="w-full flex items-center flex-row gap-4">
							<Pressable
								onPress={() => router.back()}
								className="w-10 h-10 border border-[#66708580] rounded-full flex items-center justify-center"
							>
								<Image
									source={require("../../../assets/icons/arrow-left.svg")}
									contentFit="contain"
									className="w-6 h-6"
								/>
							</Pressable>
						</View>

						<View className="w-full flex gap-[10px]">
							<Text className="font-gilroyBold text-3xl text-textColor text-center">
								Forgot Password
							</Text>

							<Text className="font-gilroyRegular text-base text-subTextColor text-center">
								Enter the email associated with your account and we'll send an
								email instruction to reset your password
							</Text>
						</View>
					</View>

					<ControlledInput
						testID="email-input"
						control={control}
						name="email"
						label="Email Address"
						keyboardType="email-address"
						placeholder="Enter your email address"
					/>

					<View className="w-full flex gap-4">
						<Button label="Send Code" onPress={handleSubmit(onSubmit)} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
