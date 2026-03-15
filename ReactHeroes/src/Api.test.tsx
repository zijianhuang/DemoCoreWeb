import * as moment from 'moment';
import * as namespaces from './clientapi/WebApiFetchClientAuto';
//import * as namespaces from './clientapi/WebApiFetchClientAuto';
const DemoWebApi_Controllers_Client = namespaces.DemoWebApi_Controllers_Client;

describe('Basic', () => {
	it('simple 1', done => {
		expect(true).toBeTruthy();
		done();
	});

	it('simple 2', done => {

		expect(true).toBeTruthy();
		done();
	});

});

const baseUri = 'http://localhost:5000/';

describe('Values', () => {
	const api = new DemoWebApi_Controllers_Client.Values(baseUri);

	it('get', (done) => {
		api.get().then(
			data => {
				console.debug(data.length);
				expect(data[1]).toBe('value2');
				done();
			},
			error => {
				// fail(errorResponseToString(error));
				done();
			}
		);
	}
	);

	it('Post', (done) => {
		api.post('Abc').then(
			data => {
				console.debug(data.length);
				expect(data).toBe('ABC');
				done();
			},
			error => {
				//  fail(errorResponseToString(error));
				done();
			}
		);
	}
	);
});

describe('Heroes API', () => {
	const service = new namespaces.DemoWebApi_Controllers_Client.Heroes(baseUri);

	it('Add', (done) => {
		service.post('somebody').then(
			data => {
				console.info('Add hero: ' + JSON.stringify(data));
				expect(data.name).toBe('somebody');
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('PostWithQuery', (done) => {
		service.postWithQuery('somebodyqqq').then(
			data => {
				expect(data.name).toBe('somebodyqqq');
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('search', (done) => {
		service.search('Torna').then(
			data => {
				console.debug(data.length);
				expect(data.length).toBe(1);
				expect(data[0].name).toBe('Tornado');
				done();
			},
			error => {

				done();
			}
		);

	}
	);

});


describe('entities API', () => {
	const client = new namespaces.DemoWebApi_Controllers_Client.Entities(baseUri);

	//it('getPersonNotFound', (done) => {
	//    client.getPersonNotFound(123)
	//        .then(
	//        data => {
	//            fail('That is bad. Should be 404.');
	//            done();
	//        },
	//        error => {
	//            expect(errorResponseToString(error)).toContain('404');
	//            done();
	//        }
	//        );
	//}
	//);

	it('add', (done) => {
		let id: string;
		const newPerson: namespaces.DemoWebApi_DemoData_Client.Person = {
			name: 'John Smith' + Date.now().toString(),
			givenName: 'John',
			surname: 'Smith',
			dob: new Date('1977-12-28')
		};

		client.createPerson(newPerson)
			.then(
				data => {
					id = data;
					expect(data).toBeTruthy();
					done();
				},
				error => {

					done();
				}
			);

	}
	);

});

describe('Tuple API', () => {
	const service = new namespaces.DemoWebApi_Controllers_Client.Tuple(baseUri);


	it('getTuple2', (done) => {
		service.getTuple2().then(
			data => {
				expect(data.item1).toBe('Two');
				expect(data.item2).toBe(2);
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('postTuple2', (done) => {
		service.postTuple2({ item1: "One", item2: 2 }).then(
			data => {
				expect(data).toBe('One');
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('getTuple7', (done) => {
		service.getTuple7().then(
			data => {
				expect(data.item1).toBe('Seven');
				expect(data.item7).toBe(7);
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('getTuple2', (done) => {
		service.getTuple2().then(
			data => {
				expect(data.item1).toBe('Two');
				expect(data.item2).toBe(2);
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('postTuple7', (done) => {
		service.postTuple7({ item1: 'One', item2: '', item3: '', item4: '', item5: '', item6: '33333', item7: 9 }).then(
			data => {
				expect(data).toBe('One');
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('getTuple8', (done) => {
		service.getTuple8().then(
			data => {
				expect(data.item1).toBe('Nested');
				expect(data.rest.item1).toBe('nine');
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('postTuple8', (done) => {
		service.postTuple8({ item1: 'One', item2: '', item3: '', item4: '', item5: '', item6: '', item7: '', rest: { item1: 'a', item2: 'b', item3: 'c' } }).then(
			data => {
				expect(data).toBe('a');
				done();
			},
			error => {

				done();
			}
		);
	}
	);

	it('linkPersonCompany1', (done) => {
		service.linkPersonCompany1({
			item1: {
				name: 'someone',
				surname: 'my',
				givenName: 'something',
			},

			item2: {
				name: 'Super',
				addresses: [{ city: 'New York', street1: 'Somewhere st' }]
			}
		}).then(
			data => {
				expect(data.name).toBe('someone');
				done();
			},
			error => {

				done();
			}
		);
	}
	);

});


describe('DateTypes API', () => {
	const service = new namespaces.DemoWebApi_Controllers_Client.DateTypes(baseUri);

	it('getDateTime', (done) => {
		service.getDateTime(true).then(
			data => {
				expect(data).toBeDefined();
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('getDateTimeNull', (done) => {
		service.getDateTime(false).then(
			data => {
				expect(data).toBeNull();// Aurelia httpclient throws error upon 204.
				done();
			},
			error => {
				expect(true).toBeTruthy();
				done();
			}
		);

	}
	);

});


describe('SuperDemo API', () => {
	const service = new namespaces.DemoWebApi_Controllers_Client.SuperDemo(baseUri);

	it('getBool', (done) => {
		service.getBool().then(
			data => {
				expect(data).toBeTruthy();
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getFloatZero', (done) => {
		service.getFloatZero().then(
			data => {
				expect(data).toBeLessThan(0.000001);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getDoubleZero', (done) => {
		service.getDoubleZero().then(
			data => {
				expect(data).not.toBe(0);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getDecimalZero', (done) => {
		service.getDecimalZero().then(
			data => {
				expect(data).toBe(0);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getIntSquare', (done) => {
		service.getIntSquare(100).then(
			data => {
				expect(data).toBe(10000);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getDecimalSquare', (done) => {
		service.getDecimalSquare(100).then(
			data => {
				expect(data).toBe(10000);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getNullableDecimal', (done) => {
		service.getNullableDecimal(true).then(
			data => {
				expect(data).toBeGreaterThan(10);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getNullableDecimalNull', (done) => {
		service.getNullableDecimal(false).then(
			data => {
				expect(data).toBeNull(); //aurelia httpclient throws empty error while the service is returning 204
				done();
			},
			error => {
				console.debug('getNullableDecimalNull: ' + JSON.stringify(error));
				expect(true).toBeTruthy();
				done();
			}
		);

	}
	);

	it('getNullPerson', (done) => {
		service.getNullPerson().then(
			data => {
				expect(data).toBeNull(); //Aurelia httpclient throws error upon service statuscode 204
				//expect(data).toBe(''); // .net core return 204 nocontent empty body
				done();
			},
			error => {
				expect(true).toBeTruthy();
				done();
			}
		);

	}
	);

	it('getByteArray', (done) => {
		service.getByteArray().then(
			data => {
				expect(data.length).toBeGreaterThan(0);
				done();
			},
			error => {

				done();
			}
		);

	}
	);




	it('getTextStream', (done) => {
		service.getTextStream().then(
			data => {
				console.debug('getTextStream');
				console.debug(data); // abcdefg

				expect(data.size).toBe(7);

				const reader = new FileReader();//axios actually give string rather than a blob structure
				reader.onload = () => {
					expect(reader.result).toBe('abcdefg');
				};
				reader.readAsText(data);

				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getbyte', (done) => {
		service.getbyte().then(
			data => {
				expect(data).toEqual(255);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getActionStringResult', (done) => {
		service.getActionStringResult().then(
			data => {
				expect(data).toContain('abcdefg');
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('getChar', (done) => {
		service.getChar().then(
			data => {
				expect(data).toBe('A');
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('getDecimal', (done) => {
		service.getDecimal().then(
			data => {
				expect(data).toBe(79228162514264337593543950335);
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('getdouble', (done) => {
		service.getdouble().then(
			data => {
				expect(data).toBe(-1.7976931348623e308);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getUint', (done) => {
		service.getUint().then(
			data => {
				expect(data).toBe(4294967295);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getInt2D', (done) => {
		service.getInt2D().then(
			data => {
				expect(data[0][0]).toBe(1);
				expect(data[0][3]).toBe(4);
				expect(data[1][0]).toBe(5);
				expect(data[1][3]).toBe(8);
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('getInt2DJagged', (done) => {
		service.getInt2DJagged().then(
			data => {
				expect(data[0][0]).toBe(1);
				expect(data[0][3]).toBe(4);
				expect(data[1][0]).toBe(5);
				expect(data[1][3]).toBe(8);
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('postInt2D', (done) => {
		service.postInt2D([[1, 2, 3, 4], [5, 6, 7, 8]]).then(
			data => {
				expect(data).toBeTruthy();
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('postIntArray', (done) => {
		service.postIntArray([1, 2, 3, 4, 5, 6, 7, 8]).then(
			data => {
				expect(data).toBeTruthy();
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('postWithQueryButEmptyBody', (done) => {
		service.postWithQueryButEmptyBody('abc', 123).then(
			data => {
				expect(data.item1).toBe('abc');
				expect(data.item2).toBe(123);
				done();
			},
			error => {

				done();
			}
		);

	}
	);


	it('PostDictionaryOfPeople', (done) => {
		service.postDictionary({
			'Iron Man': {
				'surname': 'Stark',
				'givenName': 'Tony',
				'dob': null,
				'id': '00000000-0000-0000-0000-000000000000',
				'name': 'Tony Stark',
				'addresses': []
			},
			'Spider Man': {
				'name': 'Peter Parker',
				'addresses': [
					{

						'id': '00000000-0000-0000-0000-000000000000',
						'city': 'New York',
						state: 'Somewhere',
						'postalCode': null,
						'country': null,
						'type': 0,
						location: { x: 100, y: 200 }

					}
				]
			}
		}).then(
			data => {
				expect(data).toBe(2);
				done();
			},
			error => {

				done();
			}
		);

	}
	);

	it('getBool', (done) => {
		service.getBool().then(
			data => {
				expect(data).toBeTruthy();
				done();
			},
			error => {

				done();
			}
		);

	}
	);

});

