import { add, func, local } from "./methods";
import { Module } from "./module";

const mod = new Module();

const fn = func({
    name: "add",
    params: [
        ["i32", "a"], ["i32", "b"]
    ],
    returnType: "i32",
    locals: [],
},
    [
        add("i32", local.get("i32", "a"), local.get("i32", "b"))
    ]
);

mod.addFunc(fn);

console.log(mod.compile())