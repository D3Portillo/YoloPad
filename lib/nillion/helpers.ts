// Set of type deinifitions and utility functions for schema creation
// @see
type SVString = {
  type: "string"
  isSecret?: boolean
}

type SVInteger = {
  type: "integer"
  minimum?: number
  maximum?: number
  isSecret?: boolean
}

type SVRecord = {
  type: "object"
  requiredProps?: string[]
  properties: Record<string, SVString | SVInteger | SVArray | SVRecord>
}

type SVArray = {
  type: "array"
  items: SVArray | SVRecord | SVString | SVInteger
  minItems?: number
}

type Schema = Omit<SVRecord, "type">

const transformProperties = (
  properties: Record<string, SVString | SVInteger | SVArray | SVRecord>
) => {
  const transformedProps: Record<string, any> = {}

  for (const key in properties) {
    const prop = properties[key]

    if ((prop as any).isSecret) {
      // Map out secret properties to a shared-secret schema
      transformedProps[key] = {
        type: "object",
        properties: {
          $share: {
            type: "string",
          },
        },
        required: ["$share"],
      }
      // We can skip the rest of the logic for secret properties
      continue
    }

    // Handle nested objects or arrays recursively
    if (prop.type === "object") {
      transformedProps[key] = {
        type: "object",
        properties: transformProperties(prop.properties),
        required: prop.requiredProps || [], // Renaming requiredProps to required for final schema
      }
    } else if (prop.type === "array") {
      transformedProps[key] = {
        type: "array",
        minItems: prop?.minItems || 0, // default to 0 items
        items: transformProperties({ [key]: prop.items })[key],
      }
    } else transformedProps[key] = prop // string or integer properties
  }

  return transformedProps
}

export const defineSchema = (schema: Schema) => {
  const properties = transformProperties(schema.properties)

  return {
    $schema: "http://json-schema.org/draft-07/schema#",
    // title: schema.title,
    type: "array",
    items: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          format: "uuid",
          coerce: true,
        },
        ...properties,
      },
      required: ["_id", ...(schema.requiredProps || [])],
      additionalProperties: false,
    },
  }
}
