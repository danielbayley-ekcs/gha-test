#! /usr/bin/env node
const str: string = "abc"

console.log("NODE_ENV:", process.env.NODE_ENV)

console.log("str:", str)

console.log(`::debug::${str}`)
//console.debug(::debug::${str}`)

if ("RUNNER_DEBUG" in process.env || "ACTIONS_RUNNER_DEBUG" in process.env)
  console.log(`::debug::RUNNER_DEBUG or ACTIONS_RUNNER_DEBUG is true`)
