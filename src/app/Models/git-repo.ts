import { Languages } from "./languages";

export interface GitRepo {
    name: string;
    htmlUrl: string;
    description?: string | null;
    thumbnail?: string | null;
    languages?: Languages | null;
}
