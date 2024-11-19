import Long from "long";
export type None = "none";

export type I32 = "i32";
export type I64 = "i64";
export type F32 = "f32";
export type F64 = "f64";

export type IntegerDataType = I32 | I64;
export type FloatDataType = F32 | F64;
export type NumericDataType = IntegerDataType | FloatDataType;

export type DataType = NumericDataType | None;
export type NameTypePair = [type: NumericDataType, name: string];

export type Call<T extends DataType = DataType> = {
    __instr: "call";
    dataType: None;
    name: string;
    args: Instr[];
    returnType: T;
}

export type CallIndirect<T extends DataType = DataType> = {
    __instr: "call_indirect";
    dataType: None;
    args: Instr[];
    tableName: string;
    address: Instr;
    returnType: T;
}

export type Drop = {
    __instr: "drop";
    dataType: None;
    returnType: None;
}

export type Select<T extends NumericDataType> = {
    __instr: "select";
    dataType: T;
    ifTrue: Instr<T>;
    ifFalse: Instr<T>;
    condition: Instr<"i32">;
    returnType: T;
}

export type LocalGet<T extends NumericDataType> = {
    __instr: "local.get";
    dataType: T;
    name: string;
    returnType: T;
}

export type LocalSet<T extends NumericDataType> = {
    __instr: "local.set";
    dataType: T;
    name: string;
    value: Instr;
    returnType: "none";
}

export type LocalTee<T extends NumericDataType> = {
    __instr: "local.tee";
    dataType: T;
    name: string;
    value: Instr;
    returnType: T;
}

export type GlobalGet<T extends NumericDataType> = {
    __instr: "global.get";
    dataType: T;
    name: string;
    returnType: T;
}

export type GlobalSet<T extends NumericDataType> = {
    __instr: "global.set";
    dataType: T;
    name: string;
    value: Instr;
    returnType: "none";
}

export type GlobalTee<T extends NumericDataType> = {
    __instr: "global.tee";
    dataType: T;
    name: string;
    value: Instr;
    returnType: T;
}

export type Load<T extends NumericDataType> = {
    __instr: "load";
    dataType: T;
    offset: number;
    align: number | null;
    base: Instr<IntegerDataType>;
    returnType: T;
}

export type Load8Signed<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "load8_s" }
>

export type Load8Unsigned<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "load8_u" }
>

export type Load16Signed<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "load16_s" }
>

export type Load16Unsigned<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "load16_u" }
>

export type Load32Signed<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "load32_s" }
>

export type Load32Unsigned<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "load32_u" }
>

export type Store<T extends NumericDataType> = {
    __instr: "store";
    dataType: T;
    offset: number;
    align: number | null;
    base: Instr<IntegerDataType>;
    value: Instr;
    returnType: "none";
}

export type Store8Signed<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "store8_s" }
>

export type Store8Unsigned<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "store8_u" }
>

export type Store16Signed<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "store16_s" }
>

export type Store16Unsigned<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "store16_u" }
>

export type Store32Signed<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "store32_s" }
>

export type Store32Unsigned<T extends NumericDataType> = Replace<
    Load<T>,
    { __instr: "store32_u" }
>

export type Const<T extends NumericDataType> = {
    __instr: "constant";
    dataType: T;
    value: Long | number;
    returnType: T;
}

export type EqualZero<T extends NumericDataType> = {
    __instr: "eqz";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Equal<T extends NumericDataType> = {
    __instr: "eq";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type NotEqual<T extends NumericDataType> = {
    __instr: "ne";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessThanSigned<T extends NumericDataType> = {
    __instr: "lt_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessThanUnsigned<T extends NumericDataType> = {
    __instr: "lt_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterThanSigned<T extends NumericDataType> = {
    __instr: "gt_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterThanUnsigned<T extends NumericDataType> = {
    __instr: "gt_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessEqualSigned<T extends NumericDataType> = {
    __instr: "le_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessEqualUnsigned<T extends NumericDataType> = {
    __instr: "le_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterEqualSigned<T extends NumericDataType> = {
    __instr: "ge_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterEqualUnsigned<T extends NumericDataType> = {
    __instr: "ge_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Clz<T extends IntegerDataType> = {
    __instr: "clz";
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type Ctz<T extends IntegerDataType> = {
    __instr: "ctz";
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type Popcnt<T extends IntegerDataType> = {
    __instr: "popcnt";
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type Add<T extends NumericDataType> = {
    __instr: "add";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Sub<T extends NumericDataType> = {
    __instr: "sub";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Mul<T extends NumericDataType> = {
    __instr: "mul";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type DivSigned<T extends NumericDataType> = {
    __instr: "div_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type DivUnsigned<T extends NumericDataType> = {
    __instr: "div_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type RemSigned<T extends IntegerDataType> = {
    __instr: "rem_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type RemUnsigned<T extends IntegerDataType> = {
    __instr: "rem_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type And<T extends IntegerDataType> = {
    __instr: "and";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Or<T extends IntegerDataType> = {
    __instr: "or";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Xor<T extends IntegerDataType> = {
    __instr: "xor";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Shl<T extends IntegerDataType> = {
    __instr: "shl";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type ShrSigned<T extends IntegerDataType> = {
    __instr: "shr_s";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type ShrUnsigned<T extends IntegerDataType> = {
    __instr: "shr_u";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Rotl<T extends IntegerDataType> = {
    __instr: "rotl";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Rotr<T extends IntegerDataType> = {
    __instr: "rotr";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Abs<T extends FloatDataType> = {
    __instr: "abs";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Neg<T extends FloatDataType> = {
    __instr: "neg";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Ceil<T extends FloatDataType> = {
    __instr: "ceil";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Floor<T extends FloatDataType> = {
    __instr: "floor";
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Trunc<T extends NumericDataType> = {
    __instr: "trunc";
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type TruncF32Signed<T extends IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: "trunc_f32_s"; value: Instr<"f32">; returnType: T }
>

export type TruncF32Unsigned<T extends IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: "trunc_f32_u"; value: Instr<"f32">; returnType: T }
>

export type TruncF64Signed<T extends IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: "trunc_f64_s"; value: Instr<"f64">; returnType: T }
>

export type TruncF64Unsigned<T extends IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: "trunc_f64_u"; value: Instr<"f64">; returnType: T }
>

export type Extend32Signed<T extends I64> = {
    __instr: "extend_i32_s";
    dataType: T;
    value: Instr<"i32">;
    returnType: T;
}

export type Extend32Unsigned<T extends I64> = {
    __instr: "extend_i32_u";
    dataType: T;
    value: Instr<"i32">;
    returnType: T;
}

export type ConvertI32Signed<T extends FloatDataType> = {
    __instr: "convert_i32_s";
    dataType: T;
    value: Instr<"i32">;
    returnType: T;
}

export type ConvertI32Unsigned<T extends FloatDataType> = {
    __instr: "convert_i32_u";
    dataType: T;
    value: Instr<"i32">;
    returnType: T;
}

export type ConvertI64Signed<T extends FloatDataType> = {
    __instr: "convert_i64_s";
    dataType: T;
    value: Instr<"i64">;
    returnType: T;
}

export type ConvertI64Unsigned<T extends FloatDataType> = {
    __instr: "convert_i64_u";
    dataType: T;
    value: Instr<"i64">;
    returnType: T;
}

export type DemoteF64 = {
    __instr: "demote_f64";
    dataType: F32;
    value: Instr<"f64">;
    returnType: F32;
}

export type PromoteF32 = {
    __instr: "promote_f32";
    dataType: F64;
    value: Instr<"f32">;
    returnType: F64;
}

export type ReinterpretF32 = {
    __instr: "reinterpret_f32";
    dataType: I32;
    value: Instr<"f32">;
    returnType: I32;
}

export type ReinterpretF64 = {
    __instr: "reinterpret_f64";
    dataType: I64;
    value: Instr<"f64">;
    returnType: I64;
}

export type ReinterpretI32 = {
    __instr: "reinterpret_i32";
    dataType: F32;
    value: Instr<"i32">;
    returnType: F32;
}

export type ReinterpretI64 = {
    __instr: "reinterpret_i64";
    dataType: F64;
    value: Instr<"i64">;
    returnType: F64;
}

export type Func<T extends DataType> = {
    __instr: "func";
    dataType: T;
    name: string;
    params: NameTypePair[];
    locals: NameTypePair[];
    returnType: T;
    body: Instr[] | null;
    exportName: string | null
}

export type InstrList =
    | Func<DataType>
    | Add<NumericDataType>
    | LocalGet<NumericDataType>;

type FilterInstrByDataType<I extends { returnType: any }, DT> = I extends any
    ? I["returnType"] & DT extends never
    ? never
    : I
    : never;

export type Instr<DT extends DataType = DataType> = FilterInstrByDataType<
    InstrList,
    DT
>;

export type Replace<
    T extends Record<any, any>,
    S extends Record<any, any>,
> = Omit<T, keyof S> & S;