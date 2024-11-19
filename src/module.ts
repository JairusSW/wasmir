import { compile } from "./compiler";
import { DataType, Func } from "./nodes";

export class Module {
    public funcs: Func<DataType>[] = [];
    public start: Func<DataType> | null = null;
    addFunc(func: Func<DataType>): void {
        this.funcs.push(func);
    }
    compile(): string {
        return compile(this);
    }
}