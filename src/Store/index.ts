import { existsSync, mkdirSync } from "fs";

import { IEntity } from "../IEntity";
import { Collection } from "..";

export class Store {
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
