
import { Note } from "./note";
import { Storage } from "./storage";

export class NoteService
{
    public static getAll(): Note[]
    {
        return Storage.loadAllNotes();
    }

    public static getPinned(): Note[]
    {
        return Storage.loadAllNotes().filter(note => note.pinned);
    }

    public static getUnPinned(): Note[]
    {
        return Storage.loadAllNotes().filter(note => !note.pinned);
    }

    public static load(id: number)
    {

    }

    public static save(note: Note)
    {
        note.id = NoteService.generateID();
        Storage.saveNote(note);
    }

    public static edit(note: Note)
    {
        Storage.editNote(note);
    }

    public static remove(note: Note)
    {
        Storage.removeNote(note);
    }

    public static removeForever(note: Note)
    {
        Storage.removeNoteForever(note);
    }

    public static restore(note: Note)
    {
        Storage.restoreNote(note);
    }

    public static getAllRemoved(): Note[]
    {
        return Storage.loadRemovedNotes();
    }

    private static generateID(): number
    {
        return Date.now();
    }
}