
import { SaveNotes } from "../data/storage";

export class EditWindow
{
    Window;
    Overlay;
    SaveButton;
    TitleInput;
    Textarea;
    CurrentNote;
    OnSave;

    constructor(onSave)
    {
        this.Window = document.getElementById("note-edit-window");
        this.Overlay = document.getElementById("overlay");
        this.SaveButton = document.getElementById("save-button");

        this.OnSave = onSave;

        this.TitleInput = document.getElementById("note-edit-title-input");
        this.Textarea = document.getElementById("note-edit-textarea");

        this.CurrentNote = null;

        this.SaveButton.addEventListener("click", () => this.Close());
        this.Overlay.addEventListener("click", () => this.Close());
    }

    Open(note)
    {
        this.CurrentNote = note;

        this.TitleInput.value = note.title;
        this.Textarea.value = note.text;

        this.Window.classList.add("visible");
        this.Overlay.classList.add("visible")
    }

    Close()
    {
        this.Window.classList.remove("visible");
        this.Overlay.classList.remove("visible");

        this.Save();
    }

    Save()
    {
        this.CurrentNote.title = this.TitleInput.value;
        this.CurrentNote.text = this.Textarea.value;

        this.OnSave();
        SaveNotes(this.CurrentNote);
    }
}