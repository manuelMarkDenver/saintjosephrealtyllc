import path from "path";
import fs from "fs";

const imagesDir = path.join(process.cwd(), "public/images/projects/project-1");
const imageNames = fs.readdirSync(imagesDir);
console.log("🚀 ~ file: getProjects.ts:6 ~ imageNames:", imageNames);

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../public/data/projects.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): any {
  const project = data.find((project) => {
    return project.id === 1;
  });
  res.status(200).json(data);
}
