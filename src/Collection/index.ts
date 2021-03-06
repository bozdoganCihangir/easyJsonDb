import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";

export class Collection<T extends { id: string }> {
    private file: string;
    private entities: T[] = [];

    constructor(dir: string, private name: string) {
        this.file = path.join(dir, name + ".json");
        this.load();
    }

    create(obj: object): string {
        const entity = { id: this.uid(), ...obj } as T;
        this.entities.push(entity);
        this.save();
        return entity.id;
    }

    delete(id: string): void {
        const index = this.findIndex(id);
        this.entities.splice(index, 1);
        this.save();
    }

    get(id: string) {
        return this.entities.find((item) => item.id === id);
    }

    list(): T[] {
        return this.entities;
    }

    update(entity: T): void {
        const index = this.findIndex(entity.id);
        this.entities[index] = entity;
        this.save();
    }

    private findIndex(id: string) {
        const index = this.entities.findIndex((current) => current.id === id);
        if (index === -1) {
            throw new Error(`No ${this.name} found with id "${id}"`);
        }
        return index;
    }

    private load() {
        if (existsSync(this.file)) {
            this.entities = JSON.parse(
                readFileSync(this.file, { encoding: "utf8" })
            );
        }
    }

    private save() {
        writeFileSync(this.file, JSON.stringify(this.entities, null, 2), {
            encoding: "utf8",
        });
    }

    private uid() {
        return Math.random().toString(36).substring(7).toUpperCase();
    }
}
