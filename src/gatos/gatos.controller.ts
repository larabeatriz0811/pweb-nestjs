import { Controller, Get } from '@nestjs/common';
import { Gato } from 'src/gato/gato.interface';

@Controller('gatos')
export class GatosController {

    private readonly gatos: Gato[] = [
        {
            id: 1,
            nome: "Black",
            raca: "Mestiça",
            idade: 2
        },
        {
            id: 2,
            nome: "Garfield",
            raca: "Desconhecida",
            idade: 45
        }
    ];

    @Get()
    findAll(): Gato[] {
        return this.gatos;
    }

}
