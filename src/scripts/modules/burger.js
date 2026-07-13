
export class BurgerMenu
{
    BurgerButton;
    Menu;
    CloseButton;

    constructor()
    {
        this.BurgerButton = document.getElementById("burger-button")
        this.Menu = document.getElementById("burger-menu-block")
        this.CloseButton = document.getElementById("close-burger-button")

        this.HandleOpening();
        this.HandleClosing();
    }

    HandleOpening()
    {
        this.BurgerButton.addEventListener("click", () => this.Open())
    }

    HandleClosing()
    {
        this.CloseButton.addEventListener("click", () => this.Close())
    }

    Open()
    {
        this.Menu.classList.add("active");
    }

    Close()
    {
        this.Menu.classList.remove("active")
    }
}