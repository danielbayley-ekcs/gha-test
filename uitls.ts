export const console = {
  ...globalThis.console,
  debug(message: string, ...values: unknown[]): undefined {
    if (!debug) return

    globalThis.console.debug(`::debug::${message}`)
    values.forEach(console.dir)
  }
}
