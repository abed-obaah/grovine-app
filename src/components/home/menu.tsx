import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";

import { Image, Pressable } from "src/ui";

type Props = {
  isAbsolute?: boolean;
};

export const MenuButton = ({ isAbsolute = true }: Props) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Pressable
      onPress={() => navigation.toggleDrawer()}
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
      }}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${
        isAbsolute && "absolute top-[60px] left-5"
      } bg-white`}
    >
      <Image
        source={require("../../assets/icons/menu.svg")}
        className="w-[18px] h-3"
        contentFit="contain"
      />
    </Pressable>
  );
};
