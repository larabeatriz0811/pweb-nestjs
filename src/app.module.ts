import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosController } from './gatos/gatos.controller';
import { GatosService } from './gatos/gatos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gato } from './gato.entity';
import { GatosModule } from './gatos/gatos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-co1gfpq1hbls73a3f25g-a.oregon-postgres.render.com',
      port: 5432,
      username: 'banco_teste_8urb_user',
      password: '123',
      database: 'banco_teste_8urb',
      entities: [Gato],
      synchronize: true,
      ssl: true,
    }),
    GatosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


