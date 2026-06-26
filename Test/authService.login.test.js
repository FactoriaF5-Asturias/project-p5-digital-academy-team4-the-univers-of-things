import { describe, it, expect, beforeEach } from 'vitest'
import { authService } from '@/services/authService'

describe('authService.login', () => {

  beforeEach(() => {
    localStorage.clear()
  })

  it('should login hardcoded admin user', () => {
    const result = authService.login('test@test.com', '123456')
    expect(result.success).toBe(true)
    expect(result.user.role).toBe('admin')
  })

})