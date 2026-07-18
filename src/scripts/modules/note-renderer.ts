
import { Note } from "../data/note";
import { NoteContainer } from "../HTML-elements/note-container";
import { INoteViewer } from "../HTML-elements/note-viewer";

export class NoteRenderer
{
    private static readonly template: HTMLTemplateElement = document.getElementById("note-template") as HTMLTemplateElement;

    public static Render(notes: Note[] = [], container: NoteContainer, window: INoteViewer)
    {
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
        });
    }
}