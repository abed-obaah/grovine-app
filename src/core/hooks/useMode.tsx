import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MODE_KEY = 'APP_USER_MODE';

export const useMode = () => {
  const [mode, setMode] = useState<'user' | 'chef'>('user');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMode = async () => {
      const storedMode = await AsyncStorage.getItem(MODE_KEY);
      if (storedMode === 'chef' || storedMode === 'user') {
        setMode(storedMode);
      }
      setLoading(false);
    };
    getMode();
  }, []);

  const switchMode = async (newMode) => {
    await AsyncStorage.setItem(MODE_KEY, newMode);
    setMode(newMode);
  };

  return { mode, switchMode, loading };
};
