
import "../styles/trash-page/trash.css";


import { BurgerMenu } from "./modules/burger";
import { EditWindow } from "./modules/edit-window";
import { NoteService } from "./data/note-service";

// надо делать отдельный отрисовщик renderer для разных модальных окон, блять. т.е. для разных страницы
// но это всё хуйня ебаная, надо что-то адекватное придумать. как и сделать что-то с функцией refresh

class TrashPage
{
    menu;
    renderer;

    constructor()
    {
        this.menu = new BurgerMenu();
        this.editWindow = new EditWindow();

        this.refresh();
    }

    refresh()
    {
        this.renderer.Render(NoteService.getAllRemoved());
    }
}

export const trashPage = new TrashPage();