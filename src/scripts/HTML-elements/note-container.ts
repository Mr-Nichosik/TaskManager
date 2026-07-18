
export class NoteContainer
{
    private container: HTMLElement;

    constructor(container: HTMLElement)
    {
        this.container = container;
    }

    public setInnerHTML(content: string): void
    {
        this.container.innerHTML = content;
    }

    public append(content: HTMLElement): void
    {
        this.container.append(content);
    }

    public getContainer(): HTMLElement
    {
        return this.container;
    }
}