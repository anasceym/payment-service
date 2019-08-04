import { Inject, Injectable } from '@nestjs/common'
import * as bunyan from 'bunyan'

import { LOGGER } from '../logger/logger.service'
import { MakePaymentResponseDto } from './dto/make-payment.dto'
import { PaymentStatus } from './entity/payment'

@Injectable()
export class PaymentService {
  constructor (
    @Inject(LOGGER) private readonly logger: bunyan
  ) {}
  async make (
    referenceId: string,
    price: number,
  ): Promise<MakePaymentResponseDto> {
    return new Promise(resolve => {
      this.logger.info({ referenceId, price }, 'Payment initiated')

      setTimeout(() => {
        const paymentResult = randomPaymentResult(PaymentStatus)

        this.logger.info({ referenceId, price, result: paymentResult }, 'Payment initiated')
        return resolve({
          referenceId,
          status: paymentResult,
        })
      }, 3000)
    })
  }
}

function randomPaymentResult<T> (anEnum: T): T[keyof T] {
  const enumValues = (Object.keys(anEnum) as unknown) as Array<T[keyof T]>

  const randomIndex = Math.floor(Math.random() * enumValues.length)
  const randomEnumValue = enumValues[randomIndex]
  return randomEnumValue
}
