import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/user',
    method: 'post',
    data
  })
}

export function queryAll() {
  return request({
  url: 'api/queryAll/user',
  method: 'get',
  })
}

export function findById() {
  return request({
  url: 'api/findById/user',
  method: 'get',
  })
}

export function del(id) {
  return request({
    url: 'api/user/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/user',
    method: 'put',
    data
  })
}
