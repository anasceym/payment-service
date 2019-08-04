import { Injectable } from '@nestjs/common'

export enum PAYMENT_STATUS {
  DECLINED = 'DECLINED',
  CONFIRMED = 'CONFIRMED',
}

export interface Order {
  id: string
  price: number
}

@Injectable()
export class Payment {
  async make (
    order: Order,
  ): Promise<{
    order: Order
    status: PAYMENT_STATUS
  }> {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve({
          order,
          status: randomPaymentResult(PAYMENT_STATUS),
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
