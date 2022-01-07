//@ts-ignore
const Context = org.mozilla.javascript.Context;

//@ts-ignore
const ScriptableObject = org.mozilla.javascript.ScriptableObject;

class ScriptEngine {
    private context = Context.enter();

    private scope = this.context.initStandardObjects();

    public get(name: string): any {
        return this.scope[name];
    }

    public put(name: string, api: any): void {
        ScriptableObject.putProperty(this.scope, name, api);
    }

    public invokeFunction(name: string, ...int: any): void {
        let invoke: Function = this.get(name);
        if (typeof invoke == 'function' && invoke != null) {
            invoke.call(this.context, int);
        }
    }

    public eval(text: string): void {
        this.context.evaluateString(this.scope, text, 'script', 0, null);
    }
}