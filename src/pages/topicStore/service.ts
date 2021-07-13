import Taro from "@tarojs/taro";
import htttRequest from '../../utils/request';


const taro_env = process.env.TARO_ENV

//用户查询
export async function queryClassify(params?: any) {
    return htttRequest('api/queryClassify', params, 'POST', true);
}
