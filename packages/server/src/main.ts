import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    await app.listen(4000)
}

// wait for db to accept connection
setTimeout(async () => await bootstrap(), 5000)
