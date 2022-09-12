import { createClient, createCurrentUserHook } from "next-sanity"
import ImageUrlBuilder from "@sanity/image-url"

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2021-03-25",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
}
export const sanityClient = createClient(config)
export const urlFor = (source) => ImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config)
