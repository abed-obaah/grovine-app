import type { Theme } from '@react-navigation/native';
import {
	DefaultTheme,
	DarkTheme as _DarkTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import colors from 'src/ui/colors';

const DarkTheme: Theme = {
	..._DarkTheme,
	colors: {
		..._DarkTheme.colors,
		primary: colors.primary,
		background: colors.charcoal[950],
		text: colors.charcoal[100],
		border: colors.charcoal[500],
		card: colors.charcoal[850],
	},
};

const LightTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
		background: colors.white,
	},
};

export function useThemeConfig() {
	const { colorScheme } = useColorScheme();

	if (colorScheme === 'dark') return DarkTheme;

	return LightTheme;
}
