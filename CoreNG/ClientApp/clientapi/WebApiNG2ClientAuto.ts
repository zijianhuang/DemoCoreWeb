import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace CoreNG_Controllers_Client {
    export interface WeatherForecast {
        dateFormatted?: string;
        temperatureC?: number;
        summary?: string;
        temperatureF?: number;
    }

}

export namespace CoreNG_Controllers_Client {
    @Injectable()
    export class SampleData {
        constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
        }

        /**
         * Get random weather forecast
         * GET api/SampleData/WeatherForecasts
         * @return {Array<CoreNG_Controllers_Client.WeatherForecast>} A list of random weather data
         */
        weatherForecasts(): Observable<Array<CoreNG_Controllers_Client.WeatherForecast>> {
            return this.http.get<Array<CoreNG_Controllers_Client.WeatherForecast>>(this.baseUri + 'api/SampleData/WeatherForecasts');
        }
    }

}

