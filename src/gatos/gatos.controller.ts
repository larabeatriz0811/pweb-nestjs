import { Body, Controller, Delete, Get, HttpStatus, Injectable, Param, Post, Put, Res } from '@nestjs/common';
import { fail } from 'assert';
import { Response } from 'express';
import { Gato } from 'src/gato/gato.interface';
import { GatosService } from './gatos.service';

@Controller('gatos')
export class GatosController {

    constructor(private gatosService: GatosService) {}

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
        return this.gatosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string, @Res() response: Response) {
       
        const gato = this.gatosService.findOne(Number(id));

        if(gato){
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    delete(@Param('id') id : string, @Res() response: Response){
        const index = this.gatos.findIndex((gato) => gato.id === Number(id));
        if(index >=0){
            response.status(HttpStatus.NO_CONTENT).send();
    } else{
        response.status(HttpStatus.NOT_FOUND).send();
    }
}

@Post()
create(@Body()gato: Gato) {
    // console.log('create'); 
    // console.log(gato);
    this.gatos.push(gato);
    return gato;
    }

    @Put(':id')
    update(@Param('id') id : string, @Body() gato: Gato, @Res() response: Response) {
        const index = this.gatos.findIndex((gato) => gato.id === Number(id));
        if(index >= 0){
            this.gatos.splice(index, 1, gato);
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }
}

