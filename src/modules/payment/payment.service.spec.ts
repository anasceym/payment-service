import { Test, TestingModule } from '@nestjs/testing'

import { Order, Payment } from './payment.service'

describe('Payment', () => {
  let provider: Payment

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Payment],
    }).compile()

    provider = module.get<Payment>(Payment)
  })

  it('should be defined', () => {
    expect(provider).toBeDefined()
  })

  describe('Make a payment', () => {
    it('resolve random status "CONFIRMED/DECLINED"', async () => {
      const fakeOrder: Order = {
        id: 'id-1234',
        price: 1000,
      }

      const result = await provider.make(fakeOrder)

      expect(result.status).toMatch(/CONFIRMED|DECLINED/)
      expect(result.order.id).toBe(fakeOrder.id)
    })
  })
})
