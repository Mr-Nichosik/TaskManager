
// @ts-ignore
import "../styles/index/index.css";

import { BurgerMenu } from "./modules/burger";
import { NewTaskField } from "./modules/new-task-filed";
import { EditWindow } from "./modules/edit-window";

import { NoteContainer } from "./HTML-elements/note-container";
import { NoteService } from "./data/note-service";
import { NoteRenderer } from "./modules/note-renderer";

class HomePage
{
    private menu: BurgerMenu;
    private newTaskField: NewTaskField;
    private editWindow: EditWindow;

    private pinnedContainer: NoteContainer;
    private defaultContainer: NoteContainer;

    public constructor()
    {
        this.menu = new BurgerMenu();
        this.newTaskField = new NewTaskField(this.refresh.bind(this));
        this.editWindow = new EditWindow(this.refresh.bind(this));

        this.pinnedContainer = new NoteContainer(document.getElementById("pinned-tasks-container"));
        this.defaultContainer = new NoteContainer(document.getElementById("tasks-container"));

        this.refresh();
    }

    public refresh()
    {
        NoteRenderer.Render(NoteService.getPinned(), this.pinnedContainer, this.editWindow);
        NoteRenderer.Render(NoteService.getUnPinned(), this.defaultContainer, this.editWindow);
    }
}

export const homePage = new HomePage();