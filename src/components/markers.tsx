import { Image, Text, View } from "src/ui";

type CarMarkerProps = {
  heading: number | null; // Heading in degrees
};

export const CarMarker = ({ heading }: CarMarkerProps) => {
  return (
    <View
      className="w-12 h-12"
      style={{
        transform: [{ rotate: `${heading}deg` }], // Rotate the marker according to the heading
      }}
    >
      <Image
        source={require("../assets/icons/car.png")}
        contentFit="contain"
        className="w-full h-full"
      />
    </View>
  );
};

export const BusStopMarker = () => {
  return (
    <View className="w-12 h-12">
      <Image
        source={require("../assets/icons/bus-stop.png")}
        contentFit="contain"
        className="w-full h-full"
      />
    </View>
  );
};

export const DestinationMarker = () => {
  return (
    <View className="w-10 flex items-center justify-center">
      <View className="w-10 flex items-center justify-center aspect-square bg-[#2EB565] rounded-full">
        <Text className="text-xs text-white font-gilroyMedium text-center leading-none">
          20
        </Text>
        <Text className="text-xs text-white font-gilroyMedium text-center leading-none">
          min
        </Text>
      </View>

      <View className="w-1 h-[14px] bg-[#2EB565] rounded-b-full" />
    </View>
  );
};
