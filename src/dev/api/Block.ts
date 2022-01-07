/// <reference path="../utils/IDUtils.ts" /> 
/// <reference path="../registry/BlockRegistry.ts" /> 

class NativeBlockAPI {
    public static defineBlock(id: number, name: string, textures: [string, number][], materialSourceId: number, opaque: boolean, renderType: number) {
        BlockRegistry.defineBlock(id, name, textures, materialSourceId, opaque, renderType);
    }
    public static defineLiquidBlock(id: number, name: string, textures: [string, number][], materialSourceId: number) {

    }

    public static setDestroyTime = (id: number, time: number) => {
        Block.setDestroyTime(IDUtils.getID(id), time);
    }

    public static getRenderType = (id: number) => {
        return Block.getRenderType(IDUtils.getID(id));
    }

    public static setRenderType = (id: number, renderType: number) => {
        BlockRegistry.addItemData(id, {
            'rendertype': renderType
        });
    }

    public static setExplosionResistance = (id: number, explosionres: number) => {
        BlockRegistry.addItemData(id, {
            'explosionres': explosionres
        });
    }

    public static setShape = (id: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, data: number = 0) => {
        Block.setShape(IDUtils.getID(id), x1, y1, z1, x2, y2, z2, data);
    }

    public static setLightLevel = (id: number, lightlevel: number) => {
        BlockRegistry.addItemData(id, {
            'lightlevel': lightlevel
        });
    }

    /** @deprecated */
    public static setColor() {

    }

    public static setRenderLayer(id: number, renderlayer: number) {
        BlockRegistry.addItemData(id, {
            'renderlayer': renderlayer
        });
    }

    public static getRenderLayer(id: number) {
        return Block.getRenderLayer(IDUtils.getID(id));
    }

    public static setLightOpacity(id: number, lightopacity: number) {
        BlockRegistry.addItemData(id, {
            'lightopacity': lightopacity
        });
    }

    /** @deprecated */
    public static getAllBlockIds() {

    }

    public static getDestroyTime(id: number) {
        return Block.getDestroyTime(IDUtils.getID(id));
    }

    public static getFriction(id: number, data?: number) {
        return Block.getFriction(IDUtils.getID(id));
    }

    public static setFriction(id: number, friction: number) {
        if (friction < 0.1) friction = 0.1;
        BlockRegistry.addItemData(id, {
            'friction': friction
        });
    }

    public static setRedstoneConsumer(id: number, isConnectToRedstone: boolean) {
        ModAPI.requireGlobal('Block.setRedstoneConnector')(id, -1, isConnectToRedstone);
    }

    /** @deprecated */
    public static getTextureCoords() {

    }
}