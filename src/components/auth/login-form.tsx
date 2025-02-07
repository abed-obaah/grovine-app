import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button, ControlledInput, Image, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";

const schema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email("Invalid email format"),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(6, "Password must be at least 6 characters"),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
	onSubmit?: SubmitHandler<FormType>;
};

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
	const { handleSubmit, control } = useForm<FormType>({
		resolver: zodResolver(schema),
	});
	return (
		<View className="flex gap-[40px]">
			<View className="w-full flex gap-[10px]">
				<ControlledInput
					testID="email-input"
					control={control}
					name="email"
					label="Email Address"
					keyboardType="email-address"
					placeholder="Enter your email address"
				/>

				<ControlledInput
					testID="password-input"
					control={control}
					name="password"
					label="Password"
					placeholder="Enter your password"
					secureTextEntry={true}
				/>

				<View className="w-full flex flex-row justify-end">
					<Pressable onPress={() => router.navigate("/auth/password/forgot")}>
						<Text className="font-gilroyMedium text-sm text-secondary">
							Forgot Password?
						</Text>
					</Pressable>
				</View>
			</View>

			<View className="w-full flex gap-4">
				<View className="w-full flex gap-[10px]">
					<Button
						testID="login-button"
						label="Login"
						onPress={handleSubmit(onSubmit)}
					/>
				</View>

				<View className="w-full flex flex-row items-center justify-center gap-1">
					<Text className="font-gilroyRegular text-sm text-[#667085]">
						Don't have an account?
					</Text>

					<Pressable onPress={() => router.navigate("/auth/register")}>
						<Text className="font-gilroyRegular text-base text-secondary">
						Create account
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};
