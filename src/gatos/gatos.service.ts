import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gato } from 'src/gato.entity';
import { Gato as GatoInterface} from 'src/gato/gato.interface';
import { Repository } from 'typeorm';

@Injectable()
export class GatosService {

    private readonly gatos: GatoInterface[] = [
        {
            id: 11,
            nome: "Black 1",
            raca: "Mestiça 1",
            idade: 12
        },
        {
            id: 12,
            nome: "Garfield 1",
            raca: "Desconhecida 1",
            idade: 145
        }
    ];
    constructor(@InjectRepository(Gato) private gatosRepository: Repository<Gato>){

    }

    findAll(): Promise<Gato[]> {
        return this.gatosRepository.find();
    }

    findOne (id:number): Promise <Gato| null> {
        return this.gatosRepository.findOneBy({id});
    }

    findIndexById(id: number) : number{
        return this.gatos.findIndex((gato) => gato.id === (id));
    }

    deleteByIndex(index : number){
        this.gatos.splice(index, 1);
    }

    create(gato: GatoInterface) {
        this.gatos.push(gato);
    }

    updateByIndex(index : number, gato: GatoInterface){
        this.gatos.splice(index, 1, gato);
    }

}

