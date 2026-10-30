#! /usr/bin/env node
const str: string = "abc"
const n: number = "1"

console.log(n)

console.log("NODE_ENV:", process.env.NODE_ENV || "NODE_ENV failed")

const console = {
  ...globalThis.console,
  debug(message, ...values) {
    if (!debug) return ""

    globalThis.console.debug(GITHUB_ACTIONS ? `::debug::${message}` : message)
    values.forEach(console.dir)
  }
}

console.debug(`debugging: ${str}`)

console.log(`::debug::RUNNER_DEBUG or ACTIONS_RUNNER_DEBUG is true`)

