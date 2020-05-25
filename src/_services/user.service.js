import { authHeader, handleResponse } from '../_helpers';

export const userService = {
  getAll,
  getById,
  update,
  deleteUser
};

function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function update(id, name, second_name, email, phone, rating, position, telegram, viber, whatsapp, site, avatar) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({
      name,
      second_name,
      email,
      phone,
      rating,
      position,
      telegram,
      viber,
      whatsapp,
      site,
      avatar
    })
  };
  return fetch(`/api/auth/user/update/${id}`, requestOptions).then(handleResponse);
}

function deleteUser(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };
  return fetch(`/api/auth/user/destroy/${id}`, requestOptions).then(handleResponse);
}
