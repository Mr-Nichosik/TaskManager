
import { NoteService } from "../data/note-service";

export class Searcher
{
    private searchField: HTMLInputElement;
    private searchButton: HTMLButtonElement;

    // private callback: CallableFunction;
    
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
        this.searchField.addEventListener("input", () => this.onSearch(this.query));
    }

    // private search()
    // {
    //     const pinnedData = NoteService.search(NoteService.getPinned(), this.searchField.value);
    //     const unpinnedData = NoteService.search(NoteService.getUnPinned(), this.searchField.value);

    //     this.callback(pinnedData, unpinnedData);
    // }

    // private search() 
    // {
    //     this.callback(this.searchField.value);
    // }
}