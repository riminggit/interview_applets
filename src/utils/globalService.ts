import htttRequest from './request';

//用户查询
export async function getOpenId(params:any) {
    return htttRequest('api/user-login/wxapp-get-openid',params,'POST',true);
}
  
  
