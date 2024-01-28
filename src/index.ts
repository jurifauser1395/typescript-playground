function loggedMethod(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log("LOG: Entering method.")
        const result = originalMethod.apply(this, args);
        console.log("LOG: Exiting method.")
        return result;
    }

    return descriptor;
}

// Decorators
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const p = new Person("Ron");
p.greet();

