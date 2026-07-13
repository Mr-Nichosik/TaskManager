
import { notes } from "../data/notes";

const template = document.getElementById("note-template");

export class NoteRenderer
{
    EditWindow;
    Container;
    PinnedContainer;

    constructor(editWindow)
    {
        this.EditWindow = editWindow;
        this.Container = document.querySelector(".tasks-block-content");
        this.PinnedContainer = document.querySelector(".pinned-tasks-block-content");

        this.Render();
    }

    Render()
    {
        this.Container.innerHTML = "";

        notes.forEach(note =>
        {
            const noteElement = template.content.firstElementChild.cloneNode(true);

            noteElement.dataset.id = note.id;

            noteElement.querySelector(".note-title").textContent = note.title;
            noteElement.querySelector(".note-text").textContent = note.text;

            noteElement.addEventListener("click", () =>
            {
                this.EditWindow.Open(note);
            });

            if (note.pinned) { this.PinnedContainer.append(noteElement); }
            else { this.Container.append(noteElement) }

        });
    }
}