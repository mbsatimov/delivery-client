import { ASYNC_STORE_KEY } from '@/utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = async () => {
  AsyncStorage.removeItem(ASYNC_STORE_KEY.TOKEN);
};
