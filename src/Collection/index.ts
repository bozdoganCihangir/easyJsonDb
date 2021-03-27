import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";

import { IEntity } from "..";

export class Collection<T extends IEntity> {
    private file: string;
    private entities: T[] = [];

    constructor(dir: string, private name: string) {
        this.file = path.join(dir, name + ".json");
    }
}
