
import { NoteService } from "../data/note-service";
import { Note } from "../data/note";

export class EditWindow
{
    private window: HTMLElement;
    private overlay: HTMLElement;

    private titleInput: HTMLInputElement;
    private textarea: HTMLTextAreaElement;

    private saveButton: HTMLButtonElement;
    private pinButton: HTMLButtonElement;
    private removeButton: HTMLButtonElement;

    private currentNote: Note;

    constructor()
    {
        this.window = document.getElementById("note-edit-window")!;
        this.overlay = document.getElementById("overlay")!;

        this.titleInput = document.getElementById("note-edit-title-input") as HTMLInputElement;
        this.textarea = document.getElementById("note-edit-textarea") as HTMLTextAreaElement;

        this.saveButton = document.getElementById("save-button") as HTMLButtonElement;
        this.pinButton = document.getElementById("pin-button") as HTMLButtonElement;
        this.removeButton = document.getElementById("remove-button") as HTMLButtonElement;

        this.currentNote = new Note();

        this.saveButton.addEventListener("click", () => this.Close());
        this.pinButton.addEventListener("click", () => this.Pin());
    }

    Open(note: Note)
    {
        this.currentNote = note;

        this.titleInput.value = note.title;
        this.textarea.value = note.text;

        this.window.classList.add("visible");
        this.overlay.classList.add("visible")
    }

    Close()
    {
        this.window.classList.remove("visible");
        this.overlay.classList.remove("visible");

        this.Save();
    }

    Save()
    {
        this.currentNote.title = this.titleInput.value;
        this.currentNote.text = this.textarea.value;

        NoteService.edit(this.currentNote);
    }

    Pin()
    {
        this.currentNote.pinned = !this.currentNote.pinned;
    }
}