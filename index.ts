#! /usr/bin/env node
const { NODE_ENV, CI, GITHUB_ACTIONS, ACTIONS_STEP_DEBUG } = process.env
const ci = CI || GITHUB_ACTIONS
const production = NODE_ENV === "production"
const debug = !production || ACTIONS_STEP_DEBUG != null

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

console.log("NODE_ENV:", process.env.NODE_ENV || "NODE_ENV failed")

console.debug("\:\:debug\:\:ing:") // shows only if ACTIONS_STEP_DEBUG
