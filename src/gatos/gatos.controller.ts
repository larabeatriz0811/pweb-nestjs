import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
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

    @Get(':id')
    findOne(@Param('id') id : string, @Res() response: Response) {
        const gato = this.gatos.find((gato) => gato.id === Number(id));
        if(gato){
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

}
