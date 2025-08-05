import React from "react";
import { Image, Text, View } from "../../../ui"; // Update the path to the correct module

// type Props = {

// };
const Transactions = () => {
    return (
        <View className="w-full flex gap-4">
            {/* <Text className="font-gilroySemibold text-base text-black">
                My activity
            </Text> */}

            <View className="w-full flex gap-[10px]">
                
                <View className="w-full h-[75%] rounded-[10px]  gap-[10px] items-center px-[16px]">
                    <View className="flex flex-row items-center justify-between w-full pt-5">
                        <Text className="font-gilroySemibold text-lg text-textColor">
                            Recent Transactions
                        </Text>

                        <Text className="font-gilroyRegular text-sm text-textColor">
                        Today
                        </Text>
                    </View>
                   
                   
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/sportify.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    <View className="flex flex-row items-center justify-between w-full">
                        
                        <View className="flex flex-row items-center gap-2">
                                <Image
                            className="w-[39px] h-[51px]"
                            contentFit="contain"
                            source={require("../../../assets/images/netflix.png")}
                            />
                            <View>
                                    <Text className="font-gilroySemibold text-base text-black">
                                        Payment Successful
                                        </Text>
                                        <Text className="font-gilroyRegular text-sm text-textColor">
                                            Netflix
                                        </Text>
                            </View>
                        </View>
                            <Text className="font-gilroyBold text-sm text-[#A02724]">
                            -N17,000.00
                            </Text>
                    </View>
                    
                </View>

                
            </View>
        </View>
    );
};
export default Transactions;