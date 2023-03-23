import axios from 'axios'

test('1 + 2 = 3', () => {
  expect(1 + 2).toBe(3)
})

test('post request', async () => {
  const response = await axios.post('http://localhost:3000/api/post', {
    username: 'John',
    password: 'Password123',
  })

  expect(response.data).toBeInstanceOf(Object)
})
