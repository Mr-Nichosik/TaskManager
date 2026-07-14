
import { Note, NoteData } from "./note";
import { Storage } from "./storage";
import { renderer } from "../index";

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
        renderer.Render();
    }

    public static edit(note: Note)
    {
        Storage.editNote(note);
        renderer.Render();
    }

    private static generateID(): number
    {
        return Date.now()
    }
}