const checkPhone = (phoneNum) => {
  return /^(13|14|15|17|18|19)\d{9}$/.test(phoneNum)
}

export default {
  checkPhone
}
