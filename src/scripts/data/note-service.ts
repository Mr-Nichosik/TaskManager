
import { Note, NoteData } from "./note";
import { Storage } from "./storage";
import { application } from "../index";

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
        application.refresh();
    }

    public static edit(note: Note)
    {
        Storage.editNote(note);
        application.refresh();
    }

    public static remove(note: Note)
    {
        Storage.removeNote(note);
        application.refresh();
    }

    private static generateID(): number
    {
        return Date.now()
    }
}