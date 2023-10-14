import { AxiosAdapter, AxiosResponse, AxiosError } from 'axios';
//import * as namespaces from './clientapi/WebApiAxiosClientAuto';
import * as namespaces from './clientapi/WebApiCoreAxiosClientAuto';

// JEST provides a few ways of handling async code. This test suite use callbacks, 
// since it is a simple hack from the test suite initially written for Angular 2.

const DemoWebApi_Controllers_Client = namespaces.DemoWebApi_Controllers_Client;
//const apiBaseUri = 'http://localhost:10965/';
const apiBaseUri = 'http://localhost:5000/';

function instanceOfAxiosError(obj: any): obj is AxiosError {
	return 'isAxiosError' in obj;
}

export function errorResponseToString(error: AxiosError | any, ): string {
	let errMsg: string;
	if (instanceOfAxiosError(error)) {
	  if (error.response?.status === 0) {
		errMsg = 'No response from backend. Connection is unavailable.';
	  } else {
		if (error.message) {
		  errMsg = `${error.response?.status} - ${error.response?.statusText}: ${error.message}`;
		} else {
		  errMsg = `${error.response?.status} - ${error.response?.statusText}`;
		}
	  }
  
	  errMsg += error.message ? (' ' + JSON.stringify(error.message)) : '';
	  return errMsg;
	} else {
	  errMsg = error.message ? error.message : error.toString();
	  return errMsg;
	}
  }

describe('Values API', () => {
  const service = new namespaces.DemoWebApi_Controllers_Client.Values(apiBaseUri);

  it('get', (done) => {
    service.get().then(
      data => {
        console.debug(data.length);
        expect(data[1]).toBe('value2');
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
    service.post('Abc').then(
      data => {
        console.debug(data.length);
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


});


describe('Heroes API', () => {
  const service= new namespaces.DemoWebApi_Controllers_Client.Heroes(apiBaseUri);

   it('getAll', (done) => {
    service.getHeros().then(
      data => {
        console.debug(data.length);
        expect(data.length).toBeGreaterThan(0);
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
    service.post('somebody').then(
      data => {
        expect(data.name).toBe('somebody');
        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

});


describe('entities API', () => {
  const client = new namespaces.DemoWebApi_Controllers_Client.Entities(apiBaseUri);

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
    let id: number;
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
        fail(errorResponseToString(error));
        done();
      }
      );

  }
  );

});

describe('DateTypes API', () => {
  const service=new namespaces.DemoWebApi_Controllers_Client.DateTypes(apiBaseUri);

  it('GetNextHour', (done) => {
    const dt = new Date(Date.now());
    const h = dt.getHours();
    service.getNextHour(dt).then(
      data => {
        const dd = new Date(data);
        expect(dd.getHours()).toBe(h + 1);
        done();
      },
      error => {
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('GetNextYear', (done) => {
    const dt = new Date(Date.now());
    const h = dt.getFullYear();
    service.getNextYear(dt).then(
      data => {
        const dd = new Date(data);
        expect(dd.getFullYear()).toBe(h + 1);
        done();
      },
      error => {
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('PostNextYear', (done) => {
    const dt = new Date(Date.now());
    const h = dt.getFullYear();
    service.postNextYear(dt).then(
      data => {
        const dd = new Date(data);
        expect(dd.getFullYear()).toBe(h + 1);
        done();
      },
      error => {
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('getDateTime', (done) => {
    service.getDateTime(true).then(
      data => {
        expect(data).toBeDefined();
        done();
      },
      error => {
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('getDateTimeNull', (done) => {
    service.getDateTime(false).then(
      data => {
      //  expect(data).toBeNull();
		expect(data).toBe(''); // .net core return 204 nocontent empty body
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

describe('SuperDemo API', () => {
  const service=new namespaces.DemoWebApi_Controllers_Client.SuperDemo(apiBaseUri);

  it('getBool', (done) => {
    service.getBool().then(
      data => {
        expect(data).toBeTruthy();
        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('getNullableDecimalNull', (done) => {
    service.getNullableDecimal(false).then(
      data => {
     //   expect(data).toBeNull();
		  expect(data).toBe(''); // .net core return 204 nocontent empty body
        done();
      },
      error => {
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('getNullString', (done) => {
    service.getNullString().then(
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

  it('getNullPerson', (done) => {
    service.getNullPerson().then(
      data => {
     //   expect(data).toBeNull();
		expect(data).toBe(''); // .net core return 204 nocontent empty body
        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
		  expect(data).toBe('abcdefg');


		// const reader = new FileReader();//axios actually give string rather than a blob structure
        // reader.onload = () => {
	    //   expect(reader.result).toBe('abcdefg'); 
        // };
        // reader.readAsText(data.data);

        done();
      },
      error => {
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('getActionResult', (done) => {
    service.getActionResult().then(
      response => {
        expect(response.status).toBe(200);
        expect(response.data).toBe('"abcdefg"');

        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

  it('getulong', (done) => {
    service.getulong().then(
      data => {
        expect(data).toBe(18446744073709551615);
        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
        done();
      }
    );

  }
  );

});

describe('Tuple API', () => {
  const service= new namespaces.DemoWebApi_Controllers_Client.Tuple(apiBaseUri);

 
  it('getTuple2', (done) => {
    service.getTuple2().then(
      data => {
        expect(data.item1).toBe('Two');
        expect(data.item2).toBe(2);
        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
        done();
      }
    );
  }
  );

  it('postTuple7', (done) => {
    service.postTuple7({ item1: 'One', item2: '', item3: '', item4: '', item5: '', item6: 33333, item7: 9 }).then(
      data => {
        expect(data).toBe('One');
        done();
      },
      error => {
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
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
        fail(errorResponseToString(error));
        done();
      }
      );
  }
  );




});

