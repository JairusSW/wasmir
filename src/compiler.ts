import { Module } from "./module";
import { 
    Add,
    Sub,
    DataType,
    Instr,
    LocalGet,
    NumericDataType
} from "./types";

const add = makeBinaryCompiler<Add<NumericDataType>>("add");
const sub = makeBinaryCompiler<Sub<NumericDataType>>("sub");

const localGet = (node: LocalGet<NumericDataType>, indent = 0) => {
    return compileSExpression(
        { fn: "local.get", inlineArgs: ["$" + node.name] },
        indent,
    );
}

const instrTypesCompilers = {
    add,
    sub,
    "local.get": localGet
}

const space = (indent: number) => " ".repeat(indent);

function compileSExpression(
    sExpr: {
        fn: string;
        inlineArgs?: (string | null)[];
        blockArgs?: (string | null)[];
    },
    indent: number,
): string {
    let ret = space(indent) + "(" + sExpr.fn;
    const filteredInlineArgs = sExpr.inlineArgs?.filter((x) => x !== null);
    const filteredBlockArgs = sExpr.blockArgs?.filter((x) => x !== null);
    if (filteredInlineArgs?.length) {
        ret += " ";
        ret += filteredInlineArgs.join(" ");
    }
    if (filteredBlockArgs?.length) {
        ret += "\n";
        ret += filteredBlockArgs.join("\n");
        ret += "\n" + space(indent) + ")";
    } else {
        ret += ")";
    }
    return ret;
}

function instr(node: Instr, indent = 0): string {
    const compiler = instrTypesCompilers[node.__instr];
    if (!compiler) {
        throw new Error(`Unexpected ${node.__instr} node`);
    }
    return compiler(node as any, indent);
}

function makeBinaryCompiler<T extends { dataType: DataType; left: Instr; right: Instr }>(op: string) {
    return (node: T, indent = 0) => {
        return compileSExpression(
            {
                fn: node.dataType + "." + op,
                blockArgs: [
                    instr(node.left, indent + 1),
                    instr(node.right, indent + 1),
                ],
            },
            indent,
        )
    }
}

export function compile(mod: Module): string {
    return compileSExpression({
        fn: "module",
        blockArgs: [
            ...mod.funcs.map(func =>
                compileSExpression({
                    fn: "func",
                    inlineArgs: ["$" + func.name, func.exportName ? "(export \"" + func.name + "\")" : null],
                    blockArgs: [
                        ...func.params.map(
                            ([dt, name]) => space(2) + `(param $${name} ${dt})`,
                        ),
                        func.dataType !== 'none'
                            ? space(2) + `(result ${func.dataType})`
                            : null,
                        ...func.locals.map(
                            ([dt, name]) => space(2) + `(local $${name} ${dt})`,
                        ),
                        ...func.body
                            ? func.body?.map(inst => instr(inst, 2))
                            : []
                    ]
                }, 1)
            )
        ]
    }, 0)
}