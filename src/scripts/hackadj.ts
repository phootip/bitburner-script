import { NS } from "@ns";
import * as hackers from "/scripts/hacker"

// async function a(ns: NS) {
//   await hackers.farm(ns, "n00dles")
// }

const SCRIPT = "scripts/hackThis.js"
const SCRIPTS_DIR = "scripts"

export async function main(ns: NS): Promise<void> {
  const hosts = ns.scan()
  const files = ns.ls("home", "scripts")
  const sram = ns.getScriptRam(SCRIPT)
  ns.tprint(sram)
  return
  hosts.forEach((host) => {
    if (!ns.hasRootAccess(host)) {
      ns.tprint("noRoot: " + host)
      return
    }

    ns.tprint("hacking: " + host)
    files.forEach((file) => ns.scp(file, host, "home"))
    const maxThread = Math.trunc(ns.getServerMaxRam(host) / ns.getScriptRam(SCRIPT))
    ns.exec(SCRIPT, host, maxThread)
  })
}

