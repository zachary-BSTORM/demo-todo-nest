import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity.js';
import { CreateTodo } from './dtos/create-todo.dto.js';
import { UpdateTodo } from './dtos/update-todo.dto.js';

@Injectable()
export class TodosService {

    datas : Todo[] = [
        {
            id : 1,
            title : "todo 1",
            createdAt : new Date(),
            done : false
        }
    ]

    lastId = 1

    findAll() : Todo[]{
        return this.datas
    }

    findOne(id : number): Todo{
        const todo = this.datas.find( t => t.id == id)

        if(!todo){
            throw new NotFoundException(`Aucune todo avec l' id {id}`)
        }

        return todo
    }

    create(newTodo : CreateTodo) : Todo{
        const todo : Todo = {
            id : this.lastId + 1,
            title : newTodo.title,
            done : false,
            createdAt : new Date()
        }
        this.datas.push(todo)
        this.lastId ++
        return todo
    }

    update(id : number , updatedTodoDto : UpdateTodo) : Todo{
        const todo = this.findOne(id)

        Object.assign(todo,updatedTodoDto)

        return todo
    }

    delete(id : number): void{
        const index = this.datas.findIndex(t => t.id == id)

        if(index == -1){
            throw new NotFoundException(`Aucune tache avec l'id ${id}`)
        }
        this.datas.splice(index,1)
    }
}
