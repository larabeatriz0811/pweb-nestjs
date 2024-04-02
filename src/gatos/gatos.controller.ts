import { Body, Controller, Delete, Get, HttpStatus, Injectable, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { fail } from 'assert';
import { Response } from 'express';
import { Gato } from 'src/gato/gato.interface';
import { GatosService } from './gatos.service';
import { promises } from 'dns';

@Controller('gatos')
export class GatosController {

    constructor(private gatosService: GatosService) {}

    @Get()
    findAll(): Promise <Gato[]> {
        return this.gatosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number, @Res() response: Response) {
       
        const gato = this.gatosService.findOne(id);

        if(gato){
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id : number, @Res() response: Response){
        const index = this.gatosService.findIndexById(id);
        if(index >=0){
            this.gatosService.deleteByIndex(index);
            response.status(HttpStatus.NO_CONTENT).send();
    } else{
        response.status(HttpStatus.NOT_FOUND).send();
    }
}

@Post()
create(@Body()gato: Gato) {
    this.gatosService.create(gato);
    return gato;
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id : number, @Body() gato: Gato, @Res() response: Response) {
        const index = this.gatosService.findIndexById(id);
        if(index >= 0){
            this.gatosService.updateByIndex(index, gato);
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }
}

