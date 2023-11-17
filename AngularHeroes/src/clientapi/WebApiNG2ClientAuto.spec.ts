import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { DemoWebApi_DemoData_Client, DemoWebApi_Controllers_Client } from './WebApiCoreNg2ClientAuto';

//const apiBaseUri = 'http://fonlow.org/'; // for DemoCoreWeb hosted in server of different timezone.
const apiBaseUri = 'http://localhost:5000/'; // for DemoCoreWeb


export function valuesClientFactory(http: HttpClient) {
	return new DemoWebApi_Controllers_Client.Values(apiBaseUri, http);
}

export function heroesClientFactory(http: HttpClient) {
	return new DemoWebApi_Controllers_Client.Heroes(apiBaseUri, http);
}

export function entitiesClientFactory(http: HttpClient) {
	return new DemoWebApi_Controllers_Client.Entities(apiBaseUri, http);
}

export function superDemoClientFactory(http: HttpClient) {
	return new DemoWebApi_Controllers_Client.SuperDemo(apiBaseUri, http);
}
export function dateTypesClientFactory(http: HttpClient) {
	return new DemoWebApi_Controllers_Client.DateTypes(apiBaseUri, http);
}

export function tupleClientFactory(http: HttpClient) {
	return new DemoWebApi_Controllers_Client.Tuple(apiBaseUri, http);
}

export function errorResponseToString(error: HttpErrorResponse | any,): string {
	let errMsg: string;
	if (error instanceof HttpErrorResponse) {
		if (error.status === 0) {
			errMsg = 'No response from backend. Connection is unavailable.';
		} else {
			if (error.message) {
				errMsg = `${error.status} - ${error.statusText}: ${error.message}`;
			} else {
				errMsg = `${error.status} - ${error.statusText}`;
			}
		}

		errMsg += error.error ? (' ' + JSON.stringify(error.error)) : '';
		return errMsg;
	} else {
		errMsg = error.message ? error.message : error.toString();
		return errMsg;
	}
}

export function errorResponseBodyToString(error: HttpErrorResponse | any,): string {
	let errMsg: string;
	if (error instanceof HttpErrorResponse) {
		if (error.status === 0) {
			errMsg = 'No response from backend. Connection is unavailable.';
		} else {
			errMsg = JSON.stringify(error.error);
		}

		return errMsg;
	} else {
		errMsg = error.message ? error.message : error.toString();
		return errMsg;
	}
}


describe('Values API', () => {
	let service: DemoWebApi_Controllers_Client.Values;

	beforeEach(async(() => {

		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [
				{
					provide: DemoWebApi_Controllers_Client.Values,
					useFactory: valuesClientFactory,
					deps: [HttpClient],

				},

			]
		});

		service = TestBed.get(DemoWebApi_Controllers_Client.Values);
	}));

	afterEach(function () {
	});

	it('get', (done) => {
		service.get().subscribe(
			data => {
				console.debug(data!.length);
				expect(data![1]).toBe('value2');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('getByIdAndName', (done) => {
		service.getByIdAndName(1, 'Abc').subscribe(
			data => {
				console.debug(data!.length);
				expect(data).toBe('Abc1');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('getByName', (done) => {
		service.getByName('Abc').subscribe(
			data => {
				console.debug(data!.length);
				expect(data).toBe('ABC');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('Post', (done) => {
		service.post('Abc').subscribe(
			data => {
				console.debug(data!.length);
				expect(data).toBe('ABC');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('getByIdAndChinese', (done) => {
		service.getByIdAndName(1, 'something to say中文\\`-=|~!@#$%^&*()_+/|?[]{},.\'; <>: \"').subscribe(
			data => {
				console.debug(data!.length);
				expect(data).toBe('something to say中文\\`-=|~!@#$%^&*()_+/|?[]{},.\'; <>: \"1');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);
	}
	);



});


describe('Heroes API', () => {
	let service: DemoWebApi_Controllers_Client.Heroes;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [
				{
					provide: DemoWebApi_Controllers_Client.Heroes,
					useFactory: heroesClientFactory,
					deps: [HttpClient],

				},

			]
		});

		service = TestBed.get(DemoWebApi_Controllers_Client.Heroes);
	}));

	it('getAll', (done) => {
		service.getHeros().subscribe(
			data => {
				console.debug(data!.length);
				expect(data!.length).toBeGreaterThan(0);
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);

	}
	);

	it('getHero', (done) => {
		service.getHero(9999).subscribe(
			data => {
				expect(data).toBeNull();
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);

	}
	);

	it('Add', (done) => {
		service.post('somebody').subscribe(
			data => {
				expect(data!.name).toBe('somebody');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);

	}
	);

	/**
	 * The service always returns an object and the return is decorated with NotNullAttribute.
	 */
	it('PostWithQuery', (done) => {
		service.postWithQuery('somebodyqqq').subscribe(
			data => {
				expect(data.name).toBe('somebodyqqq');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);

	}
	);

	it('search', (done) => {
		service.search('Torna').subscribe(
			data => {
				console.debug(data!.length);
				expect(data!.length).toBe(1);
				expect(data![0].name).toBe('Tornado');
				done();
			},
			error => {
				fail(errorResponseToString(error));
				done();
			}
		);

	}
	);

});
