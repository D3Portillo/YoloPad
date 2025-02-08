"use server"

import schemas from "@/lib/nillion/schemas"
import {
  readSecretVaultRecord,
  secretStoredValue,
  writeSecretVaultRecord,
} from "@/lib/nillion"
import type { Address } from "viem"

export const createProject = async (user: Address, name: string) => {
  const data = {
    name,
  }

  await writeSecretVaultRecord({
    schemaId: schemas.svUserProject,
    data: [data],
  })
}

export const getAllProjects = async (user: Address) => {
  const projects = await readSecretVaultRecord({
    schemaId: schemas.svUserProject,
  })

  return projects
}
