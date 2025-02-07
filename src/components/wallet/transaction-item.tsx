import { Image, Pressable, Text, View } from "@/ui";
import { router } from "expo-router";

type Props = {
  title: string;
  time: string;
  amount: string;
  isTransfer?: boolean;
};
export const TransactionItem = ({ ...props }: Props) => {
  return (
    <Pressable
      onPress={() => router.navigate("/transactions")}
      className="w-full flex-row justify-between items-center gap-4"
    >
      <View className="flex-row items-center gap-[10px]">
        <View
          style={{ backgroundColor: props.isTransfer ? "#5554ED" : "#EB963F" }}
          className="w-[43px] h-[43px] rounded-full items-center justify-center relative"
        >
          {props.isTransfer && (
            <Text className="font-gilroySemibold text-base text-white absolute">
              E
            </Text>
          )}

          {!props.isTransfer && (
            <Image
              source={require("@/assets/icons/trubooker.png")}
              className="w-5 h-5"
              contentFit="contain"
            />
          )}
        </View>

        <View className="gap-1">
          <Text className="font-gilroyMedium text-sm text-textColor">
            {props?.title}
          </Text>
          <Text className="font-gilroyMedium text-xs text-textColor">
            {props?.time}
          </Text>
        </View>
      </View>

      <Text className="font-gilroyMedium text-sm text-[#05CE66]">
        {props?.amount}
      </Text>
    </Pressable>
  );
};
