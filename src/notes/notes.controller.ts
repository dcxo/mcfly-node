import { Controller, Post, Get, Body, Param, ParseIntPipe, Put } from '@nestjs/common';
import { Note } from 'src/note.interface';
import { NotesService } from './notes.service';
// import { Request } from 'express';

export class CreateNoteDTO {
    title: string;
    content: string
}

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) { }

    @Post()
    postNote(@Body() newNote: CreateNoteDTO) {
        this.notesService.create(newNote)
    }

    @Get()
    async findAll(): Promise<Note[]> {
        return this.notesService.getAll();
    }

    @Get('favourites')
    async getFavourites(): Promise<Note[]> {
        return this.notesService.getFavourites();
    }

    @Get(':id')
    async getById(@Param('id', ParseIntPipe) id: number): Promise<Note> {
        return this.notesService.getById(id);
    }

    @Put(':id/favourite')
    async changeFavourite(@Param('id', ParseIntPipe) id: number) {
        return this.notesService.changeFavourite(id);
    }

}
