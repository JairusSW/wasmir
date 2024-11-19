export type None = "none";

export type i32 = "i32";
export type i64 = "i64";
export type f32 = "f32";
export type f64 = "f64";

export type IntegerDataType = i32 | i64;
export type FloatDataType = f32 | f64;
export type NumericDataType = IntegerDataType | FloatDataType;

export type DataType = NumericDataType | None;
export type NameTypePair = [type: NumericDataType, name: string];

export type Func<T extends DataType> = {
    __nodeType: string;
    dataType: T;
    name: string;
    params: NameTypePair[];
    locals: NameTypePair[];
    returnType: T;
    body: Instr[] | null;
    exportName: string | null
}

export type Add<T extends NumericDataType> = {
    __nodeType: string;
    dataType: T;
    left: Instr<T>;
    right: Instr<T>;
    returnType: T;
};

export type LocalGet<T extends NumericDataType> = {
    __nodeType: string;
    dataType: T;
    name: string;
    returnType: T;
};

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