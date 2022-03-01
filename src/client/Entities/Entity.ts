export abstract class Entity
{
    abstract name: string;
    abstract THREE: any;

    abstract init(): void;

    render(time: number): void {
        //
    }
}
