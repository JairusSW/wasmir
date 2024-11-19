import { Instr, IntegerDataType } from "./core";

// SIMD Types
export type V128 = "v128";

export type I8x16 = "i8x16";
export type I16x8 = "i16x8";
export type I32x4 = "i32x4";
export type I64x2 = "i64x2";

export type F32x4 = "f32x4";
export type F64x2 = "f64x2";

export type V128Load = {
    __instr: "v128.load";
    dataType: V128;
    offset: number;
    align: number | null;
    base: Instr<IntegerDataType>;
    returnType: V128;
}