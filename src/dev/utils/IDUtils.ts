class IDUtils {
    private static idSource: { [key: number]: number } = {}

    public static getID(id: number) {
        // @ts-ignore
        if (IDRegistry.isVanilla(id)) {
            return id;
        }

        let item = this.idSource[id];
        if (item) {
            return item;
        }

        return -1;
    }

    public static getNameByID(id: number) {
        // @ts-ignore
        if (IDRegistry.isVanilla(id)) {
            return id;
        }

        for (let name in this.idSource) {
            if (this.idSource[name] == id) {
                return parseInt(name);
            }
        }

        return -1;
    }

    public static genItemID(id: number) {
        this.idSource[id] ??= IDRegistry.genItemID(`modpe_${id}`);

        return this.getID(id);
    }

    public static genBlockID(id: number) {
        this.idSource[id] ??= IDRegistry.genBlockID(`modpe_${id}`);

        return this.getID(id);
    }
}