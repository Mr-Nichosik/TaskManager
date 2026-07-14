
const STORAGE_KEY = "notes"

export function SaveNotes(newNote)
{
    let data = LoadNotes();

    let isNew: boolean = true

    data = data.map(note => {
        if (note.id == newNote)
        {
            note = newNote;
            isNew = false;
        }
    });

    if (!isNew)
    {
        data.push(newNote);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function LoadNotes()
{
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data)
        return [];

    return JSON.parse(data);
}