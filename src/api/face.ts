import { AxiosPromise } from 'axios';
import request from '../utils/request';

export function searchFace(imgCode:string):AxiosPromise<unknown>{
  return request({
    url:'/rest/img/search/base64/code',
    method:'POST',
    data:{imgCode}
  })
}
