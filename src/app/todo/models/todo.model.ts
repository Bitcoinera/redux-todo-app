export class Todo {

    public id: number;
    public text: string;
    public done: boolean;

    constructor( text ) {
        this.id = Math.floor(Math.random() * (100 - 1)) + 1;

        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.done = false;        
    }
}