import "./style.css";

//? -------- прості ---------

// type User = {
//   username: string;
//   age: number;
//   isActive: boolean;
// };

// const displayUserProfile = (user: User): string => {
//   return `${user.username} ${user.age} is ${user.isActive}`;
// };
// console.log(
//   displayUserProfile({
//     username: "Bob",
//     age: 45,
//     isActive: true,
//   })
// );

// ? ---------- Array ---------

// const calcTotal = (arr: Array<number>) => {
//   return arr.reduce((acc, el) => acc + el, 0);
// };

// console.log(calcTotal([1, 2, 3, 4]));

// type User = {
//   name: string;
//   age: number;
// };
// const users = [
//   {
//     name: "Bob",
//     age: 45,
//   },
//   {
//     name: "John",
//     age: 40,
//   },
//   {
//     name: "Synthia",
//     age: 38,
//   },
// ];
// const showUsers = (arr: User[]) => {
//   return arr.reduce((acc, user) => acc + `${user.name} - ${user.age}\n`, "");
// };

// console.log(showUsers(users));

// ? ----------- unknow -----------------

// const safelyParseJson = (jsonString: string): unknown => {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result;
//     }
//   } catch (e) {
//     console.error("Failed to parse JSON: ", e);
//   }
//   return null;
// };

// ? ----------- any -----------------

// const logDetails = (value: any): void => {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// };

// // ? ----------- enum -----------------

// enum VechicleType {
//   Car = "Audi",
//   Truck = "Scania",
//   Motorcycle = "Ducatti",
// }

// const getVechicleType = (vechicle: VechicleType): string => {
//   return `The vechicle type is: ${vechicle}!`;
// };

// console.log(getVechicleType(VechicleType.Car));
// console.log(getVechicleType(VechicleType.Truck));
// console.log(getVechicleType(VechicleType.Motorcycle));

// ? ----------- Union Types -----------------

// const formatInput = (input: string | number | null) => {
//   if (typeof input === "number") {
//     return input.toFixed(2);
//   } else if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     return null;
//   }
// };

// console.log(formatInput("Car"));
// console.log(formatInput(3.34535345));
// console.log(formatInput(null));

// ? ----------- Literals -----------------

// const lightShower = (color: "green" | "yellow" | "red") => {
//   if (color === "green") {
//     console.log("Go!");
//   } else if (color === "yellow") {
//     console.log("Ready!");
//   } else if (color === "red") {
//     console.log("Stop!");
//   }
// };

// lightShower("green");
// lightShower("yellow");
// lightShower("red");

// ? ----------- Return Type -----------------

// const logName = (name: string): string => {
//   return `${name}`;
// };

// console.log(logName("Bob"));

// ? ----------- void -----------------

// const logName = (name: string): void => {
//   console.log(`${name}`);
// };

// console.log(logName("Bob"));

// ? ----------- never -----------------

// const errorHandler = (message: string): never => {
//   throw new Error(message);
// };

// errorHandler("Critical error occurred!");

// ? ----------- Interface -----------------

// interface IUser {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHello(): string;
//   sayBye(): void;
//   showAge(userAge: number): string;
// }

// const user: IUser = {
//   name: "Bob",
//   age: 34,
//   sayHello() {
//     return "Hello!";
//   },
//   sayBye() {
//     console.log("Bye!");
//   },
//   showAge(userAge) {
//     return `My age is ${userAge}`;
//   },
// };

// ? ----------- Index Properties -----------------

// interface IList {
//   [key: string]: number | null;
// }
// type Fruits = {
//   apples: number;
//   bananas: number;
//   aranges: number;
// };
// const fruits: IList = {
//   apples: 10,
//   bananas: 15,
//   oranges: 25,
//   pineapples: 10,
//   peach: null,
// };

// const electronics: IList = {
//   phones: 20,
//   tablets: 10,
//   laptop: 15,
// };

// ? ----------- Generics -----------------

// const getFirstElement = <T>(arr: T[]): T | undefined => {
//   return arr[0];
// };

// console.log(getFirstElement(1));
// console.log(getFirstElement([1, 2, 3]));
// console.log(getFirstElement(["a", "b", "c"]));
// console.log(
//   getFirstElement([
//     { name: "AAA", age: 40 },
//     { name: "BBB", age: 35 },
//     { name: "CCC", age: 28 },
//   ])
// );

// ----------------

// const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
//   return obj[key];
// };

// const person = {
//   name: "Bob",
//   age: 38,
//   occupation: "Engineer",
// };

// const name = getProperty(person, "name");
// console.log(name);
// const age = getProperty(person, "age");
// console.log(age);

// ? ----------- Partial -----------------

// interface IUserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: IUserProfile = {
//   username: "johndou",
//   email: "john.dou@example.com",
//   age: 38,
// };

// const updateUserProfile = (
//   profile: IUserProfile,
//   updates: Partial<IUserProfile>
// ) => {
//   return { ...profile, ...updates };
// };

// const updatedProfile = updateUserProfile(originalProfile, {
//   email: "new.john.dou@example.com",
//   age: 35,
// });

// console.log(updatedProfile);

// ? ----------- Readonly -----------------

// interface IUser {
//   id: number;
//   name: string;
// }

// const user: Readonly<IUser> = {
//   id: 100,
//   name: "Bob",
// };

// user.name = "Rob"; // error
// console.log(user);

// ? ----------- Pick<T,K> -----------------

// interface IEmployee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: IEmployee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.dou@example.com",
//   department: "Engineering",
//   hireDate: new Date("2024-12-01"),
// };

// const displayInfo = (
//   fullEmployeeInfo: IEmployee
// ): Pick<IEmployee, "name" | "email"> => {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// };

// console.log(displayInfo(fullEmployeeInfo));

// ? ----------- Record<K, T> -----------------

// const recordTemperatures = (temps: number[]): Record<string, number> => {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, i) => {
//     temperatureRecord[`day${i + 1}`] = temp;
//   });

//   return temperatureRecord;
// };

// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord);

// ? ----------- Omit<T, K> -----------------

// interface IEmployee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: IEmployee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.dou@example.com",
//   department: "Engineering",
//   hireDate: new Date("2024-12-01"),
// };

// type EmployeeBasicInfo = Omit<IEmployee, "hireDate">;

// const displayInfo = (
//   fullEmployeeInfo: IEmployee
// ): Omit<IEmployee, "hireDate"> => {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//     department: fullEmployeeInfo.department,
//     id: fullEmployeeInfo.id,
//   };
// };

// console.log(displayInfo(fullEmployeeInfo));
