
// @ts-ignore
import "../../styles/index/index.css";

import { BurgerMenu } from "../modules/burger";
import { NewTaskField } from "../index/new-task-filed";
import { EditWindow } from "../index/edit-window";

import { NoteContainer } from "../HTML-elements/note-container";
import { NoteService } from "../data/note-service";
import { NoteRenderer } from "../modules/note-renderer";
import { Searcher } from "../modules/searcher";

class HomePage
{
    private menu: BurgerMenu;
    private newTaskField: NewTaskField;
    private editWindow: EditWindow;
    private searcher: Searcher;

    private pinnedContainer: NoteContainer;
    private defaultContainer: NoteContainer;

    public constructor()
    {
        this.menu = new BurgerMenu();
        this.newTaskField = new NewTaskField(this.refresh.bind(this));
        this.editWindow = new EditWindow(this.refresh.bind(this));
        this.searcher = new Searcher(this.refresh.bind(this));

        this.pinnedContainer = new NoteContainer(document.getElementById("pinned-tasks-container"));
        this.defaultContainer = new NoteContainer(document.getElementById("tasks-container"));

        this.refresh();
    }

    private refresh()
    {
        const query = this.searcher.query;

        const pinned = NoteService.search(NoteService.getPinned(), query);
        const unpinned = NoteService.search(NoteService.getUnPinned(), query);

        NoteRenderer.Render(pinned, this.pinnedContainer, this.editWindow);
        NoteRenderer.Render(unpinned, this.defaultContainer, this.editWindow);
    }
}

export const homePage = new HomePage();