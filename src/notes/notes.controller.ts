import { Controller, Post, Get, Req, Body, Param } from '@nestjs/common';
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

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Note> {
        return this.notesService.getById(id);
    }

}
