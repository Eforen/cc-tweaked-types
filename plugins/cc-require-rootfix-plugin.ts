import ts from "typescript";
import * as tstl from "typescript-to-lua";
import { CallExpression, EmitHost, ExpressionStatement, File, LuaPrinter } from "typescript-to-lua";

// class LuaBundleFixedPrinter extends LuaPrinter {
//   constructor(emitHost: EmitHost, program: ts.Program, fileName: string){
//     super(emitHost, program, fileName)
//     console.log('Config')
//     console.log(program.getCompilerOptions())
//   }
//   // printExpressionStatement(statement: ExpressionStatement){
//   //   // console.log('Thing')
//   //   console.log(statement)
//   //   return super.printExpressionStatement(statement)
//   // }
//   print(file: File){
//     let output = super.printFile(file)
//   }
// }

const plugin: tstl.Plugin = {
  printer: (program: ts.Program, emitHost: EmitHost, fileName: string, file: File) =>{
    //return new LuaBundleFixedPrinter(emitHost, program, fileName).print(file);
    const printer = new LuaPrinter(emitHost, program, fileName).print(file)
    // if(program.getCompilerOptions().rootFix) printer.code = printer.code.replace('require("lualib_bundle");\n', `require("${program.getCompilerOptions().rootFix}");\n`)
    //TODO: Make this use a custom compiler option or something instead
    printer.code = printer.code.replace('require("lualib_bundle");\n', `require("/lualib_bundle");\n`)
    //console.log(printer.code.replace('require("lualib_bundle");\n', `require("${program.getCompilerOptions().rootFix}");\n`))
    return printer
  }
};

export default plugin;