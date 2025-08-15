import { NS } from "@ns"

const SEPARATOR = (header: string[]) => header.map((s) => "-".repeat(s.length))
const MONEY_ROW = "%-10s | %5.5s | %5.5s | %5.5s | %5.5s"
const MONEY_HEADER = ["HOSTNAME", "MONEY", "MAX_MONEY", "SECURITY", "MIN_SECURITY"]

export async function printM(ns: NS, host: string) {
  ns.printf(MONEY_ROW, ...MONEY_HEADER)
  ns.printf(MONEY_ROW, ...SEPARATOR(MONEY_HEADER))
  ns.printf(
    MONEY_ROW,
    host,
    ns.getServerMoneyAvailable(host),
    ns.getServerMaxMoney(host),
    ns.getServerSecurityLevel(host),
    ns.getServerMinSecurityLevel(host)
  )
}
