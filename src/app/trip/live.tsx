import AntDesign from "@expo/vector-icons/AntDesign";
import * as Location from "expo-location";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { ScreenLayout } from "@/components/screen-layout";

import {
  BusStopMarker,
  CarMarker,
  DestinationMarker,
} from "@/components/markers";
import { LiveModal } from "@/components/trip/live-modal";
import { HEIGHT, Image, Pressable, Text, View } from "@/ui";
import { isRunningInExpoGo } from "expo";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function Screen() {
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

  return (
    <ScreenLayout useStaticView backgroundColor="#FFFFFF">
      <View className="pt-[20px]">
        <View className="w-full px-4 py-[26px] flex flex-row items-center justify-center relative bg-white">
          <Pressable
            onPress={() => router.back()}
            className="absolute left-[16px]"
          >
            <AntDesign name="left" size={24} color="black" />
          </Pressable>

          <View className="flex flex-row items-center gap-2">
            <Image
              source={require("@/assets/icons/arrow-two-way.svg")}
              className="w-6 h-6"
              contentFit="contain"
            />

            <Text className="text-base text-textColor font-gilroyBold">
              Turn right after 2km
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-1">
        <View style={{ height: 0.6 * HEIGHT }} className="w-full relative">
          {/* {!isRunningInExpoGo() ? (
            <View className="flex-1 flex items-center justify-center bg-[#F7F7F7]">
              <Text className="text-center text-textColor text-2xl font-gilroyMedium">
                Google Maps not available
              </Text>
            </View>
          ) : (
            <> */}
         <View className="flex-1 flex items-center justify-center bg-[#F7F7F7]">
              <Text className="text-center text-textColor text-2xl font-gilroyMedium">
                Google Maps not available
              </Text>
            </View>
          {/* </>
          )} */}
        </View>
        <View className="flex-1" />
      </View>

      <LiveModal />
    </ScreenLayout>
  );
}

/**
 * Generates a random offset for a geographical coordinate.
 * @param meters - The radius in meters to vary the location.
 * @returns A random offset in degrees.
 */
function getRandomCoordinateOffset(meters: number): number {
  // Approximately 1 degree of latitude or longitude at the equator represents about 111 kilometers (or 111000 meters).
  // Thus, to convert a random meter value into a degree value, we use the conversion factor 1 / 111000.
  const degreeConversionFactor = 1 / 111000;
  return (Math.random() - 0.5) * 2 * (meters * degreeConversionFactor);
}

/**
 * Generates an array of random coordinates around a given coordinate within a specified radius.
 * @param origin - The original coordinate from which to base the offsets.
 * @returns An array of randomly generated nearby coordinates.
 */
function generateNearbyCoordinates(
  origin: Location.LocationObjectCoords
): Location.LocationObjectCoords[] {
  const nearbyCoordinates: Location.LocationObjectCoords[] = [];
  const radius = 250; // meters

  for (let i = 0; i < 5; i++) {
    nearbyCoordinates.push({
      latitude: origin.latitude + getRandomCoordinateOffset(radius),
      longitude: origin.longitude + getRandomCoordinateOffset(radius),
      altitude: origin.altitude, // Optionally, add random variation to altitude
      accuracy: origin.accuracy,
      altitudeAccuracy: origin.altitudeAccuracy,
      heading: Math.random() * 360, // Random heading between 0 and 360
      speed: origin.speed,
    });
  }

  return nearbyCoordinates;
}
