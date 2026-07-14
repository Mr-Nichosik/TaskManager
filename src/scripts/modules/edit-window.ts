
export class EditWindow
{
    private Window: HTMLElement;
    private Overlay: HTMLElement;
    private SaveButton: HTMLElement;
    private TitleInput: HTMLInputElement;
    private Textarea: HTMLTextAreaElement;
    // private CurrentNote;
    // private OnSave;

    constructor()
    {
        this.Window = document.getElementById("note-edit-window")!;
        this.Overlay = document.getElementById("overlay")!;
        this.SaveButton = document.getElementById("save-button")!;

        this.TitleInput = document.getElementById("note-edit-title-input") as HTMLInputElement;
        this.Textarea = document.getElementById("note-edit-textarea") as HTMLTextAreaElement;

        // this.CurrentNote = null;

        // this.OnSave = onSave;

        this.SaveButton.addEventListener("click", () => this.Close());
    }

    Open()
    {
        // this.CurrentNote = note;

        // this.TitleInput.value = note.title;
        // this.Textarea.value = note.text;

        this.Window.classList.add("visible");
        this.Overlay.classList.add("visible")
    }

    Close()
    {
        this.Window.classList.remove("visible");
        this.Overlay.classList.remove("visible");

        // this.Save();
    }

    Save()
    {
        // this.CurrentNote.title = this.TitleInput.value;
        // this.CurrentNote.text = this.Textarea.value;

        // this.OnSave();
        // SaveNotes(this.CurrentNote);
    }
}