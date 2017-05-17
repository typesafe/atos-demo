import {Injectable} from '@angular/core';

var registry = {};

export let PortletRegistry = registry;

export function Portlet(key?: string): any {

    console.log("Portlet(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        registry[target.name] = target;
        console.log(registry);
    }

    // return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    //     console.log("in cache decorator for " + propertyKey);
    //     console.log(arguments);
    //     // var originalMethod = descriptor.value; // save a reference to the original method

    //     // var p: Promise<any>;

    //     // // NOTE: Do not use arrow syntax here, use function to not mess up `this`
    //     // descriptor.value = function (...args: any[]) {
    //     //     var thiz = this;
    //     //     return memoryCache.get(key, function () {
    //     //         if (p) {
    //     //             return p;
    //     //         }

    //     //         p = originalMethod.apply(thiz, args);
    //     //         if (!(p instanceof Promise)) {
    //     //             throw "@Cache can only be used on functions that return a Promise.";
    //     //         }
    //     //         p.then(r => {
    //     //             p = null;
    //     //         });
    //     //         return p;
    //     //     }, cacheDuration);
    //     // };

    //     return descriptor;
    // }
    
}