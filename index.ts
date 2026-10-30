#! /usr/bin/env node
const str: string = "abc"

console.log("NODE_ENV:", process.env.NODE_ENV)

console.log("str:", str)

console.log("console.log \:\:debug\:\::",     `::debug::${str}`)
console.debug("console.debug \:\:debug\:\::", `::debug::${str}`)
