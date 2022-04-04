/**
 * const,letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可能
// val3 = "const変数を上書き";

// // const変数は再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hayashi",
//   age: 34
// };
// // console.log(val4);

// val4.name = "はやし";
// // console.log(val4);

// val4.address = "Tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "hayashi";
// const age = 34;
// //「私の名前はhayashiです。年齢は34歳です。」

// //従来の文字列結合
// const message1 = "私の名前は"+name+"です。年齢は"+age+"です。"
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// //従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = function (str) {
//   return str;
// };
// console.log(func2("func2です"));

// //アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です"));

// const func4 = (str) => str;
// console.log(func4("func4です"));

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "hayashi",
//   age: 34
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["hayashi", 34];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("hayashi");
// sayHello();

/**
 * スプレッド構文 ...
 */
// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //　まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合￥
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map, filterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "林"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// mapを使ったループ
// const nameArr２ = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr２);

// nameArr.map((name) => console.log(name));

// // indexを表示するには
// nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

// //filter 条件に一致したものだけを返す関数
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; // return分に取り出したい条件を書く
// });
// console.log(newNumArr);
