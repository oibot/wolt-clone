import { Nunito_700Bold, Nunito_900Black } from "@expo-google-fonts/nunito";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashSceen from "expo-splash-screen";
import { useEffect } from "react";

const queryClient = new QueryClient();

SplashSceen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({ Nunito_700Bold, Nunito_900Black });

  useEffect(() => {
    if (loaded || error) {
      SplashSceen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
