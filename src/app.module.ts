import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuariosModule,
    AuthModule,
    SolicitacoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
