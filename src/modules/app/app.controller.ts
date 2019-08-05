import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'

import { AppService } from './app.service'

@Controller()
@ApiUseTags('Utility')
export class AppController {
  constructor (private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({
    title: 'Service health check',
    description: 'To check the healthiness of the service'
  })
  @ApiOkResponse({
    description: 'Service healthy'
  })
  healthCheck (): {
    status: string
  } {
    return {
      status: 'OK'
    }
  }
}
