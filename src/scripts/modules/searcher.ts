
export class Searcher
{
    private searchField: HTMLInputElement;
    private searchButton: HTMLButtonElement;

    private onSearch: (query: string) => void;

    get query(): string
    {
        return this.searchField.value;
    }

    public constructor(onSearch: (query: string) => void)
    {
        this.searchField = document.getElementById("search-input") as HTMLInputElement;
        this.searchButton = document.getElementById("search-button") as HTMLButtonElement;

        this.onSearch = onSearch;

        this.searchButton.addEventListener("click", () => this.onSearch(this.query));
        this.searchButton.addEventListener("click", () => this.onFocus());

        this.searchField.addEventListener("input", () => this.onSearch(this.query));
        this.searchField.addEventListener("blur", () => this.onBlur());
    }

    private onFocus()
    {
        if (window.innerWidth < 1024)
        {
            this.searchField.classList.add("visible");

            if (this.searchField.classList.contains("visible"))
            {
                this.searchField.focus();
            }

            document.querySelector(".header-title-block").classList.add("hidden");
        }
    }

    private onBlur()
    {
        if (window.innerWidth < 1024)
        {
            this.searchField.classList.remove("visible");

            document.querySelector(".header-title-block").classList.remove("hidden");
        }
    }
}