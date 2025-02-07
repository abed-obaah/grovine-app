import { ScreenLayout } from "@/components/screen-layout";
import { HEIGHT, Text, View } from "@/ui";
import { SimpleLineIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
// import MapView, { Marker } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
// import { generateNearbyCoordinates } from "../(index)";
import {
  BusStopMarker,
  CarMarker,
  DestinationMarker,
} from "@/components/markers";
import { LiveTrackingModal } from "@/components/home/search-modal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const Screen: React.FC = () => {
  const liveSheetModalRef = useRef<BottomSheetModal>(null);

  // const [cordinate, setCordinate] = useState<Location.LocationObjectCoords>();
  // const [drivers, setDrivers] = useState<Location.LocationObjectCoords[]>();
  // const [busStops, setBusStops] = useState<Location.LocationObjectCoords[]>();

  // useEffect(() => {
  //   Location.getLastKnownPositionAsync().then((res) => {
  //     if (res) {
  //       setCordinate(res.coords);
  //       setDrivers(generateNearbyCoordinates(res.coords));
  //       setBusStops(generateNearbyCoordinates(res.coords));
  //     }
  //   });
  // }, []);

  return (
    <ScreenLayout>
      <View className="flex-1 bg-white pt-10">
        <View className=" bg-white gap-4">
          <View className="flex-row items-center justify-between px-5 py-4">
            <TouchableOpacity onPress={() => router.navigate("bookings")}>
              <SimpleLineIcons name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <Text className="text-[16px] font-gilroySemibold">
              Live tracking
            </Text>
            <View className="w-6" />
          </View>

          <View className="w-full  px-4 pb-6">
            <View className="w-full bg-[#F7F7F7] rounded-lg flex-row items-center gap-[10px] px-[14px] py-[10px]">
              <View className="flex-1">
                <View className="w-full h-[46px] flex-row items-center gap-2 border-b border-b-[#66708580]">
                  <Feather name="map-pin" size={16} color="#5554ED" />

                  <Text className="font-gilroyRegular text-xs text-[#667085]">
                    123, test road, London
                  </Text>
                </View>

                <View className="w-full h-[46px] flex-row items-center gap-2 border-b border-b-transparent">
                  <MaterialCommunityIcons
                    name="map-marker-check-outline"
                    size={20}
                    color="#5554ED"
                  />

                  <Text className="font-gilroyRegular text-xs text-[#667085]">
                    Lokoga, kogi state
                  </Text>
                </View>
              </View>

              <Pressable
                onPress={() => liveSheetModalRef?.current?.present()}
                className="w-10 h-10 rounded-full border border-secondary items-center justify-center"
              >
                <Ionicons name="swap-vertical" size={20} color="#667085" />
              </Pressable>
            </View>
          </View>
        </View>
        <View className="flex-1 bg-[#F7F7F7]">
          {/* <View style={{ height: HEIGHT * 0.5 }} className="flex-1 relative">
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

          <View className="flex-1 bg-white" />

          <LiveTrackingModal bottomSheetModalRef={liveSheetModalRef} />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Screen;
