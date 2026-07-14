
export type NoteData = {
    id: number;
    title: string;
    text: string;
    pinned: boolean;
    tags: string[];
}

export class Note
{
    public id: number;
    public title: string;
    public text: string;
    public pinned: boolean;
    public tags: string[];

    constructor(id: number = 0, title: string = "default_title", text: string = "text", pinned: boolean = false, tags: string[] = [])
    {
        this.id = id;
        this.title = title;
        this.text = text;
        this.pinned = pinned;
        this.tags = tags;
    }

    public toObject(): NoteData
    {
        return {
            id: this.id,
            title: this.title,
            text: this.text,
            pinned: this.pinned,
            tags: this.tags
        }
    }

    public static fromObject(data: NoteData): Note
    {
        return new Note(data.id, data.title, data.text, data.pinned, data.tags)
    }
}