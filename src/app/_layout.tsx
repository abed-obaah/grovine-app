import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import "../styles/global.css";

import { APIProvider } from "src/api/common";
import { loadSelectedTheme, useIsFirstTime } from "src/core";
// import { useThemeConfig } from "@/core/use-theme-config";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(app)",
};

// hydrateAuth();
loadSelectedTheme();
useIsFirstTime.getState().getIsFirstTime();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		"Gilroy-Bold": require("../assets/fonts/Gilroy-Bold.ttf"),
		"Gilroy-Light": require("../assets/fonts/Gilroy-Light.ttf"),
		"Gilroy-Medium": require("../assets/fonts/Gilroy-Medium.ttf"),
		"Gilroy-Regular": require("../assets/fonts/Gilroy-Regular.ttf"),
		"Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Providers>
			<Stack>
				<Stack.Screen name="(app)" options={{ headerShown: false }} />
				<Stack.Screen name="onboarding" options={{ headerShown: false }} />
				<Stack.Screen name="auth" options={{ headerShown: false }} />
				<Stack.Screen name="route" options={{ headerShown: false }} />
				<Stack.Screen name="trip" options={{ headerShown: false }} />
				<Stack.Screen name="order" options={{ headerShown: false }} />
				<Stack.Screen name="saved-recipe" options={{ headerShown: false }} />
				<Stack.Screen name="story" options={{ headerShown: false }} />
			</Stack>
		</Providers>
	);
}

function Providers({ children }: { children: React.ReactNode }) {
	// const theme = useThemeConfig();
	return (
		<GestureHandlerRootView
			style={styles.container}
			// className={theme.dark ? "dark" : undefined}
		>
			{/* <ThemeProvider value={theme}> */}
			<APIProvider>
				<BottomSheetModalProvider>
					{children}
					<FlashMessage position="top" />
				</BottomSheetModalProvider>
			</APIProvider>
			{/* </ThemeProvider> */}
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
