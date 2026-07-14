
import { Note, NoteData } from "./note";
import { Storage } from "./storage";

export class NoteService
{
    public static getAll()
    {
        return Storage.loadAllNotes();
    }

    public static load(id: number)
    {

    }

    public static save(note: Note)
    {
        note.id = NoteService.generateID();
        Storage.saveNote(note);
    }

    private static generateID(): number
    {
        return Date.now()
    }
}