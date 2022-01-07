/// <reference path="utils/ScriptEngine.ts" />
/// <reference path="api/data/ArmorType.ts" />
/// <reference path="api/data/BlockFace.ts" />
/// <reference path="api/data/DimensionId.ts" />
/// <reference path="api/Block.ts" />
/// <reference path="api/ModPE.ts" />
/// <reference path="api/NoPrefix.ts" />

// ==================================================================================================== //
// 设置模块
// ==================================================================================================== //

var CoreAPI = {
    // Data
    ArmorType: ArmorType,
    BlockFace: BlockFace,
    DimensionId: DimensionId,
    // API
    Block: NativeBlockAPI,
    ModPE: NativeModPEAPI,
    // No Prefix
    addItemInventory: addItemInventory,
    bl_setMobSkin: bl_setMobSkin,
    bl_spawnMob: bl_spawnMob,
    clientMessage: clientMessage,
    explode: explode,
    getCarriedItem: getCarriedItem,
    getLevel: getLevel,
    getPitch: getPitch,
    getPlayerEnt: getPlayerEnt,
    getPlayerX: getPlayerX,
    getPlayerY: getPlayerY,
    getPlayerZ: getPlayerZ,
    getTile: getTile,
    getYaw: getYaw,
    preventDefault: preventDefault,
    print: print,
    rideAnimal: rideAnimal,
    setNightMode: setNightMode,
    setPosition: setPosition,
    setPositionRelative: setPositionRelative,
    setRot: setRot,
    setTile: setTile,
    setVelX: setVelX,
    setVelY: setVelY,
    setVelZ: setVelZ,
    spawnChicken: spawnChicken,
    spawnCow: spawnCow,
    spawnPigZombie: spawnPigZombie
}

// ==================================================================================================== //
// 加载模块
// ==================================================================================================== //

const injectCoreAPI = (engine: ScriptEngine) => {
    for (let name in CoreAPI) {
        engine.put(name.toString(), CoreAPI[name]);
        NativeModPEAPI.log(`put api: ${name} to ModPE`);
    }
}

// ==================================================================================================== //
// 加载脚本
// ==================================================================================================== //

let list = FileTools.GetListOfFiles(`${__dir__}script/`, '.js');
for (let i in list) {
    let engine = new ScriptEngine();

    injectCoreAPI(engine);

    // ==================================================================================================== //
    // 运行脚本
    // ==================================================================================================== //

    engine.eval(FileTools.ReadText(list[i].toPath()));

    // ==================================================================================================== //
    // 模组钩子
    // ==================================================================================================== //

    Callback.addCallback('tick', () => {
        engine.invokeFunction('modTick');
    });

    Callback.addCallback('DestroyBlock', (coords) => {
        engine.invokeFunction('destroyBlock', coords.x, coords.y, coords.z, coords.side);
    });

    Callback.addCallback('EntityHurt', (attacker: number, entity: number) => {
        engine.invokeFunction('destroyBlock', attacker, entity);
    });
}

// ==================================================================================================== //
// 模组注册
// ==================================================================================================== //

Callback.invokeCallback('ModPE:onCreate');