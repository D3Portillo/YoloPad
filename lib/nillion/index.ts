import { SecretVaultWrapper } from "nillion-sv-wrappers"
import config from "./config"

/**
 * Helper function to make it more synthetic-sugar for storing secret data.
 * Basically wraps content into { $allot: data }
 */
export const secretStoredValue = <V>(data: V) => ({
  $allot: data,
})

export const initializeSecretVault = async (schemaId: string) => {
  try {
    const collection = new SecretVaultWrapper(
      config.nodes,
      config.orgCredentials,
      schemaId
    )
    await collection.init()
    return collection
  } catch (_) {}

  return null
}

export const readSecretVaultRecord = async ({
  schemaId,
  recordId,
}: {
  recordId?: string
  schemaId: string
}) => {
  const collection = await initializeSecretVault(schemaId)
  if (!collection) throw new Error("Error:initializeSecretVault")

  const result = await collection.readFromNodes(
    // If recordId is provided, filter by it
    recordId ? { _id: recordId } : {}
  )

  return result
}

export const writeSecretVaultRecord = async <T>({
  schemaId,
  data,
}: {
  schemaId: string
  data: Array<T>
}) => {
  const collection = await initializeSecretVault(schemaId)
  if (!collection) throw new Error("Error:initializeSecretVault")

  const result = await collection.writeToNodes(data)

  return result
}

export const updateSecretVaultRecord = async <T>({
  schemaId,
  recordId,
  data,
}: {
  schemaId: string
  recordId: string
  data: Array<T>
}) => {
  const collection = await initializeSecretVault(schemaId)
  if (!collection) throw new Error("Error:initializeSecretVault")

  const result = await collection.updateDataToNodes(data as any, {
    recordId,
  })

  return result
}
