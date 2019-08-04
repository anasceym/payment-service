import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './modules/app/app.module'
import { CONFIG } from './modules/config/config.provider'
import { Config } from './modules/config/interface/config.interface'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)

  const options = new DocumentBuilder()
    .setTitle('Payment Service')
    .setDescription('The payment-service API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  const config = app.get<Config>(CONFIG)

  await app.listen(config.app.port, config.app.host)
}

// tslint:disable-next-line: no-floating-promises
bootstrap()
