
// @ts-ignore
import "../../styles/trash-page/trash.css";

import { BurgerMenu } from "../modules/burger";
import { NoteService } from "../data/note-service";
import { NoteRenderer } from "../modules/note-renderer";
import { NoteContainer } from "../HTML-elements/note-container";
import { RemovedNoteViwer } from "./removed-note-viewer";


class TrashPage
{
    private menu: BurgerMenu;
    private viewer: RemovedNoteViwer;

    private notesContainer: NoteContainer;

    public constructor()
    {
        this.menu = new BurgerMenu();
        this.viewer = new RemovedNoteViwer(this.refresh.bind(this));
        this.notesContainer = new NoteContainer(document.getElementById("removed-notes-container"));

        this.refresh();
    }

    public refresh()
    {
        NoteRenderer.Render(NoteService.getAllRemoved(), this.notesContainer, this.viewer);
    }
}

export const trashPage = new TrashPage();