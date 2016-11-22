
// {
//   let a = 10;
//   var b = 1;
//   {
//   	console.log(a,b);
//   }
// }
// console.log(a,b);
// function* fibs() {// Generator Function
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         // [a, b] = [b, a + b];
//         b = a + b;
//         a = b - a;
//     }
// }
// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(first, second, third, fourth, fifth, sixth);
// var name = 'dongfang'
// while (true) {
//     var name = 'guoxin'
//     console.log(name)  //guoxin
//     break;
// }
// console.log(name)  //guoxin
// let name = 'dongfang'
// while (true) {
//     let name = 'guoxin'
//     console.log(name)  //guoxin
//     break;
// }
// console.log(name)  //dongfang

// while (true) {
//     let name = 'guoxin'
//     console.log(name)  //guoxin
//     break;
// }
// console.log(name)  //error
// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); //6
// a[5](); //5\
// var x;
// console.log(x);
// x=5;

// let tmp;
// console.log(tmp); // undefined
// console.log(x);
// let x=5;

// var tmp = 123;
//
// if (true) {
//     tmp = 'abc'; // ReferenceError
//     let tmp;
// }

// function f() { console.log('I am outside!'); }
// {
//     if (false) {
//         // 重复声明一次函数f
//         let f=function f() { console.log('I am inside!'); }
//     }
//     f(); //ES6:i am outside
// };

// if (true) {
//     const MAX = 5;
// }
//
// console.log(MAX); // Uncaught ReferenceError

// var a = 1;
// window.a // 1
//
// let b = 1;
// window.b // undefined
// var arr = ['this is a string', 2, 3];
// //传统方式
// var a = arr[0],
//     b = arr[1],
//     c = arr[2];
// //解构赋值，简洁
// var [a, b, c] = arr;
// console.log(a);//this is a string
// console.log(b);//2
// console.log(c);//3


// let [ , , third] = ["foo", "bar", "baz"]; //  third "baz"
// let [x, , y] = [1, 2, 3];  //x=1,y=3
// var [foo] = [];//如果解构不成功，变量的值就等于undefined。
// var [x, y] = [1];//x=1,y=undefined
// let [x, y] = [1, 2, 3]; // x=1,y=2
// let [a, [b], d] = [1, [2, 3], 4];  //a=1,b=2,d=4
// let [foo] = {};//报错
// let [foo] = false;//如果等号的右边不是数组（即不是可遍历的结构），那么将会报错。
// let [head, ...tail] = [1, 2, 3, 4]; //head  1,tail [2, 3, 4]
// let [x, y, ...z] = ['a']; //x  "a",y  undefined ,z []

// var [ x = true] = [];// true
// [x, y = 'b'] = ['a']; // x='a', y='b'
// [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// var [x = 1] = [undefined]; //x=1
// var [x = 1] = [null]; // x=null

// var {x,y} = { x: "aaa", y: "bbb" };//正确赋值
// var { x } = { x: "aaa", y: "bbb" };//y为undefined
// var { x: m } = { x: 'aaa', y: 'bbb' }; // m=aaa;
//
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;    //f hello,l world

// const [...x] = 'hello';
// console.log(x[0]);

// function add([x, y]){
//     return x + y;
// }
// add([1, 2]);    //3

// function example() {
//     return [1, 2, 3];
// }
// var [a, b, c] = example();
// console.log(a);
// console.log(b);
// console.log(c);

// function example() {
//     return {
//         x: 1,
//         y: 2
//     };
// }
// var { x, y } = example();
// console.log(x);
// console.log(y);

// var jsonData = {
//     id: 88,
//     status: "OK",
//     data: [17, 364]
// };
//
// let { id, status, data: number } = jsonData;
// console.log(id, status, number); //88, "OK", [17, 364]
//
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
//
// for (let [key, value] of map) {
//     console.log(key + " is " + value);
// }
// first is hello
// second is world

// for (let codePoint of 'foo') {
//     console.log(codePoint)
// }

// let str='google';
// if(str.includes('o')){
//     console.log('yes');
// }else{
//     console.log('no');
// }//yes
// console.log(str.startsWith('g'));  //true
// console.log(str.endsWith('e'));    //true

// let str='good';
// console.log(str.repeat(3));

// $('#result').append(
//     'There are <b>' + basket.count + '</b> ' +
//     'items in your basket, ' +
//     '<em>' + basket.onSale +
//     '</em> are on sale!'
// );

// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// let arr = Array.from(arrayLike); // ['a', 'b', 'c']
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// console.log(Array.from('hello'));

// function foo() {
//     var args = Array.from(arguments);
//     console.log(args);
// }
// foo(1,2,3);

// console.log(Array.from([1, 2, 3], (x) => x * x));

// console.log(Array()); // []
// console.log(Array(3)) // [, , ,]
// console.log(Array(3, 11, 8)) // [3, 11, 8]

// console.log(Array.of(3, 11, 8) );      // [3,11,8]
// console.log(Array.of(3)) ;             // [3]
// console.log(Array.of(3).length) ;       // 1
// console.log(Array.of());                // []如果没有参数，就返回一个空数组。
// console.log(Array.of(undefined) );      // [undefined]
// console.log(Array.of(1));               // [1]
// console.log(Array.of(1, 2) );            // [1, 2]

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// console.log([1, 4, -5, 10].find((n) => n < 0));
// let a=[1, 5, 10, 15].find(function(value, index, arr) {
//     return value > 9;
// }) // 10
// console.log(a);

// let a=[1, 5, 10, 15].findIndex(function(value, index, arr) {
//     return value > 9;
// }) // 2
// console.log(a);

// console.log(['a', 'b', 'c'].fill(7));
//
// let a=new Array(3).fill(7);
// console.log(a);
//
// console.log(['a', 'b', 'c'].fill(7, 1, 2));

// for (let index of ['a', 'b'].keys()) {
//     console.log(index);
// }
//
// for (let val of ['a', 'b'].values()) {
//     console.log(val);
//  }
//
//
// for (let [index, elem] of ['a', 'b'].entries()) {
//     console.log(index, elem);
// }
// function log(x, y = 'World') {
//     console.log(x, y);
// }
//
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello



// var x = 1;
// function f(x, y = x) {
//     console.log(y);
// }
// f(2);
//
// function add(...values) {
//     let sum = 0;
//     for (let val of values) {
//         sum += val;
//     }
//     return sum;
// }
// var sum=add(1, 8, 6);
// console.log(sum);


// console.log(1, ...[2, 3, 4], 5);

// // ES5的写法
// Math.max.apply(null, [14, 3, 77])
// // ES6的写法
// Math.max(...[14, 3, 77])
// // 等同于
// Math.max(14, 3, 77);

// // ES5的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);
//
// // ES6的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1.push(...arr2);
// console.log(arr1);

// var more=[3,4,5];
// console.log([1, 2].concat(more));   // ES5
// console.log([1, 2, ...more] );    // ES6

// IIFE写法
// (function () {
//     var tmp =2;
//     console.log(tmp);
// }());
// // 块级作用域写法
// {
//     let tmp =2;
//     console.log(tmp);
// }
// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest);

// var obj = {
//     name: 'xiaoming',
//     sex: 'male',
//     age: 26,
//     son: {
//         sonname: '大熊',
//         sonsex: 'male',
//         sonage: 1
//     }
// };
// var {name, sex, age, son} = obj;
// console.log(son);
//
// function getVal() {
//     return [1, 2];
// }
// var [x,y] = getVal(); //函数返回值的解构
// console.log('x:'+x+', y:'+y);

// console.log([...'hello']);

// var f = v => v;
// //等同于
// var f = function(v) {
//     return v;
// };
//
// var f = () => 5;
// // 等同于
// var f = function () { return 5 };
//
// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//     return num1 + num2;
// };
// var sum = (num1, num2) => { return num1 + num2; }

//映射
//ES5
// [1,2,3].map(function (x) {
//     return x * x;
// });
// // ES6
// [1,2,3].map(x => x * x);
//
// //排序
// var values=[1,4,5,3,5]
// //ES5
// var result = values.sort(function (a, b) {
//     return a - b;
// });
// // ES6
// var result = values.sort((a, b) => a - b);

//

// var birth = '2000/01/01';
// var Person = {
//     name: '张三',
//     // 等同于hello: function ()...
//     hello() { console.log('我的名字是', this.name); }
// };

// let Key = 'foo';
// let obj = {
//     [Key]: true,
//     ['a' + 'bc']: 123
// };

// var person = {
//     sayName() {
//         console.log(this.name);
//     },
// };
// console.log(person.sayName.name)   // "sayName"

// Object.is(+0, -0) // false
// Object.is(NaN, NaN) // true

// var target = { a: 1 };
// var source1 = { b: 2 };
// var source2 = { c: 3 };
//
// Object.assign(target, source1, source2);
// console.log(target); // {a:1, b:2, c:3}
//
// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;
//
// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj);
//
// var obj1 = {a: {b: 1}};
// var obj2 = Object.assign({}, obj1);
//
// obj1.a.b = 2;
// console.log(obj2.a.b) // 2

// var person = {
//      name:'xiaoming',
//      sayName() {
//          console.log(this.name);
//     }
// };
// Object.assign(person, {sex:'male'},{
//     saySex() {
//         console.log(this.sex);
//     }
// });
// console.log(person);
//

// var person1={
//     name:'xiaoming'
// }
// var person ={
//     country:'China'
// }
// Object . setPrototypeOf ( person1, person )
// var person2 = clone1(person1);
// var person3 = clone2(person1);
// console.log( Object.getPrototypeOf(person2));
// console.log( Object.getPrototypeOf(person3));
//
// function clone1(origin) {
//     return Object.assign({}, origin);
// }
// function clone2(origin) {
//     let originProto = Object.getPrototypeOf(origin);
//     return Object.assign(Object.create(originProto), origin);
// }
//

//

// var obj = { foo: "bar", baz: 42 };
// console.log(Object.values(obj));
// var obj = { foo: "bar", baz: 42 };
// console.log(Object.keys(obj));
// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj));

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x);
// console.log(y);
// console.log(z);

// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
// };
//
// var p = new Point(1, 2);
//定义类
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// var p = new Point(1, 2);
// console.log(p.toString());

// class Point {
//     // ...
// }
//
// console.log(typeof Point); // "function"
// console.log(Point === Point.prototype.constructor) // true

// class B {}
// let b = new B();
// console.log(b.constructor === B.prototype.constructor)


// let People = class {
//     constructor(name) { //构造函数
//         this.name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }
// var p = new People('xiaoming');
// p.sayName();


//定义类
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// var point = new Point(1, 2);
// point.toString() // (1, 2)
// point.hasOwnProperty('x') // true
// point.hasOwnProperty('y') // true
// point.hasOwnProperty('toString') // false
// point.__proto__.hasOwnProperty('toString') // true

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// var p1 = new Point(1,2);
// var p2 = new Point(2,3);
// p1.__proto__.printName = function () { return 'good' };
// console.log(p1.printName()) // "good"
// console.log(p2.printName()) // "good"
// var p3 = new Point(4,2);
// console.log(p3.printName()) // "good"
//
// const MyClass = class Me {
//     getClassName() {
//         return Me.name;
//     }
// };
// let xiaoming = new MyClass();
// console.log(xiaoming.getClassName());

// const bar = Symbol('bar');
// const snaf = Symbol('snaf');
//  class myClass{
//     // 公有方法
//     foo(baz) {
//         this[bar](baz);
//     }
//     // 私有方法
//     [bar](baz) {
//         return this[snaf] = baz;
//     }
// };

// class ShowName {
//     constructor() {
//         this.printName = this.printName.bind(this);
//         this.ChangeName = this.ChangeName.bind(this);
//     }
//     ChangeName(name) {
//         this.Name=name;
//     }
//     printName(){console.log(this.Name);}
// }
//
// let ming = new ShowName();
// let { printName } = ming;//printName方法中的this，默认指向ShowName类的实例。
// let { ChangeName } = ming;
// ChangeName('xiaoming');
// printName(); //

// class ShowName {
//     ChangeName(name) {
//         this.Name=name;
//     }
//     printName(){console.log(this.Name);}
// }
// let ming = new ShowName();
// let { printName } = ming;//printName方法中的this，默认指向ShowName类的实例。
// let { ChangeName } = ming;
// ChangeName('xiaoming');//this会指向该方法运行时所在的环境,找不到ChangeName方法
// printName(); //





// class ShowName {
//     ChangeName(name) {
//         this.Name=name;
//     }
//     printName(){console.log(this.Name);}
// }
// let ming = new ShowName();
// ming.ChangeName('xiaoming');
// ming.printName();
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         super(x, y); // 调用父类的constructor(x, y)
//         this.color = color;
//     }
//     toString() {
//         return this.color + ' ' + super.toString(); // 调用父类的toString()
//     }
// }
// var p1 = new Point(1, 2);
// var p2 = new ColorPoint(2, 3, 'red');
//
// console.log(p2.__proto__ === ColorPoint.prototype) ;
// console.log(p2.__proto__.__proto__ === p1.__proto__ )

// const arr = [1, 2, 3, 4];
// // bad
// const first = arr[0];
// const second = arr[1];
// // good
// const [first, second] = arr;
// console.log(second);

// class MyClass {
//     constructor() {
//     }
//     get prop() {
//         return 'getter';
//     }
//     set prop(value) {
//         console.log('setter: '+value);
//     }
// }
// let inst = new MyClass();
// inst.prop = 123;
// console.log(inst.prop);
//
// class MyClass {
//     myProp = 42;
//
//     constructor() {
//         console.log(this.myProp); // 42
//     }
// }
// let inst = new MyClass();
//Mixin模式
// function mix(...mixins) {
//     class Mix {}
//
//     for (let mixin of mixins) {
//         copyProperties(Mix, mixin);
//         copyProperties(Mix.prototype, mixin.prototype);
//     }
//
//     return Mix;
// }
//
// function copyProperties(target, source) {
//     for (let key of Reflect.ownKeys(source)) {
//         if ( key !== "constructor"
//             && key !== "prototype"
//             && key !== "name"
//         ) {
//             let desc = Object.getOwnPropertyDescriptor(source, key);
//             Object.defineProperty(target, key, desc);
//         }
//     }
// }
//
// function* helloWorldGenerator() {
//     yield console.log('hello');
//     yield console.log('world');
//     return console.log('ending');
// }
//
// var hw = helloWorldGenerator();
//
// hw.next()
// // { value: 'hello', done: false }
// hw.next()
// // { value: 'world', done: false }
// hw.next()
// // { value: 'ending', done: true }
// hw.next()
// // { value: undefined, done: true }



// setTimeout(function () {
//     hw.next()
// }, 1000);

// function *foo() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }
//
// for (let v of foo()) {
//     console.log(v);
// }

// function* iterEntries(obj) {
//     let keys = Object.keys(obj);
//     for (let i=0; i < keys.length; i++) {
//         let key = keys[i];
//         yield [key, obj[key]];
//     }
// }

// let myObj = { x: 3, y: 7 };
//
// for (let [key, value] of myObj) {
//     console.log(key, value);
// }


// var readFile = require('fs-readfile-promise');
//
// readFile(fileA)
//     .then(function(data){
//         console.log(data.toString());
//     })
//     .then(function(){
//         return readFile(fileB);
//     })
//     .then(function(data){
//         console.log(data.toString());
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

/*

var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);*/
//
// var set = new Set();
// set.add(1);
// console.log(set.has(1));
// console.log(set.size);

// var items = new Set([1, 2, 3, 4, 5]);
// var array = Array.from(items);

// let set = new Set(['red', 'green', 'blue']);
//
// for (let item of set.keys()) {
//     console.log(item);
// }
//

// for (let item of set.values()) {
//     console.log(item);
// }
// // red
// // green
// // blue
//
// for (let item of set.entries()) {
//     console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]
//
// //可以省略values方法，直接用for...of循环遍历Set。
//
// for (let x of set) {
//     console.log(x);
// }

// let set = new Set([1, 2, 3]);
// set.forEach((value, key) => console.log(value * 2) )

// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// // 并集
// let union = new Set([...a, ...b]);// Set {1, 2, 3, 4}
// // 交集
// let intersect = new Set([...a].filter(x => b.has(x)));// set {2, 3}
// // 差集
// let difference = new Set([...a].filter(x => !b.has(x)));// Set {1}

// // 方法一
// let set = new Set([1, 2, 3]);
// set = new Set([...set].map(val => val * 2));
// // set的值是2, 4, 6
//
// // 方法二
// let set = new Set([1, 2, 3]);
// set = new Set(Array.from(set, val => val * 2));
// // set的值是2, 4, 6



//数组作为参数
// var map1 = new Map([
//     ["name1", "xiaoming"],
//     ["age1", "20"]
// ]);
// console.log(map1.get("name1")) ;
//
// //set添加
// var map2 = new Map();
// map2.set("name2", "xiaohong");
// map2.set("age2", "21");
// console.log(map2.get("name2")) ;
// //键可以为对象
// var map3 = new Map();
// var o = {p: 'Hello World'};
// map3.set(o, 'content');
// console.log(map3.get(o)) ;

// let map = new Map();
// map.set('x', true);
// map.set('y', false);
// console.log(map.size);

// let map = new Map()
//     .set(1, 'a')
//     .set(2, 'b')
//     .set(3, 'c');

// let map = new Map();
// map.set('x', true);
// map.set('y', false);
// console.log(map.size);
// map.clear()
// console.log(map.size);

// let map = new Map([
//     ['x', 'no'],
//     ['y',  'yes'],
// ]);
// for (let key of map.keys()) {
//     console.log(key);
// }
// for (let value of map.values()) {
//     console.log(value);
// }
// for (let item of map.entries()) {
//     console.log(item);
// }
// // 或者
// for (let [key, value] of map.entries()) {
//     console.log(key, value);
// }
// // 等效于
// for (let [key, value] of map) {
//     console.log(key, value);
// }

// let myMap = new Map()
//     .set('x', 1).set({'y': 3}, ['abc']);
// console.log([...myMap]);



// console.log(new Map([['x', 1], [{'y': 3}, ['abc']]]));
//
// function strMapToObj(strMap) {
//     let obj = Object.create(null);
//     for (let [k,v] of strMap) {
//         obj[k] = v;
//     }
//     return obj;
// }
//
//
// function strMapToJson(strMap) {
//     return JSON.stringify(strMapToObj(strMap));
// }
//
// let myMap = new Map().set('yes', true).set('no', false);
// let After=strMapToJson(myMap);
// console.log(After);

// let shi=JSON.stringify({x: 5, y: 6});
// console.log(shi);
// function mapToArrayJson(map) {
//     return JSON.stringify([...map]);
// }
// let myMap = new Map().set(true, 7).set({foo: 3}, 'abc');
// let After=mapToArrayJson(myMap);
// console.log(After);

// function objToStrMap(obj) {
//     let strMap = new Map();
//     for (let k of Object.keys(obj)) {
//         strMap.set(k, obj[k]);
//     }
//     return strMap;
// }
//
// function jsonToStrMap(jsonStr) {
//     return objToStrMap(JSON.parse(jsonStr));
// }
//
// let After=jsonToStrMap('{"yes":true,"no":false}');
// console.log(After);

// function jsonToMap(jsonStr) {
//     return new Map(JSON.parse(jsonStr));
// }
//
// jsonToMap('[[true,7],[{"foo":3},["abc"]]]')

// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();
//
// console.log(iter.next()); // { value: 'a', done: false }
// console.log(iter.next());// { value: 'b', done: false }
// console.log(iter.next());// { value: 'c', done: false }
// console.log(iter.next()); // { value: undefined, done: true }


// Obj.prototype[Symbol.iterator] = function() {
//     var iterator = {
//         next: next
//     };
//     var current = this;
//     function next() {
//         if (current) {
//             var value = current.value;
//             current = current.next;
//             return {
//                 done: false,
//                 value: value
//             };
//         } else {
//             return {
//                 done: true
//             };
//         }
//     }
//     return iterator;
// }
// function Obj(value) {
//     this.value = value;
//     this.next = null;
// }
// var one = new Obj(1);
// var two = new Obj(2);
// var three = new Obj(3);
// one.next = two;
// two.next = three;
// for (var i of one){
//     console.log(i);
// }

// const soul_iterator={
//     soul_index:-1,
//     [Symbol.iterator](){
//         return this;
//     },
//     next(){
//         var arr=this.soul_exchange();
//         this.soul_index++;
//         return this.soul_index>=arr.length?{value:undefined,done:true}:{value:this[arr[this.soul_index]], done:false};
//     },
//     soul_exchange(){
//         var array=[];//用来存放数字索引和属性名的键值对
//         var j=0;//用作array数组的索引值
//         for(let i in this){
//             if(i!="soul_index"&&i!="next"&&i!="soul_exchange")
//                 array[j++]=i;
//         }
//         // console.log(array);
//         return array;
//     }
// };
// //测试对象
// function objTest(){}
// objTest.prototype={
//     name:"soul",
//     age:21
// };
// //部署迭代器对象
// objTest.prototype.__proto__=soul_iterator;
// //创建测试对象的实例
// var newObj=new objTest();
// // for...of  测试
// for(let i of newObj){
//     console.log(i);
// }

// const arr = ['red', 'green', 'blue'];
//
// for(let v of arr) {
//     console.log(v);
// }
// const arr = ['red', 'green', 'blue'];
// arr.forEach(function (element, index) {
//     console.log(element); // red green blue
// });

// var cities = new Set(["Beijing", "Tianjin", "Shanghai"]);
// for (var e of cities) {
//     console.log(e);
// }

// var team = new Map();
// team.set("Xiaoming", 29);
// team.set("Xiaohong", 21);
// team.set("Xiaoli", 22);
// for (var [name, value] of team) {
//     console.log(name + ": " + value);
// }

// 字符串
// let str = "hello";
// for (let s of str) {
//     console.log(s);
// }
// // DOM NodeList对象
// let paras = document.querySelectorAll("p");
// for (let p of paras) {
//     p.setAttribute("class","test");
// }
// // arguments对象
// function printArgs() {
//     for (let x of arguments) {
//         console.log(x);
//     }
// }
// printArgs('a', 'b');
// let arrayLike = { length: 2, 0: 'a', 1: 'b' };
//
// // 正确
// for (let x of Array.from(arrayLike)) {
//     console.log(x);
// }

// var promise = new Promise(function(resolve){
//     console.log(1);
//     resolve(3);
// });
// promise.then(function(value){
//     console.log(value);
// });
// console.log(2);

// bad
// function getFullName(user) {
//     const firstName = user.firstName;
//     const lastName = user.lastName;
// }
//
// // good
// function getFullName(obj) {
//     const { firstName, lastName } = obj;
// }
//
// // best
// function getFullName({ firstName, lastName }) {
// }
// const a = { k1: 2, k2: 3 };
// const b = {
//     k1: 3,
//     k2: 2,
// };
// var ref = 'some value';
// const atom = {
//     ref,    //ref:ref
//     value: 1,
//     addValue(value) {     //addValue:funtion(value){}
//         return atom.value + value;
//     },
// };
// let items=[1,2,3];
// // bad
// const len = items.length;
// const itemsCopy1 = [];
// let i;
// for (i = 0; i < len; i++) {
//     itemsCopy1[i] = items[i];
// }
// // good
// const itemsCopy2 = [...items];
// bad
// [1, 2, 3].map(function (x) {
//     return x * x;
// });
// // good
// [1, 2, 3].map((x) => {
//     return x * x;
// });
// // best
// [1, 2, 3].map(x => x * x);

// bad
// function All() {
//     const args = Array.prototype.slice.call(arguments);
//     return args.join('');
// }
// // good
// function All(...args) {
//     return args.join('');
// }

// bad
// function func(opts) {
//     opts = opts || {};
// }
//
// // good
// function func(opts = {}) {
//     // ...
// }
//
// let map = new Map([["x",21],["y",22]]);
// for (let key of map.keys()) {
//     console.log(key);
// }
// class People {
//     constructor(name) { //构造函数
//         this.name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }
// class Student extends People {
//     constructor(name, grade) { //构造函数
//         super(name);    //调用父类构造函数
//         this.grade = grade;
//     }
//     sayGrade() {
//         console.log(this.grade);
//     }
// }

// bad
// const moduleA = require('moduleA');
// const func1 = moduleA.func1;
// const func2 = moduleA.func2;
// // good
// import { func1, func2 } from 'moduleA';
// class Animal {
//     constructor(){
//         this.type = 'animal'
//     }
//     says(say){
//         console.log(this.type + ' says ' + say)
//     }
// }
//
// let animal = new Animal()
// animal.says('hello') //animal says hello
//
// class Cat extends Animal {
//     constructor(){
//         super()
//         this.type = 'cat'
//     }
// }
//
// let cat = new Cat()
// cat.says('hello') //cat says hello

// function* fibs() {
//     let a = 0;
//     let b = 1; while (true) {
//     yield a; // [a, b] = [b, a + b];
//    b = a + b;
//     a = b - a; }
// }
//   let [first, second, third, fourth, fifth, sixth] = fibs();
//     console.log(first, second, third, fourth, fifth, sixth);
// console.log(first, second, third, fourth, fifth, sixth);
// console.log(first, second, third, fourth, fifth, sixth);
// const {length:len} = 'hello';
// console.log(len);
// const [...x] = 'hello';
// console.log(x.length);

// function f([x, y, z]) {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// f([1, 2, 3]);
// let a=[];
// let i=0;
// for(let x of "and"){
//    a[i]=x;
//     i++;
// }
// console.log(a[1]);
// let arr=[1,2,3]
//  for(let val of arr){
//     console.log(val);
// }
// function example() {
//     return [2014, 12, 13];
// }
// var arr = example();
// console.log(function(...arr){
//     return arr;
// }) ;

