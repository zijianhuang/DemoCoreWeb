import { AxiosAdapter, AxiosResponse, AxiosError } from 'axios';
//import * as namespaces from '@/clientapi/WebApiAxiosClientAuto';
import * as namespaces from '../../src/clientapi/WebApiCoreAxiosClientAuto';
// JEST provides a few ways of handling async code. This test suite use callbacks, 
// since it is a simple hack from the test suite initially written for Angular 2.
import { it, describe, expect } from 'vitest';
const DemoWebApi_Controllers_Client = namespaces.DemoWebApi_Controllers_Client;
//const apiBaseUri = 'http://localhost:10965/';
const apiBaseUri = 'http://localhost:5000/';

function instanceOfAxiosError(obj: any): obj is AxiosError {
  return 'isAxiosError' in obj;
}

export function errorResponseToString(error: AxiosError | any,): string {
  let errMsg: string;
  if (instanceOfAxiosError(error)) {
    if (error.response.status === 0) {
      errMsg = 'No response from backend. Connection is unavailable.';
    } else {
      if (error.message) {
        errMsg = `${error.response.status} - ${error.response.statusText}: ${error.message}`;
      } else {
        errMsg = `${error.response.status} - ${error.response.statusText}`;
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

  it('get', async () => {
    const data = await service.get();
    expect(data[1]).toBe('value2');
  }
  );

  it('Post', async () => {
    const data = await service.post('Abc');
    expect(data).toBe('ABC');
  }
  );


});


describe('Heroes API', () => {
  const service = new namespaces.DemoWebApi_Controllers_Client.Heroes(apiBaseUri);

  it('getAll', async () => {
    const data = await service.getHeros();
    expect(data.length).toBeGreaterThan(0);
  }
  );

  it('Add', async () => {
    const data = await service.post('somebody');
    expect(data.name).toBe('somebody');
  }
  );

  it('PostWithQuery', async () => {
    const data = await service.postWithQuery('somebodyqqq');
    expect(data.name).toBe('somebodyqqq');

  }
  );

  it('search', async () => {
    const data = await service.search('Torna');
    expect(data.length).toBe(1);
    expect(data[0].name).toBe('Tornado');
  }
  );

});


describe('entities API', () => {
  const client = new namespaces.DemoWebApi_Controllers_Client.Entities(apiBaseUri);

  //it('getPersonNotFound', async ()=> {
  //    client.getPersonNotFound(123)
  //        .then(
  //        data => {
  //            fail('That is bad. Should be 404.');
  //            
  //        },
  //        error => {
  //            expect(errorResponseToString(error)).toContain('404');
  //            
  //        }
  //        );
  //}
  //);

  it('add', async () => {
    let id: number;
    const newPerson: namespaces.DemoWebApi_DemoData_Client.Person = {
      name: 'John Smith' + Date.now().toString(),
      givenName: 'John',
      surname: 'Smith',
      dob: new Date('1977-12-28')
    };

    const data = client.createPerson(newPerson);
    expect(data).toBeTruthy();

  }
  );

});

describe('DateTypes API', () => {
  const service = new namespaces.DemoWebApi_Controllers_Client.DateTypes(apiBaseUri);

  it('GetNextHour', async () => {
    const dt = new Date(Date.now());
    const h = dt.getHours();
    const data = await service.getNextHour(dt);
    const dd = new Date(data);
    expect(dd.getHours()).toBe(h + 1);

  }
  );

  it('GetNextYear', async () => {
    const dt = new Date(Date.now());
    const h = dt.getFullYear();
    const data = await service.getNextYear(dt);
    const dd = new Date(data);
    expect(dd.getFullYear()).toBe(h + 1);


  }
  );

  it('PostNextYear', async () => {
    const dt = new Date(Date.now());
    const h = dt.getFullYear();
    const data = await service.postNextYear(dt);
    const dd = new Date(data);
    expect(dd.getFullYear()).toBe(h + 1);


  }
  );

  it('getNextYearNullable', async () => {
    let now = new Date(Date.now());
    const data = await service.getNextYearNullable(2, now);
    let dt = new Date(data);//data is actually string, NG HttpClient does not translate it to Date
    expect(dt.getFullYear()).toEqual(now.getFullYear() + 2);


  }
  );

  it('getNextHourNullable', async () => {
    let now = new Date(Date.now());
    const data = await service.getNextHourNullable(2, now);
    let dt = new Date(data);
    expect(dt.getHours() % 24).toEqual((now.getHours() + 2) % 24)

  }
  );

  it('getNextYearNullable2', async () => {
    let now = new Date(Date.now());
    const data = await service.getNextYearNullable(2, undefined);
    let dt = new Date(data);
    expect(dt.getFullYear()).toEqual(now.getFullYear() + 2);
  }
  );

  it('getNextHourNullable2', async () => {
    let now = new Date(Date.now());
    const data = await service.getNextHourNullable(2, null);
    let dt = new Date(data);
    expect(dt.getHours() % 24).toEqual((now.getHours() + 2) % 24)

  }
  );


  it('searchDateRange', async () => {
    let startDt = new Date(Date.now());
    let endDt = new Date(Date.now() + 100000);
    const data = await service.searchDateRange(startDt, endDt);
    expect(new Date(data.item1)).toEqual(startDt);
    expect(new Date(data.item2)).toEqual(endDt);

  }
  );


  it('searchDateRangeEndUndefined', async () => {
    let startDt = new Date(Date.now());
    let endDt = new Date(Date.now() + 100000);
    const data = await service.searchDateRange(startDt, undefined);
    expect(new Date(data.item1)).toEqual(startDt);
    expect(data.item2).toBeUndefined();
  }
  );


  it('searchDateRangeStartUndefined', async () => {
    let startDt = new Date(Date.now());
    let endDt = new Date(Date.now() + 100000);
    const data = await service.searchDateRange(undefined, endDt);
    expect(data.item1).toBeUndefined();
    expect(new Date(data.item2)).toEqual(endDt);

  }
  );


  it('searchDateRangeBeUndefined', async () => {
    let startDt = new Date(Date.now());
    let endDt = new Date(Date.now() + 100000);
    const data = await service.searchDateRange(null, undefined);
    expect(data.item1).toBeUndefined();
    expect(data.item1).toBeUndefined();
  }
  );



});

describe('SuperDemo API', () => {
  const service = new namespaces.DemoWebApi_Controllers_Client.SuperDemo(apiBaseUri);

  it('getBool', async () => {
    const data = await service.getBool();
    expect(data).toBeTruthy();

  }
  );


  it('getFloatZero', async () => {
    const data = await service.getFloatZero();
    expect(data).toBeLessThan(0.000001);

  }
  );

  it('getDoubleZero', async () => {
    const data = await service.getDoubleZero();
    expect(data).not.toBe(0);
  }
  );

  it('getDecimalZero', async () => {
    const data = await service.getDecimalZero();
    expect(data).toBe(0);
  }
  );

  it('getIntSquare', async () => {
    const data = await service.getIntSquare(100);
    expect(data).toBe(10000);
  }
  );

  it('getDecimalSquare', async () => {
    const data = await service.getDecimalSquare(100);
    expect(data).toBe(10000);

  }
  );

  it('getNullableDecimal', async () => {
    const data = await service.getNullableDecimal(true);
    expect(data).toBeGreaterThan(10);
  }
  );

  it('getNullableDecimalNull', async () => {
    const data = await service.getNullableDecimal(false);// .net core return 204 nocontent empty body
    expect(data).toBe('');
  }
  );

  it('getNullString', async () => {
    const data = await service.getNullString();
    expect(data).toBeNull(); // .net core return 204 nocontent empty body
  }
  );

  it('getNullPerson', async () => {
    const data = await service.getNullPerson();
    expect(data).toBe(''); // .net core return 204 nocontent empty body

  }
  );

  it('getByteArray', async () => {
    const data = await service.getByteArray();
    expect(data.length).toBeGreaterThan(0);

  }
  );

  it('getTextStream', async () => {
    const data = await service.getTextStream();
    console.debug(data); // abcdefg
    expect(data).toBe('abcdefg');

  }
  );

  it('getActionResult', async () => {
    const data = await service.getActionResult();
    console.debug(data);
    expect(data.status).toBe(200);


  }
  );

  it('getbyte', async () => {
    const data = await service.getbyte();
    expect(data).toEqual(255);
  }
  );

  it('getActionStringResult', async () => {
    const data = await service.getActionStringResult();
    expect(data).toContain('abcdefg');

  }
  );


  it('getChar', async () => {
    const data = await service.getChar();
    expect(data).toBe('A');
  }
  );


  it('getDecimal', async () => {
    const data = await service.getDecimal();
    expect(data).toBe(79228162514264337593543950335);

  }
  );


  it('getdouble', async () => {
    const data = await service.getdouble();
    expect(data).toBe(-1.7976931348623e308);
  }
  );

  it('getUint', async () => {
    const data = await service.getUint();
    expect(data).toBe(4294967295);
  }
  );

  it('getulong', async () => {
    const data = await service.getulong();
    expect(data).toBe(18446744073709551615);

  }
  );

  it('getInt2D', async () => {
    const data = await service.getInt2D();
    expect(data[0][0]).toBe(1);
    expect(data[0][3]).toBe(4);
    expect(data[1][0]).toBe(5);
    expect(data[1][3]).toBe(8);

  }
  );


  it('getInt2DJagged', async () => {
    const data = await service.getInt2DJagged();
    expect(data[0][0]).toBe(1);
    expect(data[0][3]).toBe(4);
    expect(data[1][0]).toBe(5);
    expect(data[1][3]).toBe(8);


  }
  );


  it('postInt2D', async () => {
    const data = await service.postInt2D([[1, 2, 3, 4], [5, 6, 7, 8]]);
    expect(data).toBeTruthy();
  }
  );

  it('postIntArray', async () => {
    const data = await service.postIntArray([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(data).toBeTruthy();

  }
  );

  it('postWithQueryButEmptyBody', async () => {
    const data = await service.postWithQueryButEmptyBody('abc', 123);
    expect(data.item1).toBe('abc');
    expect(data.item2).toBe(123);

  }
  );

  it('getDictionaryOfPeople', async () => {
    const data = await service.getDictionaryOfPeople();
    let p = data['spider Man']; //ASP.NET Web API with NewtonSoftJson made it camcel;
    if (!p) {
      p = data['Spider Man']; //.NET Core is OK
    }
    expect(p.name).toBe('Peter Parker');
    expect(p.addresses[0].city).toBe('New York');

  }
  );

  it('PostDictionaryOfPeople', async () => {
    const data = await service.postDictionary({
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
    });

    expect(data).toBe(2);


  }
  );

  it('getKeyhValuePair', async () => {
    const data = await service.getKeyhValuePair();
    expect(data.key).toBe('Spider Man');
    expect(data.value.addresses[0].city).toBe('New York');

  }
  );

  it('getBool', async () => {
    const data = await service.getBool();
    expect(data).toBeTruthy();
  }
  );

});

describe('Tuple API', () => {
  const service = new namespaces.DemoWebApi_Controllers_Client.Tuple(apiBaseUri);


  it('getTuple2', async () => {
    const data = await service.getTuple2();
    expect(data.item1).toBe('Two');
    expect(data.item2).toBe(2);
  }
  );

  it('postTuple2', async () => {
    const data = await service.postTuple2({ item1: "One", item2: 2 });
    expect(data).toBe('One');

  }
  );

  it('getTuple7', async () => {
    const data = await service.getTuple7();
    expect(data.item1).toBe('Seven');
    expect(data.item7).toBe(7);

  }
  );

  it('getTuple2', async () => {
    const data = await service.getTuple2();
    expect(data.item1).toBe('Two');
    expect(data.item2).toBe(2);

  }
  );

  it('postTuple7', async () => {
    const data = await service.postTuple7({ item1: 'One', item2: '', item3: '', item4: '', item5: '', item6: 33333, item7: 9 });
    expect(data).toBe('One');
  }
  );

  it('getTuple8', async () => {
    const data = await service.getTuple8();
    expect(data.item1).toBe('Nested');
    expect(data.rest.item1).toBe('nine');

  }
  );

  it('postTuple8', async () => {
    const data = await service.postTuple8({ item1: 'One', item2: '', item3: '', item4: '', item5: '', item6: '', item7: '', rest: { item1: 'a', item2: 'b', item3: 'c' } });
    expect(data).toBe('a');

  }
  );

  it('linkPersonCompany1', async () => {
    const data = await service.linkPersonCompany1({
      item1: {
        name: 'someone',
        surname: 'my',
        givenName: 'something',
      },

      item2: {
        name: 'Super',
        addresses: [{ city: 'New York', street1: 'Somewhere st' }]
      }
    });

    expect(data.name).toBe('someone');

  }
  );




});

