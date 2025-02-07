import { create } from "zustand";

import { getItem, setItem } from "../storage";

const IS_FIRST_TIME = "IS_FIRST_TIME";

interface FirstTimeState {
	isFirstTime: boolean;
	setIsFirstTime: (value: boolean) => void;
	// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
	getIsFirstTime: () => Promise<string | null | undefined | void>;
}

export const useIsFirstTime = create<FirstTimeState>((set) => ({
	isFirstTime: true,
	setIsFirstTime: (value) => {
		set({ isFirstTime: value });
		setItem<string>(IS_FIRST_TIME, String(value));
	},
	getIsFirstTime: async () =>
		await getItem<string | null>(IS_FIRST_TIME).then((res) => {
			if (res === "true" || !res) {
				set({ isFirstTime: true });
			} else {
				set({ isFirstTime: false });
			}
		}),
}));
