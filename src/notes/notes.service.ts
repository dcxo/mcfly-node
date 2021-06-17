import { Injectable } from '@nestjs/common';
import { Note } from 'src/note.interface';
import { CreateNoteDTO } from './notes.controller';

@Injectable()
export class NotesService {
    private readonly notes: Note[] = [];

    create(note: CreateNoteDTO) {
        this.notes.push({ ...note, isFavourite: false });
    }

    getAll(): Note[] {
        return this.notes;
    }

    getById(id: number) {
        return this.notes[id]
    }

    changeFavourite(id: number) {
        let note = this.notes[id];
        note.isFavourite = !note.isFavourite;
    }

    getFavourites(): Note[] | PromiseLike<Note[]> {
        return this.notes.filter(note => note.isFavourite);
    }
}
