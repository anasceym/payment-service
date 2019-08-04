import { Module } from '@nestjs/common'

import { configProvider } from '../config/config.provider'
import { loggerProvider } from '../logger/logger.service'
import { PaymentController } from './payment.controller'
import { PaymentService } from './payment.service'

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, configProvider, loggerProvider],
})
export class PaymentModule {}
