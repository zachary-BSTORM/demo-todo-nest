import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UnauthorizedException } from '@nestjs/common';
import { TodosService } from './todos.service.js';
import { CreateTodo } from './dtos/create-todo.dto.js';
import { Todo } from './entities/todo.entity.js';
import { UpdateTodo } from './dtos/update-todo.dto.js';

@Controller('todos')
export class TodosController {

    // injection du service
    constructor(
        private readonly todoService : TodosService
    ){}

    // verbe et appel du service
    @Get()
    findAll() : Todo[]{
        return this.todoService.findAll()
    }

    @Get(':id')
    findOne(@Param('id' , ParseIntPipe) id : number) : Todo{
        return this.todoService.findOne(id)
    }

    @Post()
    create(@Body() createTodoDto : CreateTodo) : Todo{
        return this.todoService.create(createTodoDto)
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id : number,
        @Body() updatedTodoDto : UpdateTodo,
    ) : Todo{
       return this.todoService.update(id,updatedTodoDto)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id',ParseIntPipe) id : number): void{
        this.todoService.delete(id)
    }

}
