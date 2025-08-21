import { Book } from './Book.js';

class Library {
  private books: Map<string, Book>;
  private loans: Map<string, number>;

  public static libraryName = 'Downtown Federal';

  /**
   * Initializes empty books
   * Initializes empty loans
   */
  constructor() {
    this.books = new Map();
    this.loans = new Map();
  }

  /**
   * Adds a new book to the library (keyed by ISBN).
   * @param book - The book to add.
   * @throws Error if a book with the same ISBN already exists in the library.
   */
  public addBook(book: Book): void {
    if (this.books.has(book.getIsbn())) {
      throw new Error(
        `A book with ISBN ${book.getIsbn()} already exists in the library.`
      );
    }
    this.books.set(book.getIsbn(), book);
  }
  /**
   * Removes a book from library.
   * @param isbn - The book to remove.
   * @throws Error if a book is out on a lon.
   */
  public removeBook(isbn: string): boolean {
    return this.books.delete(isbn);
  }

  public findByIsbn(isbn: string): string {
    const book = this.books.get(isbn);
    if (book) {
      return book.getTitle(); // or any string property of Book
    }
    return `Book with ISBN ${isbn} not found.`;
  }

  public findByTitle(query: string): Book[] {
    const results: Book[] = [];
    for (const book of this.books.values()) {
      if (book.getTitle().toLowerCase().includes(query.toLowerCase())) {
        results.push(book);
      }
    }
    return results;
  }

  public listAllBooks(): Book[] {
    return Array.from(this.books.values());
  }
}
