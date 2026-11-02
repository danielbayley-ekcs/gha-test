export const { NODE_ENV, CI, GITHUB_ACTIONS, ACTIONS_STEP_DEBUG } = process.env
export const ci = CI || GITHUB_ACTIONS
export const production = NODE_ENV === "production"
export const debug = !production || ACTIONS_STEP_DEBUG != null

export const console = {
  ...globalThis.console,
  debug(message: string, ...values: unknown[]): undefined {
    if (!debug) return

    globalThis.console.debug(`::debug::${message}`)
    values.forEach(console.dir)
  }
}
