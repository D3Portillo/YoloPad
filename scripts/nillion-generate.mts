import "dotenv/config"

import fs from "fs/promises"
import { SecretVaultWrapper } from "nillion-sv-wrappers"

import generatedSchemas from "../generated/generated.json"
// @ts-ignore
import schemas from "../lib/nillion/schemas/registry"
import configDefaults from "../lib/nillion/config"

const config = (configDefaults as any).default as typeof configDefaults
console.log("Setting up Nillion...")

async function main() {
  try {
    const org = new SecretVaultWrapper(config.nodes, config.orgCredentials)
    await org.init()

    console.log(`ORG: ${config.orgCredentials.orgDid}`)
    const generatedSchemaNames = Object.keys(generatedSchemas)

    for (const [name, schema] of Object.entries(schemas)) {
      const isExistent = generatedSchemaNames.includes(name)

      if (!isExistent) {
        console.log(`Creating schema for ${name}...`)
        const formattedWithTitle = {
          // Use the schema name from the exported object as the title
          title: name,
          ...(schema as any),
        }

        const newSchema = await org.createSchema(
          formattedWithTitle,
          name + "1" // @see https://github.com/oceans404/nillion-sv-example/blob/main/postSchema.js#L15
        )

        const newSchemaId = newSchema[0].result.data
        console.log(`📚 Schema ID Added: ${newSchemaId}`)
        // Store in the update registry of schemas
        await fs.writeFile(
          `./generated/generated.json`,
          JSON.stringify({ ...generatedSchemas, [name]: newSchemaId }, null, 2)
        )

        // Save the schema to the generated folder
        await fs.writeFile(
          `./generated/${name}.nillion.schema.json`,
          JSON.stringify(formattedWithTitle, null, 2)
        )
      }
    }
  } catch (error) {
    console.error("❌ Failed to use SecretVaultWrapper")
    return process.exit(1)
  }
  console.log("\nNillion setup complete.\n========================")
  console.log(`Total schemas: ${Object.keys(generatedSchemas).length}`)
  console.log(
    "Check ./lib/nillion/schemas/generated.json for updated registry."
  )
}

main()
