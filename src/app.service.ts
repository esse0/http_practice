import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ResponseDto } from './dto/response.dto';
import { WeatherOptionsDto } from './dto/weatherOptions.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {}

  async sendRequestToOpenWeatherMapApi(method: string, weatherOptions: WeatherOptionsDto, token: string = this.openWeatherMapApiKey) {
    try{
      let response = await this.httpService.axiosRef.request({url: this.getOpenWeatherMapUri(weatherOptions, token), method: method});

      return new ResponseDto(response.data, response.status, response.statusText);
    }
    catch(err){
      return new ResponseDto(err, undefined, undefined);
    }
  }


  async testss(){
    try{
      let response = await this.httpService.axiosRef.request({url: `https://bulk.openweathermap.org/snapshot/weather_zip_us.csv.gz?appid=${this.openWeatherMapApiKey}`, method: 'GET'});

      return new ResponseDto(response.data, response.status, response.statusText);
    }
    catch(err){
      return new ResponseDto(err, undefined, undefined);
    }
  }

  private get openWeatherMapApiKey(){
    return this.configService.get('API_KEY');
  }

  private getOpenWeatherMapUri(weatherOptions: WeatherOptionsDto, token: string){
    return `https://api.openweathermap.org/data/${weatherOptions.version}/weather?appid=${token}&lat=${weatherOptions.latitude}&lang=${weatherOptions.lang}&units=${weatherOptions.units}&lon=${weatherOptions.longitude}`;
  }
}
