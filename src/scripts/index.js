
import "../styles/index.css";

import { BurgerMenu } from "./modules/burger";
import { EditWindow } from "./modules/edit-window";
import { NoteRenderer } from "./modules/note-renderer";

let renderer;

const menu = new BurgerMenu()
const editWindow = new EditWindow(() => renderer.Render())
renderer = new NoteRenderer(editWindow)