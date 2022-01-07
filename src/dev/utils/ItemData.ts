/// <reference path="IDUtils.ts" /> 

class ItemData {
    public static itemSource: { [key: string]: any } = {}

    public static getItemData(id: number) {
        return this.itemSource[IDUtils.getID(id)] || {};
    }

    public static setItemData(id: number, data: { [key: string]: any }) {
        this.itemSource[IDUtils.getID(id)] = data;
    }

    public static addItemData(id: number, data: { [key: string]: any }) {
        this.setItemData(id, Object.assign({}, this.getItemData(id), data));
    }
}