/// <reference path="../utils/IDUtils.ts" /> 
/// <reference path="../utils/ItemData.ts" /> 

class ItemRegistry extends ItemData {
    public static setItem(id: number, iconName: string, iconIndex: number, name: string, stack: number = 64) {
        IDUtils.genItemID(id);

        this.setItemData(id, {
            'name': name,

            'texture': { 'name': iconName, 'data': iconIndex },

            'stack': stack,

            'type': 'item'
        });
    }

    public static register() {
        for (let id in this.itemSource) {
            let data = this.itemSource[id];

            let name = IDRegistry.getNameByID(parseInt(id));
            if (data.type == 'item') {
                Item.createItem(name, data.name, data.texture, { 'stack': data.stack, 'isTech': true });
            }
        }
    }
}

Callback.addCallback('ModPE:onCreate',()=>{
    ItemRegistry.register();
});