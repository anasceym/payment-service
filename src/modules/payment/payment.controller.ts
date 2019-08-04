import { Body, Controller, HttpCode, HttpStatus, InternalServerErrorException, Post } from '@nestjs/common'
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiUseTags } from '@nestjs/swagger'
import * as T from 'tswrap'

import { MakePaymentRequestDto, MakePaymentResponseDto } from './dto/make-payment.dto'
import { PaymentService } from './payment.service'

@Controller('payments')
@ApiUseTags('payments')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) {}

  @Post('make')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({type: MakePaymentResponseDto})
  @ApiInternalServerErrorResponse({ description: 'Internal server error'})
  async make (
    @Body() body: MakePaymentRequestDto
  ): Promise<MakePaymentResponseDto> {
    const result = await T.wrapPromise<MakePaymentResponseDto>(this.paymentService.make(
      body.referenceId,
      body.price
    ))

    if (T.isError(result)) {
      throw new InternalServerErrorException()
    }
    
    return result    
  }
}
