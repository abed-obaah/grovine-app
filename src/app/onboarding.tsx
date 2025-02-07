// import { LocationPermissionModal } from "@/components/location-permission-modal";
import { useIsFirstTime } from "@/core";
import { Image, Text, View } from "@/ui";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import type { ImageSourcePropType } from "react-native";

const { width } = Dimensions.get("window");

type SlideData = {
    id: string;
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
};

const slides = [
    {
        id: "1",
        image: require("@/assets/images/onboarding/image-1.png"),
        title: "Your Food Journey, Reimagined!",
        subtitle:
            "Discover fresh groceries, watch inspiring chef tutorials, and get everything delivered to your doorstep.",
    },
    {
        id: "2",
        image: require("@/assets/images/onboarding/image-2.png"),
        title: "Shop for Freshness, Anytime.",
        subtitle:
            "Browse a wide range of fresh produce, pantry staples, and more all tailored to your needs.",
    },
    {
        id: "3",
        image: require("@/assets/images/onboarding/image-5.png"),
        title: "Learn from Top Chefs.",
        subtitle:
            "Watch easy-to-follow tutorials and order all the ingredients with a single tap.",
    },
    {
        id: "4",
        image: require("@/assets/images/onboarding/image-4.png"),
        title: "From Us to Your Door.",
        subtitle:
            "Enjoy fast, reliable delivery that brings fresh groceries and meal inspirations to you.",
    },
    {
        id: "5",
        image: require("@/assets/images/onboarding/image-5.png"),
        title: "Share Your Cart, Save More!",
        subtitle:
            "Share your cart with friends and family. When they buy, your price drops automatically. A win-win for everyone!",
    },
];

const Slide = ({ item, currentSlideIndex }: { item: SlideData; currentSlideIndex: number }) => {
    function goToPreviousSlide(event: GestureResponderEvent): void {
        throw new Error("Function not implemented.");
    }

    return (
        <View
            style={{
                width,
            }}
            className="flex gap-[32px] px-4"
        >
            
            <View className="w-full aspect-[336/297] flex items-center justify-center">
                <Image
                    source={item?.image}
                    className="w-full h-full"
                    contentFit="contain"
                />
            </View>
            <View className="flex-row items-start justify-start gap-1 flex-1">
                {slides.map((_, index) => (
                    <View
                    key={index}
                    className={`h-[6px] bg-[#D9D9D9] rounded-full ${
                        currentSlideIndex === index ? "bg-secondary w-10" : "w-[10px] bg-[#B7E8BA]"
                    }`}
                    />
                ))}
            </View>
            <View className="w-full flex gap-[4px] -mt-5">
                <Text className="text-[#28282B] text-3xl  text-left font-gilroyBold">
                    {item?.title}
                </Text>
                <Text className="text-[#667085] text-lg text-left leading-6 font-gilroyRegular">
                    {item?.subtitle}
                </Text>
            </View>
        </View>
    );
};

const OnboardingScreen = () => {
    const { setIsFirstTime } = useIsFirstTime();

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef<FlatList<SlideData>>(null);

    const goToNextSlide = () => {
        if (currentSlideIndex === slides?.length - 1) return skip();

        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex < slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const goToPreviousSlide = () => {
        const previousSlideIndex = currentSlideIndex - 1;
        if (previousSlideIndex >= 0) {
            const offset = previousSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(previousSlideIndex);
        }
    };

    const skip = () => {
        setIsFirstTime(false);
        router.replace("/auth");
    };

    const Footer = () => {
        return (
            <View
                style={{
                    justifyContent: "space-between",
                    paddingHorizontal: 16,
                }}
            >
                <View className="flex-row justify-center" />
                <View className="flex-row justify-between items-center">
                    {/* {currentSlideIndex !== 0 ? (
                        <TouchableOpacity
                            className="h-[62px] w-[62px] rounded-full border border-[#667085] justify-center items-center"
                            onPress={goToPreviousSlide} 
                        >
                            <Feather name="arrow-left" size={24} color="#667085" />
                        </TouchableOpacity>
                    ) : (
                        <View className="h-[62px] w-[62px] rounded-full justify-center items-center" />
                    )}
                    <View className="flex-row items-center justify-center gap-1 flex-1">
                        {slides.map((_, index) => (
                            <View
                                key={index}
                                className={`h-[10px] bg-[#D9D9D9] rounded-full ${
                                    currentSlideIndex === index ? "bg-secondary w-20" : "w-[10px] bg-[#B7E8BA]"
                                }`}
                            />
                        ))}
                    </View> */}

                    <View className="h-[82px] w-[50%]  justify-center items-center">
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={goToNextSlide}
                            className="h-[62px] w-[100%] flex-row rounded-md bg-primary justify-center items-center space-x-4"
                        >
                            <Text className="text-[#F6F5F3]">Get Started</Text>
                            <Image
                            source={require("@/assets/images/logout.png")}
                            contentFit="contain"
                            className="w-8 h-4"
                        />
                            {/* <Feather name="arrow-right" size={24} color="white" /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar backgroundColor="white" />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingVertical: 28,
                }}
                keyboardShouldPersistTaps="handled"
                bounces={false} // Disable scroll bounce effect for ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 flex gap-6 justify-between">
                <View className="flex-row items-center justify-between w-full px-4">
                    {currentSlideIndex !== 0 ? (
                        <TouchableOpacity
                        className="h-[62px] w-[62px] justify-center items-center"
                        onPress={goToPreviousSlide}
                        >
                        <Feather name="arrow-left" size={20} color="#667085" />
                        </TouchableOpacity>
                    ) : (
                        <View className="h-[62px] w-[62px]" /> // Empty space to maintain alignment
                    )}

                    <TouchableOpacity onPress={skip}>
                        <Text className="text-black text-base">Skip</Text>
                    </TouchableOpacity>
                    </View>


                    <View className="">
                        <FlatList
                            ref={ref}
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={slides}
                            pagingEnabled
                            renderItem={({ item }) => <Slide item={item} currentSlideIndex={currentSlideIndex} />}
                            bounces={false}
                        />
                    </View>

                    <Footer />
                </View>
            </ScrollView>

            {/* <LocationPermissionModal /> */}
        </SafeAreaView>
    );
};

export default OnboardingScreen;
