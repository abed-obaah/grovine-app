import { Header } from "@/components/header";
import { ScreenLayout } from "@/components/screen-layout";
import { Button, Image, Input, Text, View } from "@/ui";
import { ScrollView } from "react-native";

export default function Screen() {
  return (
    <ScreenLayout useStaticView backgroundColor="#FDFDFD">
      <View className="pt-[20px]">
        <Header title="Add payment method" />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        automaticallyAdjustKeyboardInsets
      >
        <View className="flex-1 py-[26px] px-4 gap-5">
          <View className="w-full justify-between aspect-[341/186] rounded-lg bg-[#FD8C0014] px-[10px] py-[14px] border border-[#FD8C0080]">
            <View className="w-full flex-row items-center justify-between">
              <Text className="font-gilroySemibold text-base text-textColor">
                Esther Adebisi
              </Text>

              <Image
                source={require("@/assets/icons/mastercard.png")}
                className="w-[50px] h-[50px]"
                contentFit="contain"
              />
            </View>

            <View>
              <Text className="font-gilroyMedium text-sm text-subTextColor">
                Card number
              </Text>
              <Text className="font-gilroySemibold text-base text-textColor">
                430 5678 xxxx xxxx
              </Text>
            </View>

            <View className="flex-row">
              <View className="flex-1">
                <View>
                  <Text className="font-gilroyMedium text-sm text-subTextColor">
                    Month/year
                  </Text>
                  <Text className="font-gilroySemibold text-base text-textColor">
                    01/26
                  </Text>
                </View>
              </View>

              <View className="flex-1">
                <View>
                  <Text className="font-gilroyMedium text-sm text-subTextColor">
                    CVV
                  </Text>
                  <Text className="font-gilroySemibold text-base text-textColor">
                    567
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="w-full rounded-[10px] border border-[#66708526] px-4 py-[22px] flex gap-4">
            <Input label="Card holder name" placeholder="Adebisi" sm />

            <Input label="Card number" placeholder="**** *** ***" sm />

            <View className="w-full flex-row gap-10">
              <Input label="Expires" placeholder="**** *** ***" sm />

              <Input label="CVV" placeholder="xxx" sm />
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="w-full bg-[#F7F7F7] px-5 py-6 flex flex-row items-center gap-7">
        <View className="flex-1">
          <Button label="Save" />
        </View>
      </View>
    </ScreenLayout>
  );
}
