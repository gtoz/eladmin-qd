import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/car',
    method: 'post',
    data
  })
}

export function queryAll() {
  return request({
  url: 'api/queryAll/car',
  method: 'get',
  })
}

export function findById() {
  return request({
  url: 'api/findById/car',
  method: 'get',
  })
}

export function del(id) {
  return request({
    url: 'api/car/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/car',
    method: 'put',
    data
  })
}
