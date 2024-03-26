import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosController } from './gatos/gatos.controller';
import { GatosService } from './gatos/gatos.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-co1gfpq1hbls73a3f25g-a.oregon-postgres.render.com',
      port: 5432,
      username: 'banco_teste_8urb_user',
      password: '31/03',
      database: 'banco_teste_8urb',
      entities: [],
      synchronize: true,
      ssl: true,
    }),
  ],
  controllers: [AppController, GatosController],
  providers: [AppService, GatosService],
})
export class AppModule {}


