import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';

describe('NotesService', () => {
    let service: NotesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [NotesService],
        }).compile();

        service = module.get<NotesService>(NotesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get an empty array', () => {
        expect(service.getAll()).toStrictEqual([]);
    })

    it('should add a note', () => {
        service.create({ title: 'hola', content: 'mundo' });
        expect(service.getAll()).toStrictEqual([{ title: 'hola', content: 'mundo', isFavourite: false }])
    })

    it('should first note be favourite', () => {
        service.create({ title: 'hola', content: 'mundo' });
        service.changeFavourite(0);
        expect(service.getById(0)).toMatchObject({ isFavourite: true })
    })

});
