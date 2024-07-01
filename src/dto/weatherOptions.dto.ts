export class WeatherOptionsDto{
    latitude: number;
    longitude: number;
    lang: string;
    units: string;
    version: string;

    constructor(latitude: number = 0, longitude: number = 0, lang: string = 'ru', units: string = 'standard', version: string = '2.5'){
        this.latitude = latitude;
        this.longitude = longitude;
        this.lang = lang;
        this.units = units;
        this.version = version;
    }
}