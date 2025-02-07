import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Button, Image, Input, Text, View } from "@/ui";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

export default function Screen() {
  const [selectedFAQ, setSelectedFAQ] = useState(0);

  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <View className="pt-[20px]">
        <Header title="Help & support" />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 py-[24px] px-4 gap-[26px]">
          <View className="gap-[10px]">
            <Text className="text-base font-gilroySemibold text-subTextColor">
              Get assistance or find answers to your questions
            </Text>

            <View
              style={{
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.17,
                shadowRadius: 3.05,
                elevation: 4,
              }}
              className="flex-1 h-[44px] bg-white flex flex-row items-center gap-2 px-[14px] rounded-lg"
            >
              <Image
                source={require("@/assets/icons/search.svg")}
                className="w-6 h-6"
                contentFit="contain"
              />
              <TextInput
                className="flex-1 font-gilroyRegular text-sm text-textColor"
                placeholder="search..."
                placeholderTextColor="#667085"
              />
            </View>
          </View>

          <View className="gap-[26px]">
            <Text className="font-gilroyMedium text-sm text-subTextColor">
              Help categories
            </Text>

            <View className="gap-6">
              <HelpItem
                title="Account issues"
                subtitle="Help with login problems, account setup, or profile management"
                iconSrc={require("@/assets/icons/gear.svg")}
              />
              <HelpItem
                title="Booking Problems"
                subtitle="Assistance with booking errors, changes, or cancellations."
                iconSrc={require("@/assets/icons/calendar-tick.svg")}
              />
              <HelpItem
                title="Payment Issues"
                subtitle="Resolve issues related to payments, refunds, or charges."
                iconSrc={require("@/assets/icons/card-remove.svg")}
              />
              <HelpItem
                title="Cancellation and Refunds"
                subtitle="Information on how to cancel trips and request refunds."
                iconSrc={require("@/assets/icons/ticket-expired.svg")}
              />
            </View>
          </View>

          <View className="gap-[26px]">
            <Text className="font-gilroyMedium text-sm text-subTextColor">
              FAQ’S
            </Text>

            <View className="w-full gap-5">
              <FAQItem
                title="What should I do if I miss my bus?"
                subtitle="If you miss your bus, check for alternative options in the app, contact customer support for assistance, and review the cancellation and refund policies. If needed, update your booking for a future trip."
                shown={selectedFAQ === 0}
                onPress={() => setSelectedFAQ(0)}
              />
              <FAQItem
                title="How do I update my payment information?"
                subtitle="If you miss your bus, check for alternative options in the app, contact customer support for assistance, and review the cancellation and refund policies. If needed, update your booking for a future trip."
                shown={selectedFAQ === 1}
                onPress={() => setSelectedFAQ(1)}
              />
              <FAQItem
                title="What should I do if I forget my password?"
                subtitle="If you miss your bus, check for alternative options in the app, contact customer support for assistance, and review the cancellation and refund policies. If needed, update your booking for a future trip."
                shown={selectedFAQ === 2}
                onPress={() => setSelectedFAQ(2)}
              />
              <FAQItem
                title="How can I change my booking details?"
                subtitle="If you miss your bus, check for alternative options in the app, contact customer support for assistance, and review the cancellation and refund policies. If needed, update your booking for a future trip."
                shown={selectedFAQ === 3}
                onPress={() => setSelectedFAQ(3)}
              />
            </View>
          </View>

          <View className="gap-[26px]">
            <Text className="font-gilroyMedium text-sm text-subTextColor">
              Contact support
            </Text>

            <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
              <Input placeholder="Esther" sm label="Name" />
              <Input placeholder="Adebisi" sm label="Email address" />
              <Input placeholder="123, Test street, Abuja" sm label="Subject" />

              <Input
                label="Message"
                placeholder="Drop a message..."
                isTextArea
                rows={10}
                style={{
                  height: Platform.OS === "ios" ? 14 * 10 : 56,
                }}
              />

              <View className="w-[50%]">
                <Button label="Send request" />
              </View>
            </View>
          </View>

          <View className="gap-[20px]">
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroyMedium text-sm text-subTextColor">
                Contact support
              </Text>

              <Pressable>
                <Text className="font-gilroyMedium text-sm text-secondary">
                  View all
                </Text>
              </Pressable>
            </View>

            <ScrollView horizontal contentContainerStyle={{ gap: 22 }}>
              <View className="gap-2 w-[132px]">
                <View className="w-full h-[95px] items-center justify-center rounded-lg overflow-hidden relative">
                  <Image
                    className="w-full h-full"
                    contentFit="cover"
                    source={require("@/assets/images/car-1.jpg")}
                  />

                  <View className="w-8 h-8 bg-secondary items-center justify-center rounded-full absolute">
                    <FontAwesome5 name="play" size={14} color="white" />
                  </View>
                </View>

                <Text className="font-gilroyMedium text-sm text-textColor">
                  How to sign up as a driver
                </Text>
              </View>

              <View className="gap-2 w-[132px]">
                <View className="w-full h-[95px] items-center justify-center rounded-lg overflow-hidden relative">
                  <Image
                    className="w-full h-full"
                    contentFit="cover"
                    source={require("@/assets/images/car-1.jpg")}
                  />

                  <View className="w-8 h-8 bg-secondary items-center justify-center rounded-full absolute">
                    <FontAwesome5 name="play" size={14} color="white" />
                  </View>
                </View>

                <Text className="font-gilroyMedium text-sm text-textColor">
                  How to sign up as a driver
                </Text>
              </View>

              <View className="gap-2 w-[132px]">
                <View className="w-full h-[95px] items-center justify-center rounded-lg overflow-hidden relative">
                  <Image
                    className="w-full h-full"
                    contentFit="cover"
                    source={require("@/assets/images/car-1.jpg")}
                  />

                  <View className="w-8 h-8 bg-secondary items-center justify-center rounded-full absolute">
                    <FontAwesome5 name="play" size={14} color="white" />
                  </View>
                </View>

                <Text className="font-gilroyMedium text-sm text-textColor">
                  How to sign up as a driver
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <View className="w-full bg-[#F7F7F7] px-5 py-6 gap-[10px]">
        <Text className="font-gilroyMedium text-sm text-textColor text-center">
          Didn’t find what you are looking for?
        </Text>

        <Button label="Start a conversation" />
      </View>
    </ScreenLayout>
  );
}

type Props = {
  title: string;
  subtitle: string;
  iconSrc: string;
};
export const HelpItem = ({ ...props }: Props) => {
  return (
    <View className="w-full flex-row items-center gap-3">
      <View className="w-[44px] h-[44px] rounded-full items-center justify-center bg-[#66708526]">
        <Image
          className="w-6 h-6"
          contentFit="contain"
          source={props.iconSrc}
        />
      </View>

      <View className="flex-1">
        <Text className="text-sm font-gilroyMedium text-textColor">
          {props.title}
        </Text>
        <Text className="text-xs font-gilroyRegular text-subTextColor">
          {props.subtitle}
        </Text>
      </View>
    </View>
  );
};

type FAQProps = {
  title: string;
  subtitle: string;
  shown?: boolean;
  onPress?: () => void;
};

export const FAQItem = ({ ...props }: FAQProps) => {
  return (
    <View className="w-full gap-3">
      <Pressable
        onPress={props?.onPress}
        className="w-full flex-row items-center justify-between gap-4"
      >
        <Text className="font-gilroyMedium text-sm text-black">
          {props.title}
        </Text>

        <Pressable className="w-6 h-6 items-center justify-center">
          <FontAwesome6
            name={props.shown ? "minus" : "add"}
            size={20}
            color="black"
          />
        </Pressable>
      </Pressable>

      {props?.shown && (
        <Text className="text-xs font-gilroyRegular text-subTextColor">
          {props.subtitle}
        </Text>
      )}
    </View>
  );
};
