import { Logger } from './Utils/Logger';
import { BaseResponse } from './BaseResponseModel';
import { HttpRequest } from './HttpRequest';
import * as global from './global';
import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { StorageUtil, KEYS } from './StorageUtil';
import { TaskCode } from './global';
import { from } from 'rxjs';
import { CityDetailResponse } from '../models/CityResponse';
import { MasterCategoryResponse } from '../models/MasterCategoriesResponse';
import { LoginDetailResponse, LoginDetail } from '../models/LoginResponse';
import { ServiceRequest, ServiceRequestResponse } from '../models/ServiceRequestResponse';



export class ApiGenerator {

  static postLoginApi(login: LoginDetail) {
    const httpreq = new HttpRequest(global.GET_LOGIN_URL);
    httpreq.params = classToPlain(login);
    httpreq.taskCode = TaskCode.GET_LOGIN_URL;
    httpreq.classTypeValue = LoginDetailResponse;
    httpreq.setPostMethod();
    return httpreq;
  }


  //     CITY      //

  static getAllCity() {
    const http = new HttpRequest(global.GET_ALL_CITY);
    http.classTypeValue = CityDetailResponse;
    http.taskCode = TaskCode.GET_ALL_CITY;
    return http;
  }
  static getByCityIdMasterCategoryRequest(id: number) {
    const httpreq = new HttpRequest(global.GET_BY_CITY_ID.concat("?cityId=").concat(id.toString()));
    httpreq.classTypeValue = MasterCategoryResponse;
    httpreq.taskCode = TaskCode.GET_BY_CITY_ID;
    return httpreq;
  }

  // Service Request

  static postServiceRequest(data: ServiceRequest) {
    const httpreq = new HttpRequest(global.POST_SERVICE_REQUEST);
    httpreq.params = classToPlain(data);
    httpreq.taskCode = TaskCode.POST_SERVICE_REQUEST;
    httpreq.classTypeValue = ServiceRequestResponse;
    httpreq.setPostMethod();
    return httpreq;
  }





}




export class JsonParser {
  static parseJson<T>(response: any, type: ClassType<T>): T {
    const parsedResponse = plainToClass(type, response as object);
    return parsedResponse;
  }

  static parseJsonString(response: any, type: ClassType<any>): any {
    const parsedResponse = plainToClass(type, response as object);
    return parsedResponse;
  }

  static parseJsonArray(response: any, type: ClassType<any>): any {
    const parsedResponse = plainToClass(type, response);
    return parsedResponse;
  }


}
