import { DataType, Func, Add, Instr, NameTypePair, NumericDataType, LocalGet } from "./nodes";

export const func = <T extends DataType>(
    signature: {
        name: string,
        params: NameTypePair[],
        locals: NameTypePair[],
        returnType: T,
    },
    body: Instr[] | null,
    exportName: string | null
): Func<T> => ({
    __nodeType: "func",
    dataType: signature.returnType,
    name: signature.name,
    params: signature.params,
    locals: signature.locals,
    returnType: signature.returnType,
    body,
    exportName
});

export const add = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): Add<T> => ({
    __nodeType: "add",
    dataType,
    left,
    right,
    returnType: dataType
});

export const local = {
    get: <T extends NumericDataType>(dataType: T, name: string): LocalGet<T> => ({
        __nodeType: "local.get",
        dataType,
        name,
        returnType: dataType
    })
}