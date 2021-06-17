import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

describe('NotesController', () => {
    let controller: NotesController;
    let noteService: NotesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [NotesController],
            providers: [NotesService]
        }).compile();

        controller = module.get<NotesController>(NotesController);
        noteService = module.get<NotesService>(NotesService)
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it(`findAll`, async () => {
        const result = [{ title: 'hola', content: 'mundo', isFavourite: true }]
        jest.spyOn(noteService, 'getAll').mockImplementation(() => result);

        expect(await controller.findAll()).toBe(result);
    });

});
