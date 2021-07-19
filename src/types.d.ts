declare module "alpinejs" {
    const version: string;
    function start(): void;
    function disableEffectScheduling(callback: any): void;
    function setReactivityEngine(engine: any): void;
    function clone(oldEl: HTMLElement, newEl: HTMLElement): void;
    function data(name: any, callback: any): void;
}