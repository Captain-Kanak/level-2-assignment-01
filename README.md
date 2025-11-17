# Interface আর Type এর মধ্যে পার্থক্য কী?

TypeScript-এ interface আর type দুটিই object-এর structure ডিফাইন করতে ব্যবহৃত হয়। তবে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

## Interface
- শুধুমাত্র object-এর structure বর্ণনা করতে ব্যবহৃত হয়।
- একই নামের একাধিক interface ডিক্লেয়ার করলে TypeScript এগুলো merge করে।
- Class এর সাথে implement করা যায়।

## Type
- Object ছাড়াও union, intersection, function, primitive টাইপ সবকিছু define করতে পারে।
- একই নামে দুইটা type তৈরি করা যায় না (redeclaration error দেয়)।
- Advanced টাইপ তৈরি করতে খুব শক্তিশালী।

---

# keyof কীওয়ার্ডের ব্যবহার কী?

keyof কোনো object type-এর key গুলোকে string literal union হিসেবে রিটার্ন করে।

type User = {
  name: string;
  age: number;
  email: string;
};

// keyof User >>> "name" | "age" | "email"

---

# any, unknown, আর never এর পার্থক্য কী?

## any
- যেকোনো টাইপ হতে পারে।
- TypeScript টাইপ চেক করা বন্ধ করে দেয়।
- Unsafe টাইপ।

let a: any = 10;
a = "text";
a = true;

## unknown
- যেকোনো কিছু রাখা যায়, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হয়।
- এটি নিরাপদ any এর বিকল্প।

let x: unknown = "hello";

// console.log(x.toUpperCase()); // error

if (typeof x === "string") {
  console.log(x.toUpperCase()); // allowed
}

## never
- এমন পরিস্থিতির টাইপ যা কখনো ঘটে না।
- যে ফাংশন কখনো return করে না।

function fail(message: string): never {
  throw new Error(message);
}

# enum কেন ব্যবহার করা হয়?

TypeScript-এ enum (Enumeration) ব্যবহার করা হয় যখন একটি নির্দিষ্ট মানের সেট বারবার ব্যবহার করতে হয়।
— যেমন user roles, order status, directions ইত্যাদি।

## enum-এর সুবিধা:
- কোড আরও readable এবং structured হয়।
- Hard-coded string ব্যবহার করার দরকার নেই।
- ভুল string বা number ব্যবহারের সম্ভাবনা কমে।
- একই জায়গায় সব মান ডিফাইন করা থাকে, maintain করা সহজ।
- IDE auto-completion সাপোর্ট দেয়।
- বড় প্রোজেক্টে readability এবং maintainability অনেক বাড়ে।

Numeric Enum (ডিফল্ট)
Numeric enum-এ মান স্বয়ংক্রিয়ভাবে 0 থেকে শুরু হয়।

enum Status {
  Pending,
  Approved,
  Rejected
}

// console.log(Status.Pending); // 0
// console.log(Status[1]); // "Approved"

String Enum
String enum-এ প্রতিটি মান অবশ্যই string হতে হবে।

enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

// console.log(Roles.Admin); // "ADMIN"

# Union এবং Intersection টাইপের উদাহরণ
## Union Type (this OR that)
let id: string | number;

id = "A123";
id = 100;

## Intersection Type (this AND that)
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Rahim",
  salary: 50000,
};
