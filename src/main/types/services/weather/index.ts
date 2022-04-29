import { AxiosError } from 'axios';
import { IWeatherData } from '../../../../config';

export interface IGetCityWeatherHook {
  data: IWeatherData | null;
  isLoading: boolean;
  error: AxiosError | null;
}
