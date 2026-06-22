
export const authService = {
  login(email, password) {
    if (email === 'test@test.com' && password === '123456') {
      return {
        success: true,
        token: 'fake-admin-token',
        user: {
          email,
          role: 'admin'
        }
      }
    }

    if (email === 'user@test.com' && password === '123456') {
      return {
        success: true,
        token: 'fake-customer-token',
        user: {
          email,
          role: 'customer'
        }
      }
    }

    return {
      success: false,
      message: 'Invalid email or password.'
    }
  }
}

