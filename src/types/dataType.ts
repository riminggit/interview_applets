export interface IuserInfo {
  id: number,
  nick_name: string,
  avatar_url: string,
  gender: number,
  city: string,
  province: string,
  country: string,
  language: string,
  account?: number,
  come_from?: string,
  phone?: number,
}


export interface IClassify {
  count: number,
  rows: IClassifyItem[]
}


export interface IClassifyItem {
  id: number,
  name: string,
  img_url?: string,
  img_svg?: string,
  is_use: number,
}