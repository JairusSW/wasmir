import Long from "long";
import { DataType, Func, Add, Instr, NameTypePair, NumericDataType, LocalGet, Const, I32, I64, Sub, Mul, DivSigned, DivUnsigned, Equal, NotEqual, LessThanSigned, LessThanUnsigned, LessEqualSigned, LessEqualUnsigned, GreaterThanSigned, GreaterThanUnsigned, GreaterEqualSigned, GreaterEqualUnsigned } from "./types";

export const func = <T extends DataType>(
    signature: {
        name: string,
        params: NameTypePair[],
        locals: NameTypePair[],
        returnType: T,
    },
    body: Instr[] | null,
    exportName: string | null = null
): Func<T> => ({
    __instr: "func",
    dataType: signature.returnType,
    name: signature.name,
    params: signature.params,
    locals: signature.locals,
    returnType: signature.returnType,
    body,
    exportName
});

export const constant = <T extends NumericDataType>(
    dataType: T,
    value: Long | number
): Const<T> => ({
    __instr: "constant",
    dataType,
    value,
    returnType: dataType
});

export const add = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): Add<T> => ({
    __instr: "add",
    dataType,
    left,
    right,
    returnType: dataType
});

export const sub = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): Sub<T> => ({
    __instr: "sub",
    dataType,
    left,
    right,
    returnType: dataType
});

export const mul = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): Mul<T> => ({
    __instr: "mul",
    dataType,
    left,
    right,
    returnType: dataType
});

export const div_s = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): DivSigned<T> => ({
    __instr: "div)s",
    dataType,
    left,
    right,
    returnType: dataType
});

export const div_u = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): DivUnsigned<T> => ({
    __instr: "div_u",
    dataType,
    left,
    right,
    returnType: dataType
});

export const eq = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): Equal<T> => ({
    __instr: "eq",
    dataType,
    left,
    right,
    returnType: dataType
});

export const ne = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): NotEqual<T> => ({
    __instr: "ne",
    dataType,
    left,
    right,
    returnType: dataType
});

export const lt_s = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): LessThanSigned<T> => ({
    __instr: "lt_s",
    dataType,
    left,
    right,
    returnType: dataType
});

export const lt_u = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): LessThanUnsigned<T> => ({
    __instr: "lt_u",
    dataType,
    left,
    right,
    returnType: dataType
});

export const le_s = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): LessEqualSigned<T> => ({
    __instr: "le_s",
    dataType,
    left,
    right,
    returnType: dataType
});

export const le_u = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): LessEqualUnsigned<T> => ({
    __instr: "lt_u",
    dataType,
    left,
    right,
    returnType: dataType
});

export const gt_s = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): GreaterThanSigned<T> => ({
    __instr: "gt_s",
    dataType,
    left,
    right,
    returnType: dataType
});

export const gt_u = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): GreaterThanUnsigned<T> => ({
    __instr: "gt_u",
    dataType,
    left,
    right,
    returnType: dataType
});

export const ge_s = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): GreaterEqualSigned<T> => ({
    __instr: "ge_s",
    dataType,
    left,
    right,
    returnType: dataType
});

export const ge_u = <T extends NumericDataType>(
    dataType: T,
    left: Instr<NoInfer<T>>,
    right: Instr<NoInfer<T>>
): GreaterEqualUnsigned<T> => ({
    __instr: "ge_u",
    dataType,
    left,
    right,
    returnType: dataType
});

export const i32 = {
    
    const: (value: Long): Const<I32> => ({
        __instr: "constant",
        dataType: "i32",
        value,
        returnType: "i32"
    })
}

export const i64 = {
    const: (value: Long): Const<I64> => ({
        __instr: "constant",
        dataType: "i64",
        value,
        returnType: "i64"
    })
}

export const local = {
    get: <T extends NumericDataType>(dataType: T, name: string): LocalGet<T> => ({
        __instr: "local.get",
        dataType,
        name,
        returnType: dataType
    })
}