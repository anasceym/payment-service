import { Test, TestingModule } from '@nestjs/testing'

import { configProvider } from '../config/config.provider'
import { loggerProvider } from '../logger/logger.service'
import { PaymentController } from './payment.controller'
import { PaymentService } from './payment.service'

describe('Payment Controller', () => {
  let controller: PaymentController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService, loggerProvider, configProvider],
    }).compile()

    controller = module.get<PaymentController>(PaymentController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
