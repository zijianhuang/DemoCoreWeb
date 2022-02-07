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
        foundDate?: Date;
        registerDate?: any;
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
    enum MedicalContraindiationResponseTypeReason {
        M = "Mm",
        S = "Ss",
        P = "Pp",
        I = "I",
        A = "A"
    }
    enum MedicalContraindiationResponseTypeTypeCode {
        P = "P",
        T = "Tt"
    }
    interface MimsPackage {
        kk?: number;
        /**
         * Having an initialized value in the property is not like defining a DefaultValueAttribute. Such intialization happens at run time,
         * and there's no reliable way for a codegen to know if the value is declared by the programmer, or is actually the natural default value like 0.
         */
        kK2?: number;
        optionalEnum?: DemoWebApi_DemoData_Client.MyEnumType;
        optionalInt?: number;
        result?: DemoWebApi_DemoData_Client.MimsResult<number>;
        tag?: string;
    }
    interface MimsResult<T> {
        generatedAt?: Date;
        message?: string;
        result?: T;
        success?: boolean;
    }
    enum MyEnumType {
        First = 1,
        Two = 2
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
        baptised?: Date;
        /**
         * Date of Birth.
         * This is optional.
         */
        dob?: any;
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
        getDistribution(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
    }
}
export declare namespace DemoCoreWeb_Controllers_Client {
    class SpecialTypes {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/SpecialTypes/AnonymousDynamic
         */
        getAnonymousDynamic(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * GET api/SpecialTypes/AnonymousObject
         */
        getAnonymousObject(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * POST api/SpecialTypes/AnonymousObject
         */
        postAnonymousObject(obj: any, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
    }
}
export declare namespace DemoWebApi_Controllers_Client {
    class Entities {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * POST api/Entities/createCompany
         */
        createCompany(p: DemoWebApi_DemoData_Client.Company, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Company>;
        /**
         * POST api/Entities/createPerson
         */
        createPerson(p: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/Entities/createPerson2
         */
        createPerson2(p: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Entities/createPerson3
         */
        createPerson3(p: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * DELETE api/Entities/{id}
         */
        delete(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * GET api/Entities/Company/{id}
         */
        getCompany(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Company>;
        /**
         * POST api/Entities/Mims
         */
        getMims(p: DemoWebApi_DemoData_Client.MimsPackage, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.MimsResult<string>>;
        /**
         * POST api/Entities/MyGeneric
         */
        getMyGeneric(s: DemoWebApi_DemoData_Client.MyGeneric<string, number, number>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.MyGeneric<string, number, number>>;
        /**
         * POST api/Entities/MyGenericPerson
         */
        getMyGenericPerson(s: DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.MyGeneric<string, number, DemoWebApi_DemoData_Client.Person>>;
        /**
         * Get a person
         * so to know the person
         * GET api/Entities/getPerson/{id}
         * @param {number} id unique id of that guy
         * @return {DemoWebApi_DemoData_Client.Person} person in db
         */
        getPerson(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * GET api/Entities/getPerson2/{id}
         */
        getPerson2(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * PUT api/Entities/link?id={id}&relationship={relationship}
         */
        linkPerson(id: number, relationship: string, person: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<boolean>;
        /**
         * PATCH api/Entities/patchPerson
         */
        patchPerson(person: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * PUT api/Entities/updatePerson
         */
        updatePerson(person: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
    }
    class Heroes {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * DELETE api/Heroes/{id}
         */
        delete(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * Get all heroes.
         * GET api/Heroes
         */
        get(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_Controllers_Client.Hero>>;
        /**
         * Get a hero.
         * GET api/Heroes/{id}
         */
        getById(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * POST api/Heroes
         */
        post(name: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * Add a hero
         * POST api/Heroes/q?name={name}
         */
        postWithQuery(name: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * Update hero.
         * PUT api/Heroes
         */
        put(hero: DemoWebApi_Controllers_Client.Hero, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_Controllers_Client.Hero>;
        /**
         * Search heroes
         * GET api/Heroes/search/{name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        search(name: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_Controllers_Client.Hero>>;
    }
    class Home {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/Home
         */
        index(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<Blob>>;
    }
    class SuperDemo {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * GET api/SuperDemo/AthletheSearch?take={take}&skip={skip}&order={order}&sort={sort}&search={search}
         */
        athletheSearch(take: number, skip: number, order: string, sort: string, search: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/SuperDemo/ActionResult
         */
        getActionResult(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<string>>;
        /**
         * GET api/SuperDemo/ActionResult2
         */
        getActionResult2(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<string>>;
        /**
         * GET api/SuperDemo/ActionStringResult
         */
        getActionStringResult(headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/SuperDemo/bool
         */
        getBool(headersHandler?: () => {
            [header: string]: string;
        }): Promise<boolean>;
        /**
         * GET api/SuperDemo/byte
         */
        getbyte(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/ByteArray
         */
        getByteArray(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/char
         */
        getChar(headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/SuperDemo/Collection
         */
        getCollection(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/NullableDatetime/{hasValue}
         */
        getDateTime(hasValue: boolean, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * GET api/SuperDemo/DateTimeOffset
         */
        getDateTimeOffset(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * GET api/SuperDemo/enumGet?d={d}
         */
        getDay(d: DemoWebApi_DemoData_Client.Days, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Days>;
        /**
         * GET api/SuperDemo/decimal
         */
        getDecimal(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/decimalArrayQ?a={a}
         */
        getDecimalArrayQ(a: Array<number>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/decimal/{d}
         */
        getDecimalSquare(d: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/DecimalZero
         */
        getDecimalZero(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/StringStringDic
         */
        getDictionary(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            [id: string]: string;
        }>;
        /**
         * GET api/SuperDemo/StringPersonDic
         */
        getDictionaryOfPeople(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            [id: string]: DemoWebApi_DemoData_Client.Person;
        }>;
        /**
         * GET api/SuperDemo/doulbe
         */
        getdouble(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * Result of 0.1d + 0.2d - 0.3d
         * GET api/SuperDemo/DoubleZero
         */
        getDoubleZero(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/EmptyString
         */
        getEmptyString(headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/SuperDemo/enumArrayDays?a={a}
         */
        getEnumArrayDays(a: Array<DemoWebApi_DemoData_Client.Days>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Days>>;
        /**
         * GET api/SuperDemo/enumArrayQ2?a={a}
         */
        getEnumArrayQ2(a: Array<number>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/FloatZero
         */
        getFloatZero(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/ICollection
         */
        getICollection(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/IList
         */
        getIList(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/int2d
         */
        getInt2D(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number[][]>;
        /**
         * GET api/SuperDemo/int2dJagged
         */
        getInt2DJagged(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<Array<number>>>;
        /**
         * GET api/SuperDemo/intArray
         */
        getIntArray(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/intArrayQ?a={a}
         */
        getIntArrayQ(a: Array<number>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/intArrayQ2?a={a}
         */
        getIntArrayQ2(a: Array<number>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<number>>;
        /**
         * GET api/SuperDemo/int/{d}
         */
        getIntSquare(d: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/IReadOnlyCollection
         */
        getIReadOnlyCollection(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/IReadOnlyList
         */
        getIReadOnlyList(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/KeyValuePair
         */
        getKeyhValuePair(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            key: string;
            value: DemoWebApi_DemoData_Client.Person;
        }>;
        /**
         * GET api/SuperDemo/List
         */
        getList(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Person>>;
        /**
         * GET api/SuperDemo/NextHour/{dt}
         */
        getNextHour(dt: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * GET api/SuperDemo/NextHourNullable?n={n}&dt={dt}
         */
        getNextHourNullable(n: number, dt: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * GET api/SuperDemo/NextYear/{dt}
         */
        getNextYear(dt: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * GET api/SuperDemo/NextYearNullable?n={n}&dt={dt}
         */
        getNextYearNullable(n: number, dt: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * GET api/SuperDemo/NullableDecimal/{hasValue}
         */
        getNullableDecimal(hasValue: boolean, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/NullObject
         */
        getNullPerson(headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * GET api/SuperDemo/NullString
         */
        getNullString(headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
         */
        getPrimitiveNullable(location: string, dd: number, de: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: string;
            item2: number;
            item3: number;
        }>;
        /**
         * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
         */
        getPrimitiveNullable2(dd: number, de: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: number;
            item2: number;
        }>;
        /**
         * GET api/SuperDemo/sbyte
         */
        getsbyte(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/short
         */
        getShort(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/stringArrayQ?a={a}
         */
        getStringArrayQ(a: Array<string>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<string>>;
        /**
         * GET api/SuperDemo/stringArrayQ2?a={a}
         */
        getStringArrayQ2(a: Array<string>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<string>>;
        /**
         * GET api/SuperDemo/TextStream
         */
        getTextStream(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<Blob>>;
        /**
         * GET api/SuperDemo/uint
         */
        getUint(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/ulong
         */
        getulong(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * GET api/SuperDemo/ushort
         */
        getUShort(headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/ActionResult
         */
        postActionResult(headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<string>>;
        /**
         * POST api/SuperDemo/PostActionResult2
         */
        postActionResult2(s: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<Blob>>;
        /**
         * POST api/SuperDemo/PostActionResult3
         */
        postActionResult3(person: DemoWebApi_DemoData_Client.Person, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse<string>>;
        /**
         * POST api/SuperDemo/Collection
         */
        postCollection(list: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/DateOnly
         */
        postDateOnly(d: any, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * POST api/SuperDemo/DateOnlyNullable
         */
        postDateOnlyNullable(d: any, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * DateTime and DateTimeOffset may not be represented well in URL, so must put them into the POST body.
         * POST api/SuperDemo/DateTimeOffset
         */
        postDateTimeOffset(d: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * POST api/SuperDemo/DateTimeOffsetNullable
         */
        postDateTimeOffsetNullable(d: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * POST api/SuperDemo/enumPost?d={d}
         */
        postDay(d: DemoWebApi_DemoData_Client.Days, d2: DemoWebApi_DemoData_Client.Days, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<DemoWebApi_DemoData_Client.Days>>;
        /**
         * POST api/SuperDemo/StringPersonDic
         */
        postDictionary(dic: {
            [id: string]: DemoWebApi_DemoData_Client.Person;
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/Guids
         */
        postGuids(guids: Array<string>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<string>>;
        /**
         * POST api/SuperDemo/ICollection
         */
        postICollection(list: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/IList
         */
        postIList(list: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/int2d
         */
        postInt2D(a: number[][], headersHandler?: () => {
            [header: string]: string;
        }): Promise<boolean>;
        /**
         * POST api/SuperDemo/int2djagged
         */
        postInt2DJagged(a: Array<Array<number>>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<boolean>;
        /**
         * POST api/SuperDemo/intArray
         */
        postIntArray(a: Array<number>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<boolean>;
        /**
         * POST api/SuperDemo/IReadOnlyCollection
         */
        postIReadOnlyCollection(list: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/IReadOnlyList
         */
        postIReadOnlyList(list: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/List
         */
        postList(list: Array<DemoWebApi_DemoData_Client.Person>, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/SuperDemo/NextYear
         */
        postNextYear(dt: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<Date>;
        /**
         * POST api/SuperDemo/PostEmpty/{i}
         */
        postWithQueryButEmptyBody(s: string, i: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: string;
            item2: number;
        }>;
        /**
         * GET api/SuperDemo/SearchDateRange?startDate={startDate}&endDate={endDate}
         */
        searchDateRange(startDate: Date, endDate: Date, headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
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
        getPeopleCompany4(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Company;
        }>;
        /**
         * GET api/Tuple/PeopleCompany5
         */
        getPeopleCompany5(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Person;
            item5: DemoWebApi_DemoData_Client.Company;
        }>;
        /**
         * GET api/Tuple/Tuple1
         */
        getTuple1(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: number;
        }>;
        /**
         * GET api/Tuple/Tuple2
         */
        getTuple2(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: string;
            item2: number;
        }>;
        /**
         * GET api/Tuple/Tuple3
         */
        getTuple3(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: string;
            item2: string;
            item3: number;
        }>;
        /**
         * GET api/Tuple/Tuple4
         */
        getTuple4(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: number;
        }>;
        /**
         * GET api/Tuple/Tuple5
         */
        getTuple5(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: number;
        }>;
        /**
         * GET api/Tuple/Tuple6
         */
        getTuple6(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
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
        getTuple7(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
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
        getTuple8(headersHandler?: () => {
            [header: string]: string;
        }): Promise<{
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
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany3
         */
        linkPeopleCompany3(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Company;
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PeopleCompany4
         */
        linkPeopleCompany4(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Person;
            item3: DemoWebApi_DemoData_Client.Person;
            item4: DemoWebApi_DemoData_Client.Company;
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/PersonCompany1
         */
        linkPersonCompany1(peopleAndCompany: {
            item1: DemoWebApi_DemoData_Client.Person;
            item2: DemoWebApi_DemoData_Client.Company;
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<DemoWebApi_DemoData_Client.Person>;
        /**
         * POST api/Tuple/Tuple1
         */
        postTuple1(tuple: {
            item1: number;
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<number>;
        /**
         * POST api/Tuple/Tuple2
         */
        postTuple2(tuple: {
            item1: string;
            item2: number;
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple3
         */
        postTuple3(tuple: {
            item1: string;
            item2: string;
            item3: number;
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * POST api/Tuple/Tuple4
         */
        postTuple4(tuple: {
            item1: string;
            item2: string;
            item3: string;
            item4: number;
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
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
        }, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
    }
    class Values {
        private baseUri;
        constructor(baseUri?: string);
        /**
         * DELETE api/Values/{id}
         */
        delete(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
        /**
         * Get a list of value
         * GET api/Values
         */
        get(headersHandler?: () => {
            [header: string]: string;
        }): Promise<Array<string>>;
        /**
         * Get by both Id and name
         * GET api/Values/{id}?name={name}
         */
        getByIdAndName(id: number, name: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/Values?name={name}
         */
        getByName(name: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * GET api/Values/{id}
         */
        getById(id: number, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * POST api/Values
         */
        post(value: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<string>;
        /**
         * Update with valjue
         * PUT api/Values/{id}
         */
        put(id: number, value: string, headersHandler?: () => {
            [header: string]: string;
        }): Promise<AxiosResponse>;
    }
}
