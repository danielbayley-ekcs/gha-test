#! /usr/bin/env node
const { NODE_ENV, CI, GITHUB_ACTIONS, ACTIONS_STEP_DEBUG } = process.env
export const ci = CI || GITHUB_ACTIONS //"ACTIONS_STEP_DEBUG" in process.env
export const production = NODE_ENV === "production"
export const debug = !production || ACTIONS_STEP_DEBUG != null

const str: string = "abc"
const n: number = "1" // node runs, but this would fail typecheck

const console = {
  ...globalThis.console,
  debug(message, ...values) {
    if (!debug) return ""

    globalThis.console.debug(`::debug::${message}`)
    values.forEach(console.dir)
  }
}

console.log(n)

console.log("NODE_ENV:", process.env.NODE_ENV || "NODE_ENV failed")

console.debug(`debugging: ${str}`)

console.log(`::debug::RUNNER_DEBUG or ACTIONS_RUNNER_DEBUG is true`)

