import { useIsFocused } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import type * as React from 'react';
import { StatusBar } from 'react-native';

type Props = React.ComponentProps<typeof StatusBar>;
export const FocusAwareStatusBar = (props: Props) => {
	const isFocused = useIsFocused();
	const { colorScheme } = useColorScheme();
	const isDark = colorScheme === 'dark';
	const barStyle = isDark ? 'dark-content' : 'dark-content';

	return isFocused ? <StatusBar barStyle={barStyle} {...props} /> : null;
};
