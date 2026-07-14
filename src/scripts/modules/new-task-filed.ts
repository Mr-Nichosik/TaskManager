
import { Note } from "../data/note";
import { NoteService } from "../data/note-service";

export class NewTaskField
{
    textarea: HTMLTextAreaElement;
    saveButton: HTMLButtonElement;
    container: HTMLElement;
    currentNote: Note;

    constructor()
    {
        this.textarea = document.getElementById("new-task-textarea") as HTMLTextAreaElement;
        this.saveButton = document.getElementById("save-new-task-button") as HTMLButtonElement;
        this.container = document.getElementById("new-task-block");

        this.currentNote = new Note();

        this.textarea.addEventListener("focus", () => this.OnFocus());
        this.container.addEventListener("focusout", (e) => this.OnBlur(e));
        this.saveButton.addEventListener("click", () => this.OnSave())
    }

    OnFocus()
    {
        this.textarea.classList.add("focused");
        this.saveButton.classList.add("visible");
    }

    OnBlur(event)
    {
        const relatedTarget = event.relatedTarget
        if (relatedTarget && this.container.contains(relatedTarget))
        {
            return;
        }

        this.textarea.classList.remove("focused");
        this.saveButton.classList.remove("visible");
    }

    OnSave()
    {
        if (this.textarea.value === "") { return; }

        const lines = this.textarea.value.split('\n');

        this.currentNote.title = lines[0];
        this.currentNote.text = lines.slice(1).join('\n');

        NoteService.save(this.currentNote);
    }
}