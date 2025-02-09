## YoloPad

YoloPad is your all-in-one platform to manage your projects. Let our automated tools handle everything from fundraising to market insights, so you can focus on building.

## Tech Stack

- NextJs as Fullstack framework
- Nillion to store sensitive information
- Shadcn for component library
- Wagmi and Rainbowkit for wallet connectivity
- AgentKit and Vercel AI SDK for agent manipulation and prompt engineering

## Running Local and Development

**Notes for Nillion Schema Generation**

- Visit [lib/nillion/schemas/registry.ts](./lib/nillion/schemas/registry.ts) and there you can configure schemas
- We use the `defineSchema` utility created for this project to make it more sugar-easy to define schemas
- When defined we must generate the respective payload and upload to Nillion. We can do so by doing `npm run nillion:generate`

**Example Schema**

```ts
import { defineSchema } from "../helpers"

// Define a schema for a User
export const svUser = defineSchema({
  properties: {
    name: {
      type: "string", // Name is public accesible
    },
    age: {
      type: "integer",
      isSecret: true, // We signal the utility that this most be "$allot" stored - kept secret :)
    },
  },
})
```

Lastly you can debug/checkout for the generated schemas and the regisry with all your schemas udner [generated/](./generated/) folder.

And do not forget to create the `.env` file with the required variables explained in `.env.example`

To run, first install all dependencies with `npm i` and finalize by doing `npm run dev`

Thanks
