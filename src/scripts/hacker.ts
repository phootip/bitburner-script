import { NS } from "@ns"
import * as log from "utils/log"

export async function farm(ns: NS, host: string): Promise<void> {
  const moneyThresh = ns.getServerMaxMoney(host) * 0.75
  const securityThresh = ns.getServerMinSecurityLevel(host) + 5
  while (true) {
    log.printM(ns, host)
    if (ns.getServerSecurityLevel(host) > securityThresh) {
      ns.printf("weaken")
      await ns.weaken(host)
    } else if (ns.getServerMoneyAvailable(host) < moneyThresh) {
      ns.printf("grow")
      await ns.grow(host)
    } else {
      ns.printf("hack")
      await ns.hack(host)
    }
  }
}

// export async function main(ns: NS) {
//   const host, moneyThresh = ns.args
// }
