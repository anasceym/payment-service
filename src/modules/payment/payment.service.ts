import { Injectable } from '@nestjs/common'

import { MakePaymentResponseDto } from './dto/make-payment.dto'
import { PaymentStatus } from './entity/payment'

export interface Order {
  id: string
  price: number
}

@Injectable()
export class PaymentService {
  async make (
    referenceId: string,
    price: number
  ): Promise<MakePaymentResponseDto> {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          referenceId,
          status: randomPaymentResult(PaymentStatus),
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
