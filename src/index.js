/** const let などの変数宣言 */

// var val1 = 'vavava';
// console.log(val1);

// // var変数は上書き可能　大域
// val1 = 'ooo';
// console.log(val1);

// //再宣言も可能
// var val1 = 'eee';
// console.log(val1);

/**
 * let
 */
// let val2 = 'let';
// console.log(val2);

// //上書きは可能
// val2 = "let2";
// console.log('val2');

// //再宣言は不可
// let val2 = 'let3';

/**
 *const
 */

// const val3 = 'const';
// console.log(val3);

// // val3 = 'const2';

// const val3 = 'const3';

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'yasuko',
//   age:'52'
// };

// // console.log(val4);
// val4.name = 'yasukov2';
// val4.power = '52万';
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['cog','bat'];

// val5[0] = 'bird'
// val5.push('yasuko');

// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = 'aj';
//  const age = '28';

//  //従来
// //  const message1 = 'my name is ' + name + '. age : ' + age + '.';
// //  console.log(message1);

//  //テンプレート文字列使うと？
//  const message2 = `my name is ${name}. age : ${age}.`;
//  console.log(message2);

/**
 * アロー
 */

//従来
//  function hoge1(str) {
// return str;
//  }

// const hoge1 = function (str) {
//   return str;
// };

// console.log(hoge1("hoge1"));

// //アローを使う
// const hoge2 = (str2) => {
//   return str2;
// };
// console.log(hoge2("hoge2!!"));

// //引数１個だと（）を省略してもよし

// //処理が一行で返却する場合return と {} も省略してよし
// const hoge3 = (str2) => str2;

// console.log(hoge3("hoge3!?!"));

// //例
// const hoge4 = (num1,num2) => num1 + num2;

// console.log(hoge4(1,2));

/**
 * 分割代入
 */
// const myProfile = {
//   name : 'aj',
//   age :'28',
// };
// const{name ,age}=myProfile;

// const message1 = `my name is ${name}. age:${age}.`;
// console.log(message1);

// const{name : v1 ,age:v2}=myProfile;
// const message2 = `my name is ${v2}. age:${v1}.`;
// console.log(message2);

// //配列版
// const myProfile = ['aj',28,'yuka'];
// const message3 = `my name is ${myProfile[0]}. age:${myProfile[1]}.`;
// console.log(message3);

// const [,age,name2] = myProfile;
// const message4 = `my name is ${name2}. age:${age}.`;
// console.log(message4);

/**デフォルト値
 *
 */

// const greeting = (name = "aj") => console.log(`Hello! ${name} !`);
// greeting("tadahumi");

/**
 * スプレッド
 *  */

//配列の展開ができる

//  const arr1 =[1,2];
//  console.log(arr1);
//  console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //一つにまとめる場合
// const arr2 = [1,2,3,4,5,6];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 240];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["tanaka", "foo", "var"];
//forで書く繰り返しの処理
// for(let index = 0; index <nameArr.length; index++){
//   console.log(`${index + 1} : ${nameArr[index]}`);
// }

//map 関数
//map関数は引数に呼び出し元の配列の要素が順番に入ってくる。
//そして処理を行った値を配列として返す C#のLinqみたいだね
// const nameArr2 = nameArr.map((name)=>{ //map関数は
//   return name; //ここで各要素に処理を行うことも可能
// })
// console.log(nameArr2);

//二つ目の引数にはインデックスの値が入ってくる
// nameArr.map((name,index) => console.log(`${index + 1} : ${name}`));

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "foo") {
//     return name;
//   } else {
//     return `${name} 奴`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入れてほしいのじゃ";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "超えてる" : "not 超えてる";
// };
// console.log(checkSum(1, 3));

//** 論理演算子の本当の意味 */
// const flag1 = true;
// const flag2 = false;

//～または～
// if(flag1||flag2){
//   console.log('1 か 2　どちらかはtrue です');
// }

//～かつ～
// if(flag1&&flag2){
//   console.log('1 も 2　どちらもtrue です');
// }

//👆は本当の意味ではない！！
//if分自体も式のtrue or false を評価しているだけ

//|| は左側がfalseなら右側を返す
// const num = null;//nullはfalseの判定になる
// const fee = num || "金額が未設定です";
// console.log(fee);//金額が未設定ですになる

// const num = 100;
// const fee = num || "金額が未設定です";
// console.log(fee); //100になる

//&&は左側がtrueなら右側を返す
// const num2 = null; //nullはfalseの判定になる
// const fee2 = num2 && "何か設定されました";
// console.log(fee2); //nullになる

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2); //何か設定されましたになる
