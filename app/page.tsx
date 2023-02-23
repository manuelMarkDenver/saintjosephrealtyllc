import path from "path";
import fs from "fs";
import Homepage from "./Homepage";


const imagesDir = path.join(process.cwd(), "public/images/projects/project-1");
const imageNames = fs.readdirSync(imagesDir);

const Page = () => {
  return (
    <main>
      <Homepage images={imageNames} />
    </main>
  );
};

export default Page;
