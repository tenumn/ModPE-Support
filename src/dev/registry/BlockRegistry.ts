/// <reference path="../utils/IDUtils.ts" /> 
/// <reference path="../utils/ItemData.ts" /> 

class BlockRegistry extends ItemData {
    public static defineBlock(id: number, name: string, textures: [string, number][], materialSourceId: number = 17, opaque: boolean = true, renderType: number = 0) {
        IDUtils.genBlockID(id);

        while (textures.length % 6 != 0) {
            textures.push(textures[textures.length - 1]);
        }

        this.addItemData(id, {
            'name': name,

            'texture': textures,

            'material': materialSourceId,

            'opaque': opaque,

            'rendertype': renderType
        });
    }

    public static register() {
        for (let id in this.itemSource) {
            let data = this.itemSource[id];

            let block: Block.BlockVariation[] = new Array(16);

            for (let i = 0; i < Math.min(Math.floor(data.texture.length / 6), 16); i++) {
                let texture = new Array(6);
                for (let ii = 0; ii < 6; ii++) {
                    texture.push(data.texture[i + ii]);
                }
                block.push({ 'name': data.name, 'texture': texture, 'inCreative': false });
            }

            Block.createBlock(IDRegistry.getNameByID(parseInt(id)), block, data);
        }
    }
}

Callback.addCallback('ModPE:onCreate',()=>{
    BlockRegistry.register();
});