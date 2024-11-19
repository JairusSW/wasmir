import Long from "long";
export type None = "none";

// Primitive Types
export type I32 = "i32";
export type I64 = "i64";
export type F32 = "f32";
export type F64 = "f64";

export type IntegerDataType = I32 | I64;
export type FloatDataType = F32 | F64;
export type NumericDataType = IntegerDataType | FloatDataType;

export type DataType = NumericDataType | None;
export type NameTypePair = [type: NumericDataType, name: string];

export function getTypeName<T extends DataType = DataType>(): string {
    let v!: T;
    return v;
}

export type Block<T extends DataType = DataType> = {
    __instr: "block";
    name: string | null;
    body: Instr[];
    returnType: T;
}

export type Loop = {
    __instr: "loop";
    name: string | null;
    body: Instr<"none">[];
    returnType: None;
}

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

export type Select<T extends NumericDataType = NumericDataType> = {
    __instr: "select";
    dataType: T;
    ifTrue: Instr<T>;
    ifFalse: Instr<T>;
    condition: Instr<"i32">;
    returnType: T;
}

export type LocalGet<T extends NumericDataType = NumericDataType> = {
    __instr: "local.get";
    dataType: T;
    name: string;
    returnType: T;
}

export type LocalSet<T extends NumericDataType = NumericDataType> = {
    __instr: "local.set";
    dataType: T;
    name: string;
    value: Instr;
    returnType: "none";
}

export type LocalTee<T extends NumericDataType = NumericDataType> = {
    __instr: "local.tee";
    dataType: T;
    name: string;
    value: Instr;
    returnType: T;
}

export type GlobalGet<T extends NumericDataType = NumericDataType> = {
    __instr: "global.get";
    dataType: T;
    name: string;
    returnType: T;
}

export type GlobalSet<T extends NumericDataType = NumericDataType> = {
    __instr: "global.set";
    dataType: T;
    name: string;
    value: Instr;
    returnType: None;
}

export type GlobalTee<T extends NumericDataType = NumericDataType> = {
    __instr: "global.tee";
    dataType: T;
    name: string;
    value: Instr;
    returnType: T;
}

export type Load<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.load`;
    dataType: T;
    offset: number;
    align: number | null;
    base: Instr<IntegerDataType>;
    returnType: T;
}

export type Load8Signed<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.load8_s` }
>

export type Load8Unsigned<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.load8_u` }
>

export type Load16Signed<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.load16_s` }
>

export type Load16Unsigned<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.load16_u` }
>

export type Load32Signed<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.load32_s` }
>

export type Load32Unsigned<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.load32_u` }
>

export type Store<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.store`;
    dataType: T;
    offset: number;
    align: number | null;
    base: Instr<IntegerDataType>;
    value: Instr;
    returnType: None;
}

export type Store8Signed<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.store8_s` }
>

export type Store8Unsigned<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.store8_u` }
>

export type Store16Signed<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.store16_s` }
>

export type Store16Unsigned<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.store16_u` }
>

export type Store32Signed<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.store32_s` }
>

export type Store32Unsigned<T extends NumericDataType = NumericDataType> = Replace<
    Load<T>,
    { __instr: `${T}.store32_u` }
>

export type Const<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.const`;
    dataType: T;
    value: Long | number;
    returnType: T;
}

export type EqualZero<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.eqz`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Equal<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.eq`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type NotEqual<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.ne`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessThanSigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.lt_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessThanUnsigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.lt_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterThanSigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.gt_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterThanUnsigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.gt_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessEqualSigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.le_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type LessEqualUnsigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.le_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterEqualSigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.ge_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type GreaterEqualUnsigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.ge_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Clz<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.clz`;
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type Ctz<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.ctz`;
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type Popcnt<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.popcnt`;
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type Add<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.add`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Sub<T extends NumericDataType = NumericDataType> = {
    __instr: string;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Mul<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.mul`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type DivSigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.div_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type DivUnsigned<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.div_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type RemSigned<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.rem_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type RemUnsigned<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.rem_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type And<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.and`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Or<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.or`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Xor<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.xor`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Shl<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.shl`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type ShrSigned<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.shr_s`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type ShrUnsigned<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.shr_u`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Rotl<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.rotl`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Rotr<T extends IntegerDataType = IntegerDataType> = {
    __instr: `${T}.rotr`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Abs<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.abs`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Neg<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.neg`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Ceil<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.ceil`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Floor<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.floor`;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
}

export type Trunc<T extends NumericDataType = NumericDataType> = {
    __instr: `${T}.trunc`;
    dataType: T;
    value: Instr<T>;
    returnType: T;
}

export type TruncF32Signed<T extends IntegerDataType = IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: `${T}.trunc_f32_s`; value: Instr<"f32">; returnType: T }
>

export type TruncF32Unsigned<T extends IntegerDataType = IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: `${T}.trunc_f32_u`; value: Instr<"f32">; returnType: T }
>

export type TruncF64Signed<T extends IntegerDataType = IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: `${T}.trunc_f64_s`; value: Instr<"f64">; returnType: T }
>

export type TruncF64Unsigned<T extends IntegerDataType = IntegerDataType> = Replace<
    Trunc<T>,
    { __instr: `${T}.trunc_f64_u`; value: Instr<"f64">; returnType: T }
>

export type Extend32Signed = {
    __instr: `i64.extend_i32_s`;
    dataType: I64;
    value: Instr<"i32">;
    returnType: I64;
}

export type Extend32Unsigned = {
    __instr: `i64.extend_i32_u`;
    dataType: I64;
    value: Instr<"i32">;
    returnType: I64;
}

export type ConvertI32Signed<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.convert_i32_s`;
    dataType: T;
    value: Instr<"i32">;
    returnType: T;
}

export type ConvertI32Unsigned<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.convert_i32_u`;
    dataType: T;
    value: Instr<"i32">;
    returnType: T;
}

export type ConvertI64Signed<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.convert_i64_s`;
    dataType: T;
    value: Instr<"i64">;
    returnType: T;
}

export type ConvertI64Unsigned<T extends FloatDataType = FloatDataType> = {
    __instr: `${T}.convert_i64_u`;
    dataType: T;
    value: Instr<"i64">;
    returnType: T;
}

export type DemoteF64 = {
    __instr: "f32.demote_f64";
    dataType: F32;
    value: Instr<"f64">;
    returnType: F32;
}

export type PromoteF32 = {
    __instr: "f64.promote_f32";
    dataType: F64;
    value: Instr<"f32">;
    returnType: F64;
}

export type ReinterpretF32 = {
    __instr: "i32.reinterpret_f32";
    dataType: I32;
    value: Instr<"f32">;
    returnType: I32;
}

export type ReinterpretF64 = {
    __instr: "i64.reinterpret_f64";
    dataType: I64;
    value: Instr<"f64">;
    returnType: I64;
}

export type ReinterpretI32 = {
    __instr: "f32.reinterpret_i32";
    dataType: F32;
    value: Instr<"i32">;
    returnType: F32;
}

export type ReinterpretI64 = {
    __instr: "f64.reinterpret_i64";
    dataType: F64;
    value: Instr<"i64">;
    returnType: F64;
}

export type Func<T extends DataType = DataType> = {
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
    | Block
    | Loop
    | Call
    | CallIndirect
    | LocalGet
    | LocalSet
    | LocalTee
    | GlobalGet
    | GlobalSet
    | GlobalTee
    | Load
    | Load8Signed
    | Load8Unsigned
    | Load16Signed
    | Load16Unsigned
    | Load32Signed
    | Load32Unsigned
    | Store
    | Store8Signed
    | Store8Unsigned
    | Store16Signed
    | Store16Unsigned
    | Store32Signed
    | Store32Unsigned
    | Const
    | EqualZero
    | Equal
    | NotEqual
    | LessThanSigned
    | LessThanUnsigned
    | GreaterThanSigned
    | GreaterThanUnsigned
    | LessEqualSigned
    | LessEqualUnsigned
    | GreaterEqualSigned
    | GreaterEqualUnsigned
    | Clz
    | Ctz
    | Popcnt
    |Add
    |Sub
    |Mul
    |DivSigned
    |DivUnsigned
    |RemSigned
    |RemUnsigned
    |And
    |Or
    |Xor
    |Shl
    |ShrSigned
    |ShrUnsigned
    |Rotl
    |Rotr
    |Abs
    |Neg
    |Ceil
    |Trunc
    |TruncF32Signed
    |TruncF32Unsigned
    |TruncF64Signed
    |TruncF64Unsigned
    |Extend32Signed
    |Extend32Unsigned
    |ConvertI32Signed
    |ConvertI32Unsigned
    |ConvertI64Signed
    |ConvertI64Unsigned
    |DemoteF64
    |PromoteF32
    |ReinterpretF32
    |ReinterpretF64
    |ReinterpretI32
    |ReinterpretI64
    |Func;

type FilterInstrByDataType<I extends { returnType: any }, DT> = I extends any
    ? I["returnType"] & DT extends never
    ? never
    : I
    : never

export type Instr<DT extends DataType = DataType> = FilterInstrByDataType<
    InstrList,
    DT
>

export type Replace<
    T extends Record<any, any>,
    S extends Record<any, any>,
> = Omit<T, keyof S> & S