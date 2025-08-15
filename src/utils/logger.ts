import { NS } from "@ns"

const ROW = "%-20s | %.10s | %.10s | %.10s | %.10s"
const HEADER = ["HOSTNAME", "ROOT", "BACKDOOR", "REQUIRE", "OPEN"]
const SEPARATOR = (header: string[]) => header.map((s) => "-".repeat(s.length))

export async function printHost(ns: NS, host: string) {
  const server = ns.getServer(host)
  ns.printf(ROW, ...HEADER)
  ns.printf(ROW, ...SEPARATOR(HEADER))
  ns.printf(ROW, server.hostname, server.hasAdminRights, server.backdoorInstalled, server.numOpenPortsRequired, server.sshPortOpen)
}


const MONEY_ROW = "%-10s | %10.10s | %10.10s | %10.10s | %10.10s"
const MONEY_HEADER = ["HOSTNAME", "MONEY", "MAX_MONEY", "SECURITY", "MIN_SECURITY"]

export async function printMoney(ns: NS, host: string) {
  const server = ns.getServer(host)
  ns.printf(MONEY_ROW, ...MONEY_HEADER)
  ns.printf(MONEY_ROW, ...SEPARATOR(MONEY_HEADER))
  ns.printf(
    MONEY_ROW,
    server.hostname,
    server.moneyAvailable,
    server.moneyMax,
    server.hackDifficulty,
    server.minDifficulty
  )
}
