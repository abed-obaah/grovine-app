import * as React from "react";
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { useController } from "react-hook-form";
import type { TextInput, TextInputProps } from "react-native";
import { I18nManager, Platform, StyleSheet, View } from "react-native";
import { TextInput as NTextInput } from "react-native";
import { tv } from "tailwind-variants";

import { Text } from "./text";

const inputTv = tv({
  slots: {
    container: "flex gap-[6px]",
    label: "font-gilroyMedium text-sm text-[#344054]",
    input:
      "h-[50px] flex flex-row items-center rounded-[8px] border-[1px] border-[#66708533] bg-transparent px-[14px] font-gilroyRegular text-sm text-[#344054]",
  },

  variants: {
    focused: {
      true: {
        input: "border-primary",
      },
    },
    error: {
      true: {
        input: "border-danger-600",
        label: "text-danger-600 dark:text-danger-600",
      },
    },
    disabled: {
      true: {
        input: "bg-neutral-200",
      },
    },
    sm: {
      true: {
        container: "w-full",
        input: "h-[36px] font-gilroyMedium text-[#667085] px-[10px]",
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
    sm: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  sm?: boolean;
  leftIconComponent?: React.ReactNode;
  rightIconComponent?: React.ReactNode;
  isTextArea?: boolean;
  rows?: number;
}

type TRule = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, sm, testID, isTextArea, rows, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
        sm: sm,
      }),
    [error, isFocussed, props.disabled, sm]
  );

  return (
    <View className={styles.container()}>
      {label && (
        <Text
          testID={testID ? `${testID}-label` : undefined}
          className={styles.label()}
        >
          {label}
        </Text>
      )}

      <View className="w-full">
        <View className="w-full relative">
          {props?.leftIconComponent && props?.leftIconComponent}

          <NTextInput
            testID={testID}
            ref={ref}
            placeholderTextColor={"#667085"}
            className={styles.input()}
            onBlur={onBlur}
            onFocus={onFocus}
            textAlignVertical={isTextArea ? "top" : "center"}
            multiline={isTextArea}
            numberOfLines={
              Platform.OS === "ios"
                ? undefined
                : isTextArea && rows
                ? rows
                : isTextArea
                ? 15
                : 1
            }
            {...inputProps}
            style={StyleSheet.flatten([
              { writingDirection: I18nManager.isRTL ? "rtl" : "ltr" },
              inputProps.style,
            ])}
          />

          {props?.rightIconComponent && props?.rightIconComponent}
        </View>

        {error && (
          <Text
            testID={testID ? `${testID}-error` : undefined}
            className="text-sm text-danger-400 dark:text-danger-600"
          >
            {error}
          </Text>
        )}
      </View>
    </View>
  );
});

// only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  //   @ts-expect-error
  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={(field.value as string) || ""}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
