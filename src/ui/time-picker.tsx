import { Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useState } from "react";

import { Text } from "./text";
import React from "react";

type Props = {
	placeholder: string;
};

export const TimePicker = ({ placeholder }: Props) => {
	const [isDateTimePickerVisible, setDateTimePickerVisibility] =
		useState(false);
	const [selected, setSelected] = useState<Date>();

	const showDatePicker = () => {
		setDateTimePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDateTimePickerVisibility(false);
	};

	const handleConfirm = (date: Date) => {
		setSelected(date);
		hideDatePicker();
	};

	return (
		<>
			<Pressable
				onPress={showDatePicker}
				className="w-full h-[36px] rounded-[8px] border-[1px] border-[#66708533] px-[10px] flex items-center flex-row justify-between"
			>
				{selected ? (
					<Text className="text-sm font-gilroyMedium text-textColor">
						{selected.toTimeString()}
					</Text>
				) : (
					<Text className="text-sm font-gilroyMedium text-subTextColor">
						{placeholder}
					</Text>
				)}
			</Pressable>

			<DateTimePickerModal
				isVisible={isDateTimePickerVisible}
				mode="time"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				date={selected}
			/>
		</>
	);
};
