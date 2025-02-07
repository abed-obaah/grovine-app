import { FocusAwareStatusBar, ScrollView, View } from "src/ui";

type Props = {
  children: React.ReactNode;
  floatingComponent?: React.ReactNode;
  useStaticView?: boolean;
  backgroundColor?: string;
};

export const ScreenLayout = ({
  children,
  floatingComponent,
  useStaticView = false,
  backgroundColor = "white",
}: Props) => {
  return (
    <View style={{ backgroundColor }} className="flex-1 relative">
      <FocusAwareStatusBar />
      {useStaticView ? (
        <>{children}</>
      ) : (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustKeyboardInsets
        >
          <FocusAwareStatusBar />
          {children}
        </ScrollView>
      )}

      {floatingComponent && floatingComponent}
    </View>
  );
};
