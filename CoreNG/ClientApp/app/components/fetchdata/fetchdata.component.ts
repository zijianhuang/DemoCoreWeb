import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as namespaces from '../../../clientapi/WebApiNG2ClientAuto';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent implements OnInit {
	public forecasts: namespaces.CoreNG_Controllers_Client.WeatherForecast[];

	constructor(@Inject(namespaces.CoreNG_Controllers_Client.SampleData) private clientService: namespaces.CoreNG_Controllers_Client.SampleData) {
	}

	ngOnInit() {
		this.clientService.weatherForecasts().subscribe(
			data => {
				this.forecasts = data;
			},
			error => {
				console.error(error);
			}
		);
	}
}
