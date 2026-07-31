
// @ts-ignore
import "../../styles/trash-page/trash.css";

import { BurgerMenu } from "../modules/burger";
import { NoteService } from "../data/note-service";
import { NoteRenderer } from "../modules/note-renderer";
import { NoteContainer } from "../HTML-elements/note-container";
import { RemovedNoteViwer } from "./removed-note-viewer";
import { Searcher } from "../modules/searcher";


class TrashPage
{
    private menu: BurgerMenu;
    private viewer: RemovedNoteViwer;
    private searcher = new Searcher(this.refresh.bind(this));
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
        const query = this.searcher.query;
        const notes = NoteService.search(NoteService.getAllRemoved(), query);

        NoteRenderer.Render(notes, this.notesContainer, this.viewer);
    }
}

export const trashPage = new TrashPage();