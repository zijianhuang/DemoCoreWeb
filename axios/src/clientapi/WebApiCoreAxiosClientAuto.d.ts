import { AxiosResponse } from 'axios';
export declare namespace DemoWebApi_Controllers_Client {
    /**
     * Complex hero type
     */
    interface Hero {
        id?: number;
        name?: string;
    }
}
export declare namespace DemoWebApi_DemoData_Client {
    interface Address {
        city?: string;
        country?: string;
        id?: string;
        postalCode?: string;
        state?: string;
        street1?: string;
        street2?: string;
        type?: DemoWebApi_DemoData_Client.AddressType;
        /**
         * It is a field
         */
        location?: DemoWebApi_DemoData_Another_Client.MyPoint;
    }
    enum AddressType {
        Postal = 0,
        Residential = 1
    }
    interface Company extends DemoWebApi_DemoData_Client.Entity {
        /**
         * BusinessNumber to be serialized as BusinessNum
         */
        BusinessNum?: string;
        businessNumberType?: string;
        textMatrix?: Array<Array<string>>;
        int2D?: number[][];
        int2DJagged?: Array<Array<number>>;
        lines?: Array<string>;
    }
    enum Days {
        Sat = 1,
        Sun = 2,
        Mon = 3,
        Tue = 4,
        Wed = 5,
        /**
         * Thursday
         */
        Thu = 6,
        Fri = 7
    }
    /**
     * Base class of company and person
     */
    interface Entity {
        /**
         * Multiple addresses
         */
        addresses?: Array<DemoWebApi_DemoData_Client.Address>;
        id?: string;
        /**
         * Name of the entity.
         */
        name: string;
        phoneNumbers?: Array<DemoWebApi_DemoData_Client.PhoneNumber>;
        web?: string;
    }
    interface MimsPackage {
        result?: DemoWebApi_DemoData_Client.MimsResult<number>;
        tag?: string;
    }
    interface MimsResult<T> {
        generatedAt?: Date;
        message?: string;
        result?: T;
        success?: boolean;
    }
    interface MyGeneric<T, K, U> {
        myK?: K;
        myT?: T;
        myU?: U;
        status?: string;
    }
    interface MyPeopleDic {
        anotherDic?: {
            [id: string]: string;
        };
        dic?: {
            [id: string]: DemoWebApi_DemoData_Client.Person;
        };
        intDic?: {
            [id: number]: string;
        };
    }
    interface Person extends DemoWebApi_DemoData_Client.Entity {
        /**
         * Date of Birth.
         * This is optional.
         */
        dob?: Date;
        givenName?: string;
        surname?: string;
    }
    interface PhoneNumber {
        fullNumber?: string;
        phoneType?: DemoWebApi_DemoData_Client.PhoneType;
    }
    /**
     * Phone type
     * Tel, Mobile, Skyp and Fax
     */
    enum PhoneType {
        /**
         * Land line
         */
        Tel = 0,
        /**
         * Mobile phone
         */
        Mobile = 1,
        Skype = 2,
        Fax = 3
    }
}
export declare namespace DemoWebApi_DemoData_Another_Client {
    /**
     * 2D position
     * with X and Y
     * for Demo
     */
    interface MyPoint {
        /**
         * X
         */
        x: number;
        /**
         * Y
         */
        y: number;
    }
}
export declare namespace DemoWebApi_Models_Client {
    interface AddExternalLoginBindingModel {
        externalAccessToken?: string;
    }
    interface ChangePasswordBindingModel {
        confirmPassword?: string;
        newPassword?: string;
        OldPwd: string;
    }
    interface RegisterBindingModel {
        confirmPassword?: string;
        email?: string;
        password?: string;
    }
    interface RegisterExternalBindingModel {
        email?: string;
    }
    interface RemoveLoginBindingModel {
        loginProvider?: string;
        providerKey?: string;
    }
    interface SetPasswordBindingModel {
        confirmPassword?: string;
        newPassword?: string;
    }
}
export declare namespace Core3WebApi_Controllers_Client {
    class Statistics {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/Statistics/distribution
         */
        getDistribution(): Promise<AxiosResponse>;
    }
}
export declare namespace DemoCoreWeb_Controllers_Client {
    class SpecialTypes {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/SpecialTypes/AnonymousDynamic
         */
        getAnonymousDynamic(): Promise<AxiosResponse>;
        /**
         * GET api/SpecialTypes/AnonymousObject
         */
        getAnonymousObject(): Promise<AxiosResponse>;
        /**
         * POST api/SpecialTypes/AnonymousObject
         */
        postAnonymousObject(obj: any): Promise<AxiosResponse>;
    }
}
export declare namespace DemoWebApi_Controllers_Client {
    class Entities {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * POST api/Entities/createPerson
         */
        createPerson(p: DemoWebApi_DemoData_Client.Person): Promise<number>;
        /**
         * DELETE api/Entities/{id}
         */
        delete(id: number): Promise<AxiosResponse>;
        /**
         * GET api/Entities/Company/{id}
         */
        getCompany(id: number): Promise<DemoWebApi_DemoData_Client.Company>;
        /**
         * POST api/Entities/Mims
         */
        getMims(p: DemoWebApi_DemoData_Client.MimsPackage): Promise<DemoWebApi_DemoData_Client.MimsResult<string>>;
        /**
         * POST api/Entities/MyGeneric
         */
        getMyGeneric(s: DemoWebApi_DemoData_Client.MyGeneric<string, number, number>): Promise<DemoWebApi_DemoData_Client.MyGeneric<string, number, number>>;
        /**
         * POST api/Entities/MyGenericPerson
         */
        getMyGenericPerson(s: DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>): Promise<DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>>;
        /**
         * Get a person
         * so to know the person
         * GET api/Entities/getPerson/{id}
         * @param {number} id unique id of that guy
         * @return {DemoWebApi_DemoData_Client.Person} person in db
         */
        getPerson(id: number): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * PUT api/Entities/link?id={id}&relationship={relationship}
         */
        linkPerson(id: number, relationship: string, person: DemoWebApi_DemoData_Client.Person): Promise<boolean>;
        /**
         * PUT api/Entities/updatePerson
         */
        updatePerson(person: DemoWebApi_DemoData_Client.Person): Promise<AxiosResponse>;
    }
    class Heroes {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * DELETE api/Heroes/{id}
         */
        delete(id: number): Promise<AxiosResponse>;
        /**
         * Get all heroes.
         * GET api/Heroes
         */
        get(): Promise<Array<DemoWebApi_Controllers_Client.Hero>>;
        /**
         * Get a hero.
         * GET api/Heroes/{id}
         */
        getById(id: number): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * POST api/Heroes
         */
        post(name: string): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * Add a hero
         * POST api/Heroes/q?name={name}
         */
        postWithQuery(name: string): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * Update hero.
         * PUT api/Heroes
         */
        put(hero: DemoWebApi_Controllers_Client.Hero): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * Search heroes
         * GET api/Heroes/search/{name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        search(name: string): Promise<Array<DemoWebApi_Controllers_Client.Hero>>;
    }
    class Home {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/Home
         */
        index(): Promise<AxiosResponse<Blob>>;
    }
    class SuperDemo {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/SuperDemo/ActionResult
         */
        getActionResult(): Promise<AxiosResponse<string>>;
        /**
         * GET api/SuperDemo/ActionStringResult
         */
        getActionStringResult(): Promise<string>;
        /**
         * GET api/SuperDemo/bool
         */
        getBool(): Promise<boolean>;
        /**
         * GET api/SuperDemo/byte
         */
        getbyte(): Promise<number>;
        /**
         * GET api/SuperDemo/ByteArray
         */
        getByteArray(): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/char
         */
        getChar(): Promise<string>;
        /**
         * GET api/SuperDemo/Collection
         */
        getCollection(): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/NullableDatetime/{hasValue}
         */
        getDateTime(hasValue: boolean): Promise<Date>;
        /**
         * GET api/SuperDemo/DateTimeOffset
         */
        getDateTimeOffset(): Promise<Date>;
        /**
         * GET api/SuperDemo/decimal
         */
        getDecimal(): Promise<number>;
        /**
         * GET api/SuperDemo/decimal/{d}
         */
        getDecimalSquare(d: number): Promise<number>;
        /**
         * GET api/SuperDemo/DecimalZero
         */
        getDecimalZero(): Promise<number>;
        /**
         * GET api/SuperDemo/StringStringDic
         */
        getDictionary(): Promise<{
            [id: string]: string;
        }>;
        /**
         * GET api/SuperDemo/StringPersonDic
         */
        getDictionaryOfPeople(): Promise<{
            [id: string]: DemoWebApi_DemoData_Client.Person;
        }>;
        /**
         * GET api/SuperDemo/doulbe
         */
        getdouble(): Promise<number>;
        /**
         * Result of 0.1d + 0.2d - 0.3d
         * GET api/SuperDemo/DoubleZero
         */
        getDoubleZero(): Promise<number>;
        /**
         * GET api/SuperDemo/EmptyString
         */
        getEmptyString(): Promise<string>;
        /**
         * GET api/SuperDemo/FloatZero
         */
        getFloatZero(): Promise<number>;
        /**
         * GET api/SuperDemo/ICollection
         */
        getICollection(): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/IList
         */
        getIList(): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/int2d
         */
        getInt2D(): Promise<number[][]>;
        /**
         * GET api/SuperDemo/int2dJagged
         */
        getInt2DJagged(): Promise<Array<Array<number>>>;
        /**
         * GET api/SuperDemo/intArray
         */
        getIntArray(): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/int/{d}
         */
        getIntSquare(d: number): Promise<number>;
        /**
         * GET api/SuperDemo/IReadOnlyCollection
         */
        getIReadOnlyCollection(): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/IReadOnlyList
         */
        getIReadOnlyList(): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/KeyValuePair
         */
        getKeyhValuePair(): Promise<{
            key: string;
            value: DemoWebApi_DemoData_Client.Person;
        }>;
        /**
         * GET api/SuperDemo/List
         */
        getList(): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/NextHour/{dt}
         */
        getNextHour(dt: Date): Promise<Date>;
        /**
         * GET api/SuperDemo/NextHourNullable?n={n}&dt={dt}
         */
        getNextHourNullable(n: number, dt: Date): Promise<Date>;
        /**
         * GET api/SuperDemo/NextYear/{dt}
         */
        getNextYear(dt: Date): Promise<Date>;
        /**
         * GET api/SuperDemo/NextYearNullable?n={n}&dt={dt}
         */
        getNextYearNullable(n: number, dt: Date): Promise<Date>;
        /**
         * GET api/SuperDemo/NullableDecimal/{hasValue}
         */
        getNullableDecimal(hasValue: boolean): Promise<number>;
        /**
         * GET api/SuperDemo/NullObject
         */
        getNullPerson(): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * GET api/SuperDemo/NullString
         */
        getNullString(): Promise<string>;
        /**
         * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
         */
        getPrimitiveNullable(location: string, dd: number, de: number): Promise<{
            item1: string;
            item2: number;
            item3: number;
        }>;
        /**
         * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
         */
        getPrimitiveNullable2(dd: number, de: number): Promise<{
            item1: number;
            item2: number;
        }>;
        /**
         * GET api/SuperDemo/sbyte
         */
        getsbyte(): Promise<number>;
        /**
         * GET api/SuperDemo/short
         */
        getShort(): Promise<number>;
        /**
         * GET api/SuperDemo/TextStream
         */
        getTextStream(): Promise<AxiosResponse<Blob>>;
        /**
         * GET api/SuperDemo/uint
         */
        getUint(): Promise<number>;
        /**
         * GET api/SuperDemo/ulong
         */
        getulong(): Promise<number>;
        /**
         * GET api/SuperDemo/ushort
         */
        getUShort(): Promise<number>;
        /**
         * POST api/SuperDemo/ActionResult
         */
        postActionResult(): Promise<AxiosResponse<string>>;
        /**
         * POST api/SuperDemo/PostActionResult2
         */
        postActionResult2(s: string): Promise<AxiosResponse<string>>;
        /**
         * POST api/SuperDemo/PostActionResult3
         */
        postActionResult3(person: DemoWebApi_DemoData_Client.Person): Promise<AxiosResponse<string>>;
        /**
         * POST api/SuperDemo/Collection
         */
        postCollection(list: Array<DemoWebApi_DemoData_Client.Person>): Promise<number>;
        /**
         * DateTime and DateTimeOffset may not be represented well in URL, so must put them into the POST body.
         * POST api/SuperDemo/DateTimeOffset
         */
        postDateTimeOffset(d: Date): Promise<boolean>;
        /**
         * POST api/SuperDemo/DateTimeOffsetNullable
         */
        postDateTimeOffsetNullable(d: Date): Promise<boolean>;
        /**
         * POST api/SuperDemo/StringPersonDic
         */
        postDictionary(dic: {
            [id: string]: DemoWebApi_DemoData_Client.Person;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/ICollection
         */
        postICollection(list: Array<DemoWebApi_DemoData_Client.Person>): Promise<number>;
        /**
         * POST api/SuperDemo/IList
         */
        postIList(list: Array<DemoWebApi_DemoData_Client.Person>): Promise<number>;
        /**
         * POST api/SuperDemo/int2d
         */
        postInt2D(a: number[][]): Promise<boolean>;
        /**
         * POST api/SuperDemo/int2djagged
         */
        postInt2DJagged(a: Array<Array<number>>): Promise<boolean>;
        /**
         * POST api/SuperDemo/intArray
         */
        postIntArray(a: Array<number>): Promise<boolean>;
        /**
         * POST api/SuperDemo/IReadOnlyCollection
         */
        postIReadOnlyCollection(list: Array<DemoWebApi_DemoData_Client.Person>): Promise<number>;
        /**
         * POST api/SuperDemo/IReadOnlyList
         */
        postIReadOnlyList(list: Array<DemoWebApi_DemoData_Client.Person>): Promise<number>;
        /**
         * POST api/SuperDemo/List
         */
        postList(list: Array<DemoWebApi_DemoData_Client.Person>): Promise<number>;
        /**
         * POST api/SuperDemo/NextYear
         */
        postNextYear(dt: Date): Promise<Date>;
        /**
         * POST api/SuperDemo/PostEmpty/{i}
         */
        postWithQueryButEmptyBody(s: string, i: number): Promise<{
            item1: string;
            item2: number;
        }>;
        /**
         * GET api/SuperDemo/SearchDateRange?startDate={startDate}&endDate={endDate}
         */
        searchDateRange(startDate: Date, endDate: Date): Promise<{
            item1: Date;
            item2: Date;
        }>;
    }
    class Tuple {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/Tuple/PeopleCompany4
         */
        getPeopleCompany4(): Promise<{
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Company;
        }>;
        /**
         * GET api/Tuple/PeopleCompany5
         */
        getPeopleCompany5(): Promise<{
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Person;
            item5: DemoWebApi_DemoData_Client.Company;
        }>;
        /**
         * GET api/Tuple/Tuple1
         */
        getTuple1(): Promise<{
            item1: number;
        }>;
        /**
         * GET api/Tuple/Tuple2
         */
        getTuple2(): Promise<{
            item1: string;
            item2: number;
        }>;
        /**
         * GET api/Tuple/Tuple3
         */
        getTuple3(): Promise<{
            item1: string;
            item2: string;
            item3: number;
        }>;
        /**
         * GET api/Tuple/Tuple4
         */
        getTuple4(): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: number;
        }>;
        /**
         * GET api/Tuple/Tuple5
         */
        getTuple5(): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: number;
        }>;
        /**
         * GET api/Tuple/Tuple6
         */
        getTuple6(): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            item6: number;
        }>;
        /**
         * GET api/Tuple/Tuple7
         */
        getTuple7(): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            item6: number;
            item7: number;
        }>;
        /**
         * GET api/Tuple/Tuple8
         */
        getTuple8(): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            item6: string;
            item7: number;
            rest: {
                item1: string;
                item2: string;
                item3: string;
            };
        }>;
        /**
         * POST api/Tuple/PeopleCompany2
         */
        linkPeopleCompany2(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany3
         */
        linkPeopleCompany3(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany4
         */
        linkPeopleCompany4(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany5
         */
        linkPeopleCompany5(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Person;
            item5: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany6
         */
        linkPeopleCompany6(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Person;
            item5: DemoWebApi_DemoData_Client.Person;
            item6: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany7
         */
        linkPeopleCompany7(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Person;
            item5: DemoWebApi_DemoData_Client.Person;
            item6: DemoWebApi_DemoData_Client.Person;
            item7: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany8
         */
        linkPeopleCompany8(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Person;
            item5: DemoWebApi_DemoData_Client.Person;
            item6: DemoWebApi_DemoData_Client.Person;
            item7: DemoWebApi_DemoData_Client.Person;
            rest: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PersonCompany1
         */
        linkPersonCompany1(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Company;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/Tuple1
         */
        postTuple1(tuple: {
            item1: number;
        }): Promise<number>;
        /**
         * POST api/Tuple/Tuple2
         */
        postTuple2(tuple: {
            item1: string;
            item2: number;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple3
         */
        postTuple3(tuple: {
            item1: string;
            item2: string;
            item3: number;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple4
         */
        postTuple4(tuple: {
            item1: string;
            item2: string;
            item3: string;
            item4: number;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple5
         */
        postTuple5(tuple: {
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: number;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple6
         */
        postTuple6(tuple: {
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            item6: number;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple7
         */
        postTuple7(tuple: {
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            item6: number;
            item7: number;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple8
         */
        postTuple8(tuple: {
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            item6: string;
            item7: string;
            rest: {
                item1: string;
                item2: string;
                item3: string;
            };
        }): Promise<string>;
    }
    class Values {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * DELETE api/Values/{id}
         */
        delete(id: number): Promise<AxiosResponse>;
        /**
         * Get a list of value
         * GET api/Values
         */
        get(): Promise<Array<string>>;
        /**
         * Get by both Id and name
         * GET api/Values/{id}?name={name}
         */
        getByIdAndName(id: number, name: string): Promise<string>;
        /**
         * GET api/Values?name={name}
         */
        getByName(name: string): Promise<string>;
        /**
         * GET api/Values/{id}
         */
        getById(id: number): Promise<string>;
        /**
         * POST api/Values
         */
        post(value: string): Promise<string>;
        /**
         * Update with valjue
         * PUT api/Values/{id}
         */
        put(id: number, value: string): Promise<AxiosResponse>;
    }
}
