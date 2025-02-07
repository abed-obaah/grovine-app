import * as Location from "expo-location";
// import MapView, { Marker } from "react-native-maps";
import React, { useRef, useMemo, useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { RouteInputForm } from "src/components/route/route-form";
import { Pressable, Text, View, Image } from "src/ui";
import { router } from "expo-router";
import { ScreenLayout } from "../../components/screen-layout";
import BottomSheet from "@gorhom/bottom-sheet";
import { generateNearbyCoordinates } from "../(app)/(index)";
import { CarMarker, DestinationMarker } from "src/components/markers";
// import React from "react";
import { Marker } from "react-native-svg";

export default function Screen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [cordinate, setCordinate] = useState<Location.LocationObjectCoords>();
  const [drivers, setDrivers] = useState<Location.LocationObjectCoords[]>();
  const [busStops, setBusStops] = useState<Location.LocationObjectCoords[]>();

  useEffect(() => {
    Location.getLastKnownPositionAsync().then((res) => {
      if (res) {
        setCordinate(res.coords);
        setDrivers(generateNearbyCoordinates(res.coords));
        setBusStops(generateNearbyCoordinates(res.coords));
      }
    });
  }, []);

  // Snap points for the bottom sheet (20% height)
  const snapPoints = useMemo(() => [176], []);

  return (
    <ScreenLayout useStaticView backgroundColor="#FAF9F6">
      <View className="w-full px-4 pb-[30px] flex gap-4 bg-white">
        <View className="w-full flex gap-4 bg-white">
          <View className="w-full flex flex-row items-center justify-between pt-[40px] pb-5 relative">
            <Pressable onPress={() => router.back()} className="">
              <AntDesign name="left" size={24} color="black" />
            </Pressable>

            <View className="flex-1 flex items-center justify-center">
              <Text className="text-textColor font-gilroySemibold text-lg">
                Track bus
              </Text>
            </View>

            <Pressable>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="black"
              />
            </Pressable>
            {/* <Image
              source={require("../assets/icons/elipsis.svg")}
              contentFit="contain"
              className="w-4 h-4"
            /> */}
          </View>
        </View>

        <View className="w-full ">
          <View className="w-full flex gap-[10px]">
            <RouteInputForm />
          </View>
        </View>
      </View>

      {/* <View className="flex-1">
        {cordinate && (
          <MapView
            userInterfaceStyle="light"
            style={{ width: "100%", height: "100%" }}
            initialRegion={{
              latitude: cordinate?.latitude,
              longitude: cordinate?.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            {drivers && (
              <Marker
                key={drivers[0].longitude}
                coordinate={{
                  latitude: drivers[0].latitude,
                  longitude: drivers[0].longitude,
                }}
                title="Driver Marker"
                description="This is the driver's vehicle marker"
              >
                <CarMarker heading={drivers[0].heading} />
              </Marker>
            )}

            {busStops && (
              <Marker
                key={busStops[0].longitude}
                coordinate={{
                  latitude: busStops[0].latitude,
                  longitude: busStops[0].longitude,
                }}
                title="Bus stop Marker"
                description="This is the bus stop marker"
              >
                <DestinationMarker />
              </Marker>
            )}
          </MapView>
        )}
      </View> */}

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0} // Always open
        snapPoints={snapPoints}
        handleStyle={{
          backgroundColor: "transparent", // Keep handle background transparent
        }}
        handleIndicatorStyle={{
          backgroundColor: "gray",
          width: 60,
          height: 6,
          borderRadius: 3,
        }}
      >
        <View style={{ padding: 16, flex: 1, backgroundColor: "white" }}>
          <Text style={{ marginLeft: 10 }}>
            <Text className="font-gilroyBold text-[#5554ED] text-2xl">
              2 hours 50 mins
            </Text>{" "}
            <Text className="font-gilroyBold text-2xl"> (106 km)</Text>
          </Text>
          <View
            className="border border-[#5554EDF5] bg-[#5554ED26] p-4 px-4 mx-auto rounded-xl mt-5"
            style={{ marginLeft: 10 }}
          >
            <Text className="font-gilroyMedium text-[#28282B] text-md">
              Time taken may vary according to the conditions related to the
              road, weather and traffic.
            </Text>
          </View>
        </View>
      </BottomSheet>
    </ScreenLayout>
  );
}
