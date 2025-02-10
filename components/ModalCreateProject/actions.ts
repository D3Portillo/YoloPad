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
    owner: secretStoredValue(user),
  }

  await writeSecretVaultRecord({
    schemaId: schemas.svProjectWithOwner,
    data: [data],
  })
}

export const getAllProjects = async (user: Address) => {
  const projects = await readSecretVaultRecord({
    schemaId: schemas.svProjectWithOwner,
  })

  return projects.filter(
    (project: any) => project?.owner?.toLowerCase() === user.toLocaleLowerCase()
  )
}
