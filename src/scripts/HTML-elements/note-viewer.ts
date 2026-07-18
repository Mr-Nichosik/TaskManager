import { Note } from "../data/note";

export interface INoteViewer
{
    titleInput: HTMLInputElement;
    textarea: HTMLTextAreaElement;

    Open(note: Note): void;
}