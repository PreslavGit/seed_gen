export class PrimaryKeyGen{
    private counter = 0;
    get(){ return ++this.counter; }
    peek(){ return this.counter; }
}