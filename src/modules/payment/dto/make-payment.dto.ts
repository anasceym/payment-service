import { ApiModelProperty } from '@nestjs/swagger'

import { PaymentStatus } from '../entity/payment'

export class MakePaymentRequestDto {
  @ApiModelProperty({
    description: 'Reference ID managed by order-service',
    example: 'id-1234',
  })
  referenceId: string

  @ApiModelProperty({
    description: 'Price of the order to be charged for the payment',
    example: '1000',
  })
  price: number
}

export class MakePaymentResponseDto {
  @ApiModelProperty({
    description: 'Reference ID managed by order-service',
    example: 'id-1234',
  })
  referenceId: string

  @ApiModelProperty({
    description: 'Status of the payment',
    example: 'CONFIRMED',
    enum: PaymentStatus,
  })
  status: PaymentStatus
}
