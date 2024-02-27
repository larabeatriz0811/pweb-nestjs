import { Controller, Get } from '@nestjs/common';

@Controller('gatos')
export class GatosController {

    @Get()
    findAll(): string {
        return "Retorna a lista de todos os gatos."
    }

}
