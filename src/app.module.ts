import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VariablesModule } from './variables/variables.module';
import { EsponjasModule } from './esponjas/esponjas.module';
import { ForrosModule } from './forros/forros.module';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module';
import { QuotationEngineModule } from './quotation-engine/quotation-engine.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsuariosModule, VariablesModule, EsponjasModule, ForrosModule, CotizacionesModule, QuotationEngineModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
