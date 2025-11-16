// * Problem - 01
type ValueType = string | number | boolean;

const formatValue = (value: ValueType): ValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

// * Problem - 02
const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

// * Problem - 03
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// * Problem - 04
interface BookType {
  title: string;
  rating: number;
}

const filterByRating = (arr: BookType[]): BookType[] => {
  return arr.reduce<BookType[]>((newArr, book) => {
    if (book.rating >= 4.0) {
      newArr.push(book);
    }

    return newArr;
  }, []);
};

// * Problem - 05
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (arr: User[]): User[] => {
  return arr.reduce<User[]>((newArr, user) => {
    if (user.isActive) {
      newArr.push(user);
    }

    return newArr;
  }, []);
};

// * Problem - 06
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (input: Book) => {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
};

// * Problem - 07
const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
  const result: T[] = [];

  const existInResult = (value: T): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (value === result[i]) {
        return true;
      }
    }

    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!existInResult(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!existInResult(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};

// * Problem - 08
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce<number>((total, product) => {
    let productTotal = product.price * product.quantity;

    if (product.discount) {
      const discountAmount = productTotal * (product.discount / 100);
      productTotal -= discountAmount;
    }

    return total + productTotal;
  }, 0);
};
