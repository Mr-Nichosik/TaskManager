
import { Note } from "../data/note";
import { NoteService } from "../data/note-service";

export class NewTaskField
{
    private textarea: HTMLTextAreaElement;
    private saveButton: HTMLButtonElement;
    private container: HTMLElement;

    private callBack: CallableFunction;

    public constructor(callBack: CallableFunction)
    {
        this.textarea = document.getElementById("new-task-textarea") as HTMLTextAreaElement;
        this.saveButton = document.getElementById("save-new-task-button") as HTMLButtonElement;
        this.container = document.getElementById("new-task-block");

        this.textarea.addEventListener("focus", () => this.OnFocus());
        this.container.addEventListener("focusout", (e) => this.OnBlur(e));
        this.saveButton.addEventListener("click", () => this.OnSave());

        this.callBack = callBack;
    }

    private OnFocus()
    {
        this.textarea.classList.add("focused");
        this.saveButton.classList.add("visible");
    }

    private OnBlur(event)
    {
        const relatedTarget = event.relatedTarget
        if (relatedTarget && this.container.contains(relatedTarget))
        {
            return;
        }

        this.textarea.classList.remove("focused");
        this.saveButton.classList.remove("visible");
    }

    private OnSave()
    {
        if (this.textarea.value === "") { return; }

        const lines = this.textarea.value.split('\n');

        const note = new Note();
        note.title = lines[0];
        note.text = lines.slice(1).join('\n');

        NoteService.save(note);
        this.callBack();
    }
}