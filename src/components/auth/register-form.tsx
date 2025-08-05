// src/components/auth/register-form.tsx
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button, ControlledInput, Pressable, Text, View } from "src/ui";
import { router } from "expo-router";
import React from "react";

const schema = z.object({
  fullname: z.string({ required_error: "Fullname is required" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format"),
  phone_number: z.string({ required_error: "Phone number is required" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
  referral_code: z.string().optional(),
});

export type FormType = z.infer<typeof schema>;

export type RegisterFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  isLoading?: boolean;
};

export const RegisterForm = ({ onSubmit = () => {}, isLoading = false }: RegisterFormProps) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <View className="flex-1 flex gap-[40px]">
      <View className="w-full flex gap-[10px]">
        <ControlledInput
          testID="name-input"
          control={control}
          name="fullname"
          label=""
          placeholder="Enter your fullname"
        />

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label="Email Address"
          keyboardType="email-address"
          placeholder="Enter your email address"
        />

        <ControlledInput
          testID="phone-input"
          control={control}
          name="phone_number"
          label=""
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          style={{ paddingLeft: 80 }}
          leftIconComponent={
            <View className="absolute left-0 top-0 bottom-0 w-[80px] flex flex-row items-center justify-center pt-2">
              <Text className="font-gilroyRegular text-base text-[#101828]">
                NGN
              </Text>

              <Feather name="chevron-down" size={20} color="#667085" />
            </View>
          }
        />

        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <ControlledInput
          testID="referral-input"
          control={control}
          name="referral_code"
          label=""
          placeholder="Referral code"
        />

        <View className="w-full flex flex-row">
          <Pressable
            className="flex flex-row items-center gap-2"
            onPress={() => setAgreedToTerms((prev) => !prev)}
          >
            <View
              className={`w-5 h-5 flex items-center justify-center rounded border border-primary ${
                agreedToTerms ? "bg-primary" : "bg-white"
              }`}
            >
              <FontAwesome5 name="check" size={10} color="white" />
            </View>

            <Text className="font-gilroyRegular text-sm text-[#667085]">
              I agree to{" "}
              <Text className="font-gilroyRegular text-sm text-secondary">
                terms & conditions
              </Text>{" "}
              and{" "}
              <Text className="font-gilroyRegular text-sm text-primary">
                privacy policy
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="w-full flex gap-4">
        <View className="w-full flex gap-[10px]">
          <Button
            testID="register-button"
            label={isLoading ? "Creating Account..." : "Create Account"}
            onPress={handleSubmit(onSubmit)}
            disabled={!agreedToTerms || isLoading}
          />
        </View>

        <View className="w-full flex flex-row items-center justify-center gap-1">
          <Text className="font-gilroyRegular text-sm text-[#667085]">
            Already have an account?
          </Text>

          <Pressable onPress={() => router.navigate("/auth/login")}>
            <Text className="font-gilroyRegular text-base text-secondary">
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};