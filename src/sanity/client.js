import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: "2a5ceujm",
  dataset: "production",
  apiVersion: '2025-12-26',
  useCdn: true,
})
