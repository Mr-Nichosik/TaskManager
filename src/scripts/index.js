
import "../styles/index.css";

import { BurgerMenu } from "./modules/burger";
import { EditWindow } from "./modules/edit-window";
import { NoteRenderer } from "./modules/note-renderer";
import { NewTaskField } from "./modules/new-task-filed";

const menu = new BurgerMenu();
const editWindow = new EditWindow();
export const renderer = new NoteRenderer(editWindow);

const newTaskField = new NewTaskField();

console.log("started");