import { Note } from "../data/note";
import { INoteViewer } from "../HTML-elements/note-viewer";

export class RemovedNoteViwer implements INoteViewer
{
    private window: HTMLElement;
    private overlay: HTMLElement;

    public titleInput: HTMLInputElement;
    public textarea: HTMLTextAreaElement;

    private restoreButton: HTMLButtonElement;
    private removeButton: HTMLButtonElement;

    private currentNote: Note;

    private callBack: CallableFunction;

    public constructor(callBack: CallableFunction)
    {
        this.window = document.getElementById("note-viewer")!;
        this.overlay = document.getElementById("overlay")!;

        this.titleInput = document.getElementById("note-viewer-title-input") as HTMLInputElement;
        this.textarea = document.getElementById("note-viewer-textarea") as HTMLTextAreaElement;

        this.restoreButton = document.getElementById("restore-button") as HTMLButtonElement;
        this.removeButton = document.getElementById("remove-button") as HTMLButtonElement;

        this.currentNote = new Note();

        this.callBack = callBack;

        this.restoreButton.addEventListener("click", () => this.Restore());
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

    private Restore()
    {
        this.Close();
    }

    private Remove()
    {
        this.Close();
    }

    private Close()
    {
        this.window.classList.remove("visible");
        this.overlay.classList.remove("visible");
    }
}