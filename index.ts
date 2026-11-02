#! /usr/bin/env node
import { NODE_ENV, console } from "#utils"

const str: string = "abc"
const n: number = "1" // node runs, but this would fail typecheck

console.log("NODE_ENV:", NODE_ENV || "NODE_ENV failed")

console.debug("\:\:debug\:\:ing:") // shows only if ACTIONS_STEP_DEBUG
