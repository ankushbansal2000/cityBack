import { BaseResponse } from './../framework/BaseResponseModel';
export class ServiceRequestResponse extends BaseResponse
{
    response : ServiceRequests
}

export class ServiceRequests extends BaseResponse
{
    data: number;
} 
export class ServiceRequest {
    name: string='';
        mobile: string='';
        categoryId: string;
        userId: string;
        cityId: number;
}