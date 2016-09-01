// A custom interceptor to automatically save jwt token from response.body.token
// to localstore, and include the auth token to the request.


var interceptor = require('rest/interceptor')

module.exports = interceptor({
  request: function handleRequest(request, config){

    var token = localStorage.getItem('token')
    if(token){
      if(!request.headers)
        request.headers = {}
      request.headers.Authorization = `Bearer ${token}`
    }
    return request
  }, 
  response: function handleResponse(response, config){
    if(response.entity && response.entity.token){
      localStorage.setItem('token', response.entity.token)
    }
    //clean token at 401 error.
    if(response.status.code === 401){
      localStorage.removeItem('token')
    }
    return response
  }
})