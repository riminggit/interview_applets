import Taro from "@tarojs/taro";
import htttRequest from './request';


const taro_env = process.env.TARO_ENV

// 查询classify
export async function queryClassify(params?: any) {
    return htttRequest('api/queryClassify', params, 'POST', true);
}

// 获取颜色分类
export async function getClassifyColor(params?: any) {
    return htttRequest('api/getClassifyColor', params, 'POST', true);
}

