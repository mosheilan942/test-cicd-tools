import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { useEffect } from "react";
import "./App.css";

// const dedo = new Promise((resolve, reject) => {
// 	if (viteLogo) {
// 		resolve('foo');
// 	}
// 	reject('foo');
// });

// dedo;
// const foo_doo_goo = 56;
// function fn() {
// 	console.log(foo_doo_goo);
// }

// function foo(callback) {
// 	if (callback) {
// 		return void callback();
// 	}
// }

// if (foo) foo++;
// const foo = 1;
// a == b;

// typeof foo == 'undefined';

// const foo = function () {
//   console.log("hi");
// };
// console.log(foo);

// const fakeData = {
// 	foo: 'bar',
// 	bar: 'foo',
// 	name: {
// 		first: 'John',
// 		last: 'Doe',
// 	},
// 	city: 'New York',
// 	number: {
// 		home: 123,
// 		work: 456,
// 	},
// 	family: {
// 		father: {
// 			name: 'John',
// 			age: 45,
// 			job: 'doctor',
// 		},
// 		mother: {
// 			name: 'Jane',
// 			age: 40,
// 			job: 'teacher',
// 		},
// 		children: [
// 			{
// 				name: 'Jack',
// 				age: 20,
// 				job: 'student',
// 			},
// 			{
// 				name: 'Jill',
// 				age: 15,
// 				job: 'student',
// 			},
// 			{
// 				name: 'Joe',
// 				age: 10,
// 				job: 'student',
// 			},
// 		],
// 	},
// };
// const { foo, bar, name, city, number, family } = fakeData;
// console.log(foo);
// console.log(bar);
// console.log(city);
// console.log(number);
// console.log(name, family);

// const foo = (a: string, b: string, c: string, d: string) => {
// 	console.log(a, b, c, d);
// }
// console.log(foo);

// const foo = () => {
// 	const a = 1;
// 	const b = 2;
// 	const c = 3;
// 	const d = 4;
// 	const e = 5;
// 	const f = 6;
// 	const g = 7;
// 	const h = 8;
// 	const i = 9;
// 	console.log(a, b, c, d, e, f, g, h, i);
// };

// class foo {
// 	foo: string;
// 	constructor() {
// 		this.foo = 'foo';
// 	}
// }

// const fooInstance = new foo();
// console.log(fooInstance);

// window = {}

// console.log('Hello World'), //"big step for mankind, small step for me");

// const foo = 1;
// if (foo) {
// 	foo;
// }

// var foo = 1;

// const foo1 = array[0];

// const [{ bar: { baz } }] = array;
// [bar.baz] = array;

// With `object` enabled
// const { foo1 } = object;

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
