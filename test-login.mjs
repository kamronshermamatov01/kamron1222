import axios from 'axios'

async function main() {
  const base = process.env.API_BASE || 'http://127.0.0.1:8080'
  try {
    const params = new URLSearchParams({ username: 'admin', password: 'admin123' })
    const { data } = await axios.post(base + '/auth/login', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: 5000,
    })
    console.log('LOGIN_OK', JSON.stringify(data))
    const me = await axios.get(base + '/auth/me', { headers: { Authorization: `Bearer ${data.access_token}` } })
    console.log('ME_OK', JSON.stringify(me.data))
  } catch (e) {
    if (e.response) {
      console.log('LOGIN_FAIL_STATUS', e.response.status)
      console.log('LOGIN_FAIL_BODY', JSON.stringify(e.response.data))
    } else {
      console.log('LOGIN_ERROR', String(e.message || e))
    }
  }
}

main()


