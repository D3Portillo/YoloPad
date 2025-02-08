import { defineSchema } from "../helpers"

// Define a schema for a project
export const svUserProject = defineSchema({
  properties: {
    name: {
      type: "string",
    },
  },
})
