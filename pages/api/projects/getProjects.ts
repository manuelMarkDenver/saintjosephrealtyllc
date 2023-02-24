// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../public/data/projects.json";
import type { NextApiRequest, NextApiResponse } from "next";

type Project = {
  id: number;
  project: string;
  year: number;
  address: string;
  specs: string;
  description: string;
  price: string;
};

interface ProjectArray {
  data: Project[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): any {
  res.status(200).json(data);
}
