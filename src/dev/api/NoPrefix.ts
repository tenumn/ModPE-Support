/// <reference path="../utils/IDUtils.ts" /> 

const addItemInventory = (id: number, count: number, data: number) => {
    Player.addItemToInventory(IDUtils.getID(id), count, data);
}

/** @deprecated */
const bl_setMobSkin = (entity: number, skin: string) => {
    Entity.setSkin(entity, skin);
}

/** @deprecated */
const bl_spawnMob = (x: number, y: number, z: number, type: number, skin?: string) => {
    return Entity.spawn(x, y, z, type, skin);
}

const clientMessage = (message: string) => {
    Game.message(message);
}

const explode = (x: number, y: number, z: number, power: number, fire: boolean) => {
    World.explode(x, y, z, power, fire);
}

const getCarriedItem = () => {
    return IDUtils.getNameByID(Player.getCarriedItem().id);
}

/** @deprecated */
const getLevel = () => {

}

const getPitch = (entity: number) => {
    return ModAPI.requireGlobal('Entity.getPitch')(entity);
}

const getPlayerEnt = () => {
    return Player.get();
}

const getPlayerX = () => {
    return Player.getPosition().x;
}

const getPlayerY = () => {
    return Player.getPosition().y;
}

const getPlayerZ = () => {
    return Player.getPosition().z;
}

const getTile = (x: number, y: number, z: number) => {
    return IDUtils.getNameByID(World.getBlockID(x, y, z));
}

const getYaw = (entity: number) => {
    return ModAPI.requireGlobal('Entity.getYaw')(entity);
}

const preventDefault = () => {
    ModAPI.requireGlobal('preventDefault')();
}

const print = (message: string) => {
    alert(message);
}

const rideAnimal = (entity: number, rider: number) => {
    Entity.rideAnimal(entity, rider);
}

/**@deprecated */
const setNightMode = () => {

}

const setPosition = (entity: number, x: number, y: number, z: number) => {
    Entity.setPosition(entity, x, y, z);
}

const setPositionRelative = (entity: number, x: number, y: number, z: number) => {
    setPosition(entity, getPlayerX() + x, getPlayerY() + y, getPlayerZ() + z);
}

const setRot = (entity: number, yaw: number, pitch: number) => {
    ModAPI.requireGlobal('Entity.setRot')(entity, yaw, pitch);
}

const setTile = (x: number, y: number, z: number, id: number, data: number) => {
    World.setBlock(x, y, z, IDUtils.getID(id), data);
}

const setVelX = (entity: number, x: number) => {
    let vel = Entity.getVelocity(entity);
    Entity.setVelocity(entity, x, vel.y, vel.z);
}

const setVelY = (entity: number, y: number) => {
    let vel = Entity.getVelocity(entity);
    Entity.setVelocity(entity, vel.x, y, vel.z);
}

const setVelZ = (entity: number, z: number) => {
    let vel = Entity.getVelocity(entity);
    Entity.setVelocity(entity, vel.x, vel.y, z);
}

const spawnChicken = (x: number, y: number, z: number, skin: string) => {
    return Entity.spawn(x, y, z, Native.EntityType.CHICKEN, skin);
}

const spawnCow = (x: number, y: number, z: number, skin: string) => {
    return Entity.spawn(x, y, z, Native.EntityType.COW, skin);
}

const spawnPigZombie = (x: number, y: number, z: number, skin: string) => {
    return Entity.spawn(x, y, z, Native.EntityType.PIG_ZOMBIE, skin);
}