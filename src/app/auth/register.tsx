// src/app/auth/register.tsx
import {
  RegisterForm,
  type RegisterFormProps,
} from "src/components/auth/register-form";
import { FocusAwareStatusBar, ScrollView, Text, View } from "src/ui";
import { router } from "expo-router";
import { useState } from "react";
import { Toast } from "src/components/ui/toast";
import React from "react";

export default function Register() {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
    show: boolean;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: RegisterFormProps["onSubmit"] = async (data) => {
    setIsLoading(true);
    console.log('Starting registration process...', { data });
    
    try {
      console.log('Preparing API request...');
      const requestBody = {
        full_name: data.fullname,
        email: data.email,
        phone_number: data.phone_number,
        referral_code: data.referral_code || undefined,
      };
      
      console.log('Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch("https://api.grovine.ng/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response received. Status:', response.status);
      
      const result = await response.json();
      console.log('Response body:', result);

      if (!response.ok) {
        console.error('Registration failed:', result);
        throw new Error(result.message || "Registration failed");
      }

      console.log('Registration successful!');
      setToast({
        message: "Registration successful! Redirecting...",
        type: "success",
        show: true,
      });

      setTimeout(() => {
        console.log('Navigating to verify-email page...');
        router.navigate(`/auth/verify-email?email=${data.email}`);
      }, 2000);
    } catch (error: any) {
      console.error('Error during registration:', error);
      const errorMessage = error.message || "An error occurred during registration";
      console.log('Displaying error toast:', errorMessage);
      
      setToast({
        message: errorMessage,
        type: "error",
        show: true,
      });
    } finally {
      console.log('Registration process completed. Loading state set to false.');
      setIsLoading(false);
    }
  };

  console.log('Rendering Register component...');

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

          <RegisterForm onSubmit={onSubmit} isLoading={isLoading} />
        </View>
      </ScrollView>

      {toast?.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onHide={() => {
            console.log('Toast dismissed');
            setToast(null);
          }}
        />
      )}
    </View>
  );
}