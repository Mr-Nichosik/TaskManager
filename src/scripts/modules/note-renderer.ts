
import { NoteService } from "../data/note-service"
import { EditWindow } from "./edit-window";
import { Note } from "../data/note";

export class NoteRenderer
{
    private readonly template: HTMLTemplateElement = document.getElementById("note-template") as HTMLTemplateElement;

    private editWindow: EditWindow;
    private defaultContainer: HTMLElement;
    private pinnedContainer: HTMLElement;

    constructor(editWindow: EditWindow)
    {
        this.editWindow = editWindow;
        this.defaultContainer = document.querySelector(".tasks-block-content")!;
        this.pinnedContainer = document.querySelector(".pinned-tasks-block-content")!;

        this.Render();
    }

    Render(notes: Note[] = [])
    {
        this.defaultContainer.innerHTML = "";
        this.pinnedContainer.innerHTML = "";

        notes.forEach(note =>
        {
            const noteElement = this.template.content.firstElementChild.cloneNode(true) as HTMLElement;
            noteElement.dataset.id = note.id.toString();

            noteElement.querySelector(".note-title").textContent = note.title;
            noteElement.querySelector(".note-text").textContent = note.text;

            noteElement.addEventListener("click", () =>
            {
                this.editWindow.Open(note);
            });

            if (note.pinned) { this.pinnedContainer.append(noteElement); }
            else { this.defaultContainer.append(noteElement); }

        });
    }
}