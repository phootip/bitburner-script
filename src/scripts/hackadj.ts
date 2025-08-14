import { NS } from "@ns";

const row = "%-20s | %10s | %10s"

export async function main(ns: NS): Promise<void> {
  const hosts = ns.scan();
  // hosts.forEach((host) => ns.tprint(host))
  ns.tprintf(row, "HOSTNAME", "IP", "BACKDOOR")
  ns.tprintf(row, "--------", "--", "--------")
  for (const host of hosts) {
    const server = ns.getServer(host)
    ns.tprintf(row, server.hostname, server.ip, server.backdoorInstalled)
  }
}
