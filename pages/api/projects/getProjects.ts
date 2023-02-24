// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../public/data/projects.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): any {
  res.status(200).json(data);
}
