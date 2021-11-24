import request from 'superagent'

// Example API
export function exampleAPI () {
  console.log('exampleAPI')
  return request.get('/api/v1/exampleRoute')
    .then(res => {
      console.log('exampleAPI response', res.text)
      return res.text
    })
}
