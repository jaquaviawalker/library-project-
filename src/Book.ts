/**
 * Represents a book in the library system.
 */
class Book {
  /** The title of the book. */
  public title: string;
  /** The author of the book. */
  public author: string;
  /** The year the book was published. */
  public readonly yearPublished: number;
  /** The ISBN of the book (private). */
  private isbn: string;
  /** The status of the book: 'available' or 'checked-out' (private). */
  private status: 'available' | 'checked-out';

  /** The total number of Book instances created. */
  static bookCount = 0;
  /** The maximum allowed year for publication. */
  static maxYear = 2025;

  /**
   * Validates that the ISBN is a 10 or 13 digit number string.
   */
  static isValidIsbn(isbn: string): boolean {
    return /^[0-9]{10}([0-9]{3})?$/.test(isbn);
  }

  /**
   * Creates a new Book instance.
   * @param title - The title of the book.
   * @param author - The author of the book.
   * @param year - The year the book was published.
   * @param isbn - The ISBN of the book.
   * @throws Error if the year is greater than maxYear or ISBN is invalid.
   * @throws Error is ISBN is not a 10 or 13 digit number
   */
  constructor(title: string, author: string, year: number, isbn: string) {
    if (year > Book.maxYear) {
      throw new Error('Not a valid published year');
    }
    if (!Book.isValidIsbn(isbn)) {
      throw new Error('ISBN must be a 10 or 13 digit number');
    }
    this.title = title;
    this.author = author;
    this.yearPublished = year;
    this.isbn = isbn;
    this.status = 'available';
    Book.bookCount++;
  }

  /**
   * @returns the ISBN of the book.
   */
  public getIsbn(): string {
    return this.isbn;
  }

  /**
   * @returns true if the book is available.
   */
  public isAvailable(): boolean {
    return this.status === 'available';
  }

  /**
   * Checks out the book if it is available.
   * @throws Error if the book is already checked out.
   */
  public checkOut() {
    if (this.status == 'checked-out') {
      throw new Error('This book is already checked out');
    }
    this.status = 'checked-out';
  }

  /**
   * Checks in the book if it is checked out.
   * @throws Error if the book is already checked in.
   */
  public checkIn() {
    if (this.status == 'available') {
      throw new Error('This book is already checked in');
    }
    this.status = 'available';
  }

  /**
   * @returns the age of the book in years.
   */
  public getAge(): number {
    return new Date().getFullYear() - this.yearPublished;
  }
}
