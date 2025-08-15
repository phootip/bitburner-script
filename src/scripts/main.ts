import { NS } from "@ns";
import * as hackers from "/scripts/hacker"

const row = "%-20s | %10s | %10s | %10s | %10s"

async function a(ns: NS) {
  await hackers.farm(ns, "n00dles")
}

async function b(ns: NS) {

  // ns.run("./hackthis")
  await hackers.farm(ns, "n00dles")
}

export async function main(ns: NS): Promise<void> {
  ns.disableLog("ALL")
  await a(ns)
}
