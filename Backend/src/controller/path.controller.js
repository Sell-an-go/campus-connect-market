import path from "path";
import { fileURLToPath } from "url";

function pathFile() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return __dirname;
}

export default pathFile;
 