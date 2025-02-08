import "dotenv/config"

import { SecretVaultWrapper } from "nillion-sv-wrappers"
import configDefaults from "../lib/nillion/config"

const config = (configDefaults as any).default as typeof configDefaults
console.log("Setting up Nillion...")

async function main() {
  try {
    const org = new SecretVaultWrapper(config.nodes, config.orgCredentials)
    await org.init()

    // generate api tokens for all nodes in the org config
    const apiTokens = await org.generateTokensForAllNodes()
    console.log("🪙 API Tokens:", apiTokens)
  } catch (error) {
    console.error("❌ Failed to use SecretVaultWrapper:", error.message)
    process.exit(1)
  }
}

main()
