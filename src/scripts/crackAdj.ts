import { NS } from "@ns";

const row = "%-20s | %10s | %10s | %10s | %10s"

export async function main(ns: NS): Promise<void> {
  const hosts = ns.scan();
  ns.tprintf(row, "HOSTNAME", "ROOT", "BACKDOOR", "REQUIRE", "OPEN")
  ns.tprintf(row, "--------", "----", "--------", "-------", "----")
  for (const host of hosts) {
    let server = ns.getServer(host)
    if (ns.hasRootAccess(host)) {
      ns.tprintf(row, server.hostname, server.hasAdminRights, server.backdoorInstalled, server.numOpenPortsRequired, server.sshPortOpen)
      continue
    }
    ns.brutessh(host)
    ns.nuke(host)

    server = ns.getServer(host)
    ns.tprintf(row, server.hostname, server.hasAdminRights, server.backdoorInstalled, server.numOpenPortsRequired, server.sshPortOpen)
  }
}
