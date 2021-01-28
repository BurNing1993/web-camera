export function translateBase64ImgToFile(base64: string, filename = 'filename', contentType = 'image/png') {
  const arr = base64.split(',')  //去掉base64格式图片的头部
  const bstr = atob(arr[1])   //atob()方法将数据解码
  let len = bstr.length
  const u8arr = new Uint8Array(len)
  while (len--) {
    u8arr[len] = bstr.charCodeAt(len) //返回指定位置的字符的 Unicode 编码
  }
  return new File([u8arr], filename, { type: contentType })
}
