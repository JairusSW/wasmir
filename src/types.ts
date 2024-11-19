export type None = "none";

export type I32 = "i32";
export type I64 = "i64";
export type F32 = "f32";
export type F64 = "f64";

export type IntegerDataType = I32 | I64;
export type FloatDataType = F32 | F64;
export type NumericDataType = IntegerDataType | FloatDataType;

export type DataType = IntegerDataType | None;

