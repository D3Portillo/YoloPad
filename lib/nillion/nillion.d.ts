// NOTE: Recreated definition file for nillion-sv-wrappers package
// Took as reference the development repo: https://github.com/NillionNetwork/nillion-sv-wrappers

declare module "nillion-sv-wrappers" {
  export interface RequestPayload {
    schema?: string
    data?: Record<string, unknown>
    filter?: Record<string, unknown>
    id?: string
  }

  export interface NodeResponse<T = Record<string, unknown>> {
    node: string
    result: T
  }

  export interface NodeErrorResponse {
    node: string
    error: string
  }

  export interface NodeConfig {
    url: string
    did: string
  }

  export interface Credentials {
    secretKey: string
    orgDid: string
  }

  export interface TokenResult {
    node: string
    token: string
  }

  export interface EncryptedShare {
    [key: string]: unknown
  }

  export interface DecryptedData {
    [key: string]: unknown
  }

  export interface PreparedData {
    [key: string]: unknown
  }

  export interface UnifiedData {
    [key: string]: unknown
  }

  export class SecretVaultWrapper {
    nodes: NodeConfig[]
    nodesJwt: TokenResult[] | null
    credentials: Credentials
    schemaId: string | null
    operation: string
    tokenExpirySeconds: number

    constructor(
      nodes: NodeConfig[],
      credentials: Credentials,
      schemaId?: string | null,
      operation?: string,
      tokenExpirySeconds?: number
    )

    init(): Promise<void>
    setSchemaId(schemaId: string, operation?: string): void
    generateNodeToken(nodeDid: string): Promise<string>
    generateTokensForAllNodes(): Promise<TokenResult[]>
    makeRequest(
      nodeUrl: string,
      endpoint: string,
      token: string,
      payload: RequestPayload,
      method?: string
    ): Promise<unknown>
    allotData(data: Record<string, unknown>[]): Promise<PreparedData[]>
    flushData(): Promise<NodeResponse[]>
    getSchemas(): Promise<NodeResponse<{ data: unknown[] }>[]>
    updateDataToNodes(
      recordUpdate: Record<string, unknown>,
      filter: Record<string, unknown> = {}
    ): Promise<(NodeResponse | NodeErrorResponse)[]>
    createSchema(
      schema: object,
      schemaName: string,
      schemaId?: string
    ): Promise<NodeResponse[]>
    deleteSchema(schemaId: string): Promise<NodeResponse[]>
    writeToNodes<T = unknown>(
      data: T
    ): Promise<
      Array<{
        node: string
        result: { error: string; data: T }
      }>
    >
    readFromNodes(filter?: Record<string, unknown>): Promise<UnifiedData[]>
  }
}
