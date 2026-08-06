export interface Book {
    id: number;
    title: string;
    author: string;
}

export let books: Book[] = [
    {
      id: 1,
      title: "Node.js Basics",
      author: "John Smith"
    },
    {
      id: 2,
      title: "Learning TypeScript",
      author: "Jane Doe"
    }
];