import { Test, TestingModule } from '@nestjs/testing'

import { PaymentService } from './payment.service'

describe('Payment', () => {
  let provider: PaymentService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService],
    }).compile()

    provider = module.get<PaymentService>(PaymentService)
  })

  it('should be defined', () => {
    expect(provider).toBeDefined()
  })

  describe('Make a payment', () => {
    it('resolve random status "CONFIRMED/DECLINED"', async () => {
      const fakeRefId = 'id-1234'
      const price = 1000

      const result = await provider.make(fakeRefId, price)

      expect(result.status).toMatch(/CONFIRMED|DECLINED/)
      expect(result.referenceId).toBe(fakeRefId)
    })
  })
})
