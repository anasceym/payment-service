import { Module } from '@nestjs/common'

import { configProvider } from '../config/config.provider'
import { PaymentModule } from '../payment/payment.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [PaymentModule],
  controllers: [AppController],
  providers: [AppService, configProvider],
})
export class AppModule {}
