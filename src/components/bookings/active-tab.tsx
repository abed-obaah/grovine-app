import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { Button, Image, Pressable, Text, View, WIDTH } from "@/ui";
import { isRunningInExpoGo } from "expo";
import { router } from "expo-router";
import { DestinationMarker, DriverMaker } from "../markers";
import { useBookingTypes } from "@/api/bookings";

// type Props = {

// };
export const ActiveTab = () => {
  const bookingTypes = useBookingTypes('active');
  console.log("booking active;", bookingTypes?.data);
  // console.log("booking actives;", bookingTypes?.error?.response?.data);

  return (
    <View style={{ width: WIDTH }} className="flex-1">
      {/* <Empty /> */}

      <Active />
    </View>
  );
};

export const Empty = () => {
  
  return (
    <View className="flex-1 flex items-center justify-center gap-[30px] p-4">
      <View className="w-[178px] aspect-[178/224]">
        <Image
          source={require("@/assets/images/empty-bookings.svg")}
          contentFit="contain"
          className="w-full h-full"
        />
      </View>

      <View className="max-w-[80%]">
        <Text className="text-2xl font-gilroyBold text-textColor text-center">
          No Active trip yet!
        </Text>

        <Text className="text-sm font-gilroyRegular text-textColor text-center">
          Start your journey by booking a trip. Your active adventures will
          appear here
        </Text>
      </View>

      <View className="w-full">
        <Button label="Explore" fullWidth />
      </View>
    </View>
  );
};

export const Active = () => {
  
  return (
    <View className="flex-1 bg-white p-4">
      <View className="w-full aspect-[343/250] bg-[#FAF9F6] rounded-t-[10px] overflow-hidden">
        <View className="w-full h-[40px] bg-secondary flex flex-row items-center justify-between px-4 rounded-t-[10px]">
          <View className="flex items-center flex-row gap-[10px]">
            <Image
              source={require("@/assets/icons/forward.svg")}
              contentFit="contain"
              className="w-4 h-4"
            />

            <Text className="text-sm font-gilroyBold text-white">
              Trip in progress
            </Text>
          </View>

          <Text className="text-sm font-gilroyBold text-white">02:54:10</Text>
        </View>

        <View className="flex-1">
          {/* {!isRunningInExpoGo() ? (
						<View className="flex-1 flex items-center justify-center bg-[#F7F7F7]">
							<Text className="text-center text-textColor text-2xl font-gilroyMedium">
								Google Maps not available
							</Text>
						</View>
					) : ( */}
          <>
            <MapView
              provider={isRunningInExpoGo() ? undefined : PROVIDER_GOOGLE}
              userInterfaceStyle="light"
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: 4.8156,
                longitude: 7.0498,
                latitudeDelta: 0.0005,
                longitudeDelta: 0.0005,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 4.8156,
                  longitude: 7.0498,
                }}
                title="Driver Marker"
                description="This is the driver's vehicle marker"
              >
                <DriverMaker />
              </Marker>

              <Marker
                coordinate={{
                  latitude: 4.8196,
                  longitude: 7.0598,
                }}
                title="Destination Marker"
                description="This is the destination marker"
              >
                <DestinationMarker />
              </Marker>
            </MapView>
          </>
          {/* // )} */}
        </View>

        <View className="w-full flex flex-row items-center justify-between py-[10px] px-2">
          <Text className="font-gilroySemibold text-base text-textColor">
            Wuse bus station
          </Text>

          <Image
            source={require("@/assets/icons/arrow.svg")}
            className="w-[50px] h-[16px]"
            contentFit="contain"
          />

          <Text className="font-gilroySemibold text-base text-textColor text-right">
            Kogi bus station
          </Text>
        </View>

        <Pressable
          onPress={() => router.navigate("/trip/live")}
          className="w-full h-[54px] flex items-center justify-center border-t border-t-[#6670851A]"
        >
          <Text className="font-gilroyMedium text-sm text-secondary">
            Show live tracking
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
