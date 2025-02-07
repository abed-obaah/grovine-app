import { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { View, Text } from "src/ui";
import { MaterialIcons } from "@expo/vector-icons";

const people = [
  { name: "Trip 5% off", username: "Expires in 30 days" },
  { name: "Trip 5% off", username: "Expires in 15 days" },
  { name: "Trip 5% off", username: "Expires in 2 days" },
];

export default function Example() {
  const [selected, setSelected] = useState<{
    name: string;
    username: string;
  } | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (person: { name: string; username: string }) => {
    setSelected(person);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const getStyleForExpiry = (expiry: string) => {
    switch (expiry) {
      case "Expires in 30 days":
      case "Expires in 15 days":
        return "inline-flex items-center rounded-full bg-[#FD8C001A] px-4 py-1 text-md font-gilroyMedium text-[#FD8C00] ring-1 ring-inset ring-yellow-600/20";
      case "Expires in 2 days":
        return "inline-flex items-center rounded-full bg-[#B3261E1A] px-4 py-1 text-md font-gilroyMedium text-[#B3261E] ring-1 ring-inset ring-red-600/10";
      default:
        return "";
    }
  };

  return (
    <View className="">
      {/* Button to toggle dropdown */}
      <TouchableOpacity
        className="mt-2 w-full bg-white rounded-md py-3 px-4 flex-row justify-between items-center shadow-sm"
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <View className="flex-row">
          <Text className="text-[#28282B] font-gilroyMedium truncate">
            {selected ? selected.name : "Select a coupon"}
          </Text>
        </View>
        <MaterialIcons
          name={dropdownOpen ? "expand-less" : "expand-more"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>

      {/* Display dropdown options if open */}
      {dropdownOpen && (
        <View className="bg-white mt-1 rounded-md shadow-sm border border-gray-200 max-h-60">
          <FlatList
            data={people}
            keyExtractor={(item) => item.username}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex-row justify-between py-2 px-4 border-b border-gray-200"
                onPress={() => handleSelect(item)}
              >
                <View className="flex-row">
                  <Text className="text-gray-900 truncate">{item.name}</Text>
                </View>
                <Text className={`ml-2 ${getStyleForExpiry(item.username)}`}>
                  {item.username}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
