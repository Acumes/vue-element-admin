import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: '/users/getUsers',
    method: 'post',
    data
  })
}

export function addUser(data) {
  return request({
    url: '/users/add',
    method: 'post',
    data
  })
}

export function updateUser(data) {
  return request({
    url: '/users',
    method: 'put',
    data
  })
}

export function checkUser(data) {
  return request({
    url: '/users/checkUser',
    method: 'post',
    data
  })
}

export function delUser(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}

export function getRoles(data) {
  return request({
    url: '/roles/getRoles',
    method: 'post',
    data
  })
}

export function addRole(data) {
  return request({
    url: '/roles/',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/roles/',
    method: 'put',
    data
  })
}

export function delRole(id) {
  return request({
    url: '/roles/' + id,
    method: 'delete'
  })
}

export function getMenuTree(data) {
  return request({
    url: '/menu/tree',
    method: 'post',
    data
  })
}

export function addMenu(data) {
  return request({
    url: '/menu',
    method: 'post',
    data
  })
}

export function updateMenu(data) {
  return request({
    url: '/menu',
    method: 'put',
    data
  })
}

export function delMenu(id) {
  return request({
    url: '/menu/' + id,
    method: 'delete'
  })
}

export function getCountChild(id) {
  return request({
    url: '/menu/isChild/' + id,
    method: 'get'
  })
}

export function getRoleMenuIds(id) {
  return request({
    url: '/roles/menu/' + id,
    method: 'get'
  })
}

export function authorization(id, data) {
  return request({
    url: '/roles/authorization/' + id,
    method: 'post',
    data
  })
}

export function getSchedules(data) {
  return request({
    url: '/schedule/getSchedules',
    method: 'post',
    data
  })
}

export function addSchedules(data) {
  return request({
    url: '/schedule/',
    method: 'post',
    data
  })
}

export function getUserLoginLog() {
  return request({
    url: '/users/loginLog',
    method: 'get'
  })
}
