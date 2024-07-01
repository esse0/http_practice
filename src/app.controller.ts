import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDto } from './dto/response.dto';
import { WeatherOptionsDto } from './dto/weatherOptions.dto';

@Controller('openweathermap')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ok')
  OK() : Promise<ResponseDto> {
    return this.appService.sendRequestToOpenWeatherMapApi('GET', new WeatherOptionsDto(59, 59, 'en'));
  }

  @Get('badrequest_400')
  BadRequest400() : Promise<ResponseDto> {
    return this.appService.sendRequestToOpenWeatherMapApi('GET', new WeatherOptionsDto(-100000, -100000, 'en'));
  }

  @Get('badrequest_405')
  BadRequest405() : Promise<ResponseDto> {

    return this.appService.sendRequestToOpenWeatherMapApi('PUT', new WeatherOptionsDto(59, 59, 'en'));
  }

  @Get('unauthorized')
  Unauthorized() : Promise<ResponseDto> {
    return this.appService.sendRequestToOpenWeatherMapApi('GET', new WeatherOptionsDto(59, 59, 'en'), 'qwe');
  }

  @Get('notfound')
  NotFound() : Promise<ResponseDto> {
    return this.appService.sendRequestToOpenWeatherMapApi('GET', new WeatherOptionsDto(59, 59, 'en', undefined, '2.6'));
  }

  @Get('tomanyrequests')
  async ToManyRequests() : Promise<ResponseDto> {
    return this.appService.testss();
  }
}
