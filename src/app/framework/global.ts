// test server
// export const API_BASE_URL = "http://103.21.187.3:8095/tripleplay/";

//Live server
export const API_BASE_URL = "http://174.138.121.157:8888/atyourhome/api/";


// login //
export const GET_LOGIN_URL = API_BASE_URL + "user/login";

// CITY

export const GET_ALL_CITY = API_BASE_URL + "city/all";

export const GET_BY_CITY_ID = API_BASE_URL + "masterCategories/getByCityId";

// Service Request

export const POST_SERVICE_REQUEST = API_BASE_URL + "serviceRequest/create";

export enum TaskCode {
    GET_ALL_CITY,
    GET_BY_CITY_ID,
    GET_LOGIN_URL,
    POST_SERVICE_REQUEST
}
