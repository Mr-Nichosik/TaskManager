
import "../styles/index.css";

import { BurgerMenu } from "./modules/burger";
import { EditWindow } from "./modules/edit-window";
import { NoteRenderer } from "./modules/note-renderer";
import { NewTaskField } from "./modules/new-task-filed";
import { NoteService } from "./data/note-service";

class App
{ 
    menu;
    editWindow;
    renderer;
    newTaskField;

    constructor()
    {
        this.menu = new BurgerMenu();
        this.editWindow = new EditWindow();
        this.renderer = new NoteRenderer(this.editWindow);
        this.newTaskField = new NewTaskField();

        this.refresh();

        console.log("started");
    }

    refresh()
    {
        this.renderer.Render(NoteService.getAll());
    }
}

export const application = new App();