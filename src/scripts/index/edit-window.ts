
import { NoteService } from "../data/note-service";
import { Note } from "../data/note";
import { INoteViewer } from "../HTML-elements/note-viewer";

export class EditWindow implements INoteViewer
{
    private window: HTMLElement;
    private overlay: HTMLElement;

    public titleInput: HTMLInputElement;
    public textarea: HTMLTextAreaElement;

    private saveButton: HTMLButtonElement;
    private pinButton: HTMLButtonElement;
    private removeButton: HTMLButtonElement;

    private currentNote: Note;

    private callBack: CallableFunction;

    public constructor(callBack: CallableFunction)
    {
        this.window = document.getElementById("note-edit-window")!;
        this.overlay = document.getElementById("overlay")!;

        this.titleInput = document.getElementById("note-edit-title-input") as HTMLInputElement;
        this.textarea = document.getElementById("note-edit-textarea") as HTMLTextAreaElement;

        this.saveButton = document.getElementById("save-button") as HTMLButtonElement;
        this.pinButton = document.getElementById("pin-button") as HTMLButtonElement;
        this.removeButton = document.getElementById("remove-button") as HTMLButtonElement;

        this.currentNote = new Note();

        this.callBack = callBack;

        this.saveButton.addEventListener("click", () => this.Save());
        this.pinButton.addEventListener("click", () => this.Pin());
        this.removeButton.addEventListener("click", () => this.Remove());
    }

    public Open(note: Note)
    {
        this.currentNote = note;

        this.titleInput.value = note.title;
        this.textarea.value = note.text;

        this.window.classList.add("visible");
        this.overlay.classList.add("visible")
    }

    private Save()
    {
        this.currentNote.title = this.titleInput.value;
        this.currentNote.text = this.textarea.value;

        NoteService.edit(this.currentNote);
        this.callBack();

        this.Close();
    }

    private Close()
    {
        this.window.classList.remove("visible");
        this.overlay.classList.remove("visible");
    }

    private Pin()
    {
        this.currentNote.pinned = !this.currentNote.pinned;
    }

    private Remove()
    {
        NoteService.remove(this.currentNote);
        this.callBack();

        this.Close();
    }
}