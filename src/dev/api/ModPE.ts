/// <reference path="../registry/ItemRegistry.ts" /> 

class NativeModPEAPI {
    public static setItem(id: number, iconName: string, iconIndex: number, name: string, stack: number) {
        ItemRegistry.setItem(id, iconName, iconIndex, name, stack);
    }

    public static log(log: string) {
        Logger.Log(log, 'ModPE');
    }

    public static getLanguage() {
        return Translation.getLanguage();
    }

    public static getMinecraftVersion() {
        return getMCPEVersion().str;
    }

    public static getOS() {
        return 'Android';
    }

    /**@deprecated */
    public static selectLevel() {

    }
}