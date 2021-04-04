import { existsSync, mkdirSync } from "fs";

import { Collection } from "..";

export class Store {
    constructor(private dir: string) {
        if (!existsSync(dir)) {
            mkdirSync(dir);
        }
        this.dir = dir;
    }

    collection<T extends { id: string }>(name: string): Collection<T> {
        return new Collection<T>(this.dir, name);
    }
}
