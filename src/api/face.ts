import { AxiosPromise } from 'axios';
import request from '../utils/request';

export function searchFace(imgCode: string): AxiosPromise<unknown> {
  return request({
    url: '/img/search/base64/code',
    method: 'POST',
    // data: { imgCode: imgCode.replace('data:image/png;base64,', '') }
    data: { imgCode }
  })
}

export function searchFaceByFile(data: FormData): AxiosPromise<unknown> {
  return request({
    url: '/img/search/base64/file',
    method: 'POST',
    // data: { imgCode: imgCode.replace('data:image/png;base64,', '') }
    data,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
