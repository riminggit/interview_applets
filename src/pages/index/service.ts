import htttRequest from '../../utils/request';

//用户查询
export async function getOpenId(params:any) {
    return htttRequest('api/weappGetOpenCode',params,'POST',true);
}
  
  
