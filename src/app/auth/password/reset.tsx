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

const schema = z
	.object({
		password: z
			.string({
				required_error: "Password is required",
			})
			.min(8, "Password must be at least 8 characters"),
		password_confirmation: z
			.string({
				required_error: "Password confirmation is required",
			})
			.min(8, "Password must be at least 8 characters"),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: "Passwords must match",
		path: ["password_confirmation"],
	});

export type FormType = z.infer<typeof schema>;

export type ResetPasswordFormProps = {
	onSubmit?: SubmitHandler<FormType>;
};

export default function ResetPassword() {
	const { handleSubmit, control } = useForm<FormType>({
		resolver: zodResolver(schema),
	});

	const onSubmit: ResetPasswordFormProps["onSubmit"] = (data) => {
		console.log(data);
		router.dismissAll();
		router.replace("/auth/password/success");
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
								Reset Password
							</Text>

							<Text className="font-gilroyRegular text-base text-subTextColor text-center">
								Make sure your new password must be different from your previous
								used password
							</Text>
						</View>
					</View>

					<View className="w-full flex gap-[10px]">
						<ControlledInput
							testID="new-password-input"
							control={control}
							name="password"
							label="New Password"
							placeholder="Enter your new password"
							secureTextEntry={true}
						/>

						<ControlledInput
							testID="confirm-password-input"
							control={control}
							name="password_confirmation"
							label="Confirm New Password"
							placeholder="Confirm your new password"
							secureTextEntry={true}
						/>
					</View>

					<View className="w-full flex gap-4">
						<Button label="Submit" onPress={handleSubmit(onSubmit)} />
					</View>
				</View>
			</ScrollView>
		</View>
	);
}
