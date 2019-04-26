// import axios from "axios";

const rpcBody = {
  jsonrpc: '2.0',
  id: 1
}

function makeSend(axios) {
  return function(method, params, axiosParams) {
    const newBody = { ...rpcBody, method, params }
    rpcBody.id++
    let res = axios.$post('/rpc/v1', newBody, {
      ...axiosParams,
      errorHandle: false
    })
    console.log('axios', res)
    return res
  }
}

export default ({ app }, inject) => {
  inject('api', { call: makeSend(app.$axios) })
}
