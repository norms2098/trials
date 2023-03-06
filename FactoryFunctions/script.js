const PersonFactory = (name,age) => {
    const sayHello = () => {
        console.log(`Hello ${name},${age}`);
    }
    return {name,age,sayHello}
}
const jeff = PersonFactory('Jeff','27');

console.log(`Name: ${jeff.name}`);
console.log(`Age: ${jeff.age}`);
jeff.sayHello();