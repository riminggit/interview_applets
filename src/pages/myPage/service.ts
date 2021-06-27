import htttRequest from '../../utils/request';


//用户查询
export async function weappLoginApi(params:any) {
    return htttRequest('api/weappLogin',params,'POST',true);
}