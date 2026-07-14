
import { NoteData, Note } from "./note";

export class Storage
{
    private static readonly STORAGE_KEY: string = "notes"

    public static loadAllNotes(): Note[]
    {
        const notes: Note[] = []

        for (const note of Storage.rawLoad())
        {
            // console.log(note);
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

    private static rawLoad(): NoteData[]
    {
        const data: string | null = localStorage.getItem(this.STORAGE_KEY);

        if (data) { return JSON.parse(data); }

        return [];
    }

    private static saveData(data: NoteData[])
    {
        localStorage.setItem(Storage.STORAGE_KEY, JSON.stringify(data));
    }
}