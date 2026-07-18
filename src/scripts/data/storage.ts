
import { NoteData, Note } from "./note";

export class Storage
{
    private static readonly STORAGE_KEY: string = "notes"
    private static readonly TRASH_KEY: string = "trash"

    public static loadAllNotes(): Note[]
    {
        const notes: Note[] = [];

        for (const note of Storage.rawLoad())
        {
            notes.push(Note.fromObject(note));
        }

        return notes;
    }

    public static saveNote(note: Note)
    {
        const data = Storage.rawLoad();
        data.push(note.toObject());

        Storage.saveData(data);
    }

    public static editNote(editedNote: Note)
    {
        const data = Storage.rawLoad();

        for (let note of data)
        {
            console.log(note);
            if (note.id === editedNote.id)
            {
                note.title = editedNote.title;
                note.text = editedNote.text;
                note.pinned = editedNote.pinned;
                note.tags = editedNote.tags;

                console.log(data);
                Storage.saveData(data)
                return;
            }
        }

        console.warn("no elements were changed");
    }

    public static removeNote(note: Note)
    {
        const data = Storage.rawLoad();
        for (let i = 0; i < data.length; i++)
        {
            if (data[i].id === note.id)
            {
                const trash = Storage.loadTrash();
                console.log(trash)
                trash.push(note.toObject());
                console.log(trash);
                Storage.saveTrash(trash);

                Storage.saveData(data.filter(note => note.id !== data[i].id));
                return;
            }
        }

        console.warn("no elements were removed");
    }

    public static loadRemovedNotes(): Note[]
    {
        const notes: Note[] = [];

        for (const note of Storage.loadTrash())
        {
            notes.push(Note.fromObject(note));
        }

        return notes;
    }

    private static rawLoad(): NoteData[]
    {
        const data: string | null = localStorage.getItem(this.STORAGE_KEY);

        if (data) { return JSON.parse(data); }

        return [];
    }

    private static loadTrash(): NoteData[]
    {
        const data: string | null = localStorage.getItem(this.TRASH_KEY);

        if (data) { return JSON.parse(data); }

        return [];
    }

    private static saveTrash(data: NoteData[])
    {
        localStorage.setItem(Storage.TRASH_KEY, JSON.stringify(data));
    }

    private static saveData(data: NoteData[])
    {
        localStorage.setItem(Storage.STORAGE_KEY, JSON.stringify(data));
    }
}