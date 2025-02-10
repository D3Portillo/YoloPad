import { defineSchema } from "../helpers"

// Define a schema for a project
export const svProjectWithOwner = defineSchema({
  properties: {
    name: {
      type: "string",
    },
    owner: {
      type: "string",
      isSecret: true,
    },
  },
})
