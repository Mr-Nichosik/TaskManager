
import { Note } from "../data/note";
import { NoteContainer } from "../HTML-elements/note-container";
import { INoteViewer } from "../HTML-elements/note-viewer";

export class NoteRenderer
{
    private static readonly template: HTMLTemplateElement = document.getElementById("note-template") as HTMLTemplateElement;

    // private editWindow: EditWindow;
    // private pinnedContainer: HTMLElement;
    // private defaultContainer: HTMLElement;

    // editWindow: EditWindow
    // note: NoteViewer, container
    // constructor()
    // {
        // this.editWindow = editWindow;
        // this.pinnedContainer = document.getElementById("pinned-tasks-container")!;
        // this.defaultContainer = document.getElementById("tasks-container")!;

        // this.Render();
    // }

    public static Render(notes: Note[] = [], container: NoteContainer, window: INoteViewer)
    {
        // this.defaultContainer.innerHTML = "";
        // this.pinnedContainer.innerHTML = "";

        container.setInnerHTML("");

        notes.forEach(note =>
        {
            const noteElement = NoteRenderer.template.content.firstElementChild.cloneNode(true) as HTMLElement;
            noteElement.dataset.id = note.id.toString();

            noteElement.querySelector(".note-title").textContent = note.title;
            noteElement.querySelector(".note-text").textContent = note.text;

            noteElement.addEventListener("click", () =>
            {
                window.Open(note);
            });

            container.append(noteElement);

            // if (note.pinned) { this.pinnedContainer.append(noteElement); }
            // else { this.defaultContainer.append(noteElement); }

        });
    }
}