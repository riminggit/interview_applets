import htttRequest from '../../utils/request';

//用户查询
export async function login(params:any) {
  return htttRequest('api/login',params,'POST',true);
}
