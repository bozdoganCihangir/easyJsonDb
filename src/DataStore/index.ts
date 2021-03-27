import { existsSync, mkdirSync } from "fs";
import { Collection, IEntity } from "..";

export class DataStore {
    constructor(private dir: string) {
        if (!existsSync(dir)) {
            mkdirSync(dir);
        }
        this.dir = dir;
    }

    collection<T extends IEntity>(name: string): Collection<T> {
        return new Collection<T>(this.dir, name);
    }
}
