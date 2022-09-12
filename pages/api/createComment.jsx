// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sanityClient from "@sanity/client"

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // apiVersion: '2021-08-31',
  useCdn: process.env.NODE_ENV == "production",
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default function createComment(req, res) {
  const { _id, name, email, comment } = JSON.parse(req.body)

  try {
    client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    return res.status(500).json({ message: `Couldn't submit comment`, err })
  }
  res.status(200).json({ message: "Comment Submitted" })
}
