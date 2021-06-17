import { Injectable } from '@nestjs/common';
import { Note } from 'src/note.interface';
import { CreateNoteDTO } from './notes.controller';

@Injectable()
export class NotesService {
    private readonly notes: Note[] = [];
    private counter: number = 0;

    create(note: CreateNoteDTO) {
        this.notes.push({ id: this.counter++, ...note, isFavourite: false });
    }

    getAll(): Note[] {
        return this.notes;
    }

    getById(id: number) {
        return this.notes.filter(note => note.id == id)[0]
    }
}
