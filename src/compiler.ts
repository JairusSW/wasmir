import { local as _local, add as _add } from "./methods";
import { Module } from "./module";
import { Add, DataType, Instr, InstrList, LocalGet, NumericDataType } from "./nodes";

const space = (indent: number) => " ".repeat(indent);

const compileSExpression = (
    sExpr: {
        fn: string;
        inlineArgs?: (string | null)[];
        blockArgs?: (string | null)[];
    },
    indent: number,
) => {
    let ret = space(indent) + `(${sExpr.fn}`;
    const filteredInlineArgs = sExpr.inlineArgs?.filter((x) => x !== null);
    const filteredBlockArgs = sExpr.blockArgs?.filter((x) => x !== null);
    if (filteredInlineArgs?.length) {
        ret += ` `;
        ret += filteredInlineArgs.join(" ");
    }
    if (filteredBlockArgs?.length) {
        ret += `\n`;
        ret += filteredBlockArgs.join("\n");
        ret += `\n` + space(indent) + `)`;
    } else {
        ret += `)`;
    }
    return ret;
};

const makeBinaryCompiler =
    <T extends { dataType: DataType; left: Instr; right: Instr }>(op: string) =>
        (node: T, indent = 0) => {
            return compileSExpression(
                {
                    fn: `${node.dataType}.${op}`,
                    blockArgs: [
                        instr(node.left, indent + 1),
                        instr(node.right, indent + 1),
                    ],
                },
                indent,
            )
        };

const instr = (node: Instr, indent = 0): string => {
    const compiler = instrTypesCompilers[node.__nodeType];
    if (!compiler) {
        throw new Error(`Unexpected ${node.__nodeType} node`);
    }
    return compiler(node as any, indent);
};

const add = makeBinaryCompiler<Add<NumericDataType>>("add");

const localGet = (node: LocalGet<NumericDataType>, indent = 0) => {
    return compileSExpression(
        { fn: "local.get", inlineArgs: ["$" + node.name] },
        indent,
    );
};

export const compile = (mod: Module) => {
    return compileSExpression({
        fn: "module",
        blockArgs: [
            ...mod.funcs.map(func =>
                compileSExpression({
                    fn: "func",
                    inlineArgs: ["$" + func.name],
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

const instrTypesCompilers = {
    "add": add,
    "local.get": localGet
};
