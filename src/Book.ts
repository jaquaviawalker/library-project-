// ...existing code...

class Book {
  public title: string;
  public author: string;
  public readonly yearPublished: number;
  private isbn: string;
  private status: 'available' | 'checked-out';

  static bookCount = 0;
  static maxYear = 2025;
  static isValidIsbn(isbn: string) {
    if (typeof isbn !== 'number') {
      return false;
    }
  }

  constructor(title: string, author: string, year: number, isbn: string) {
    if (year > Book.maxYear) {
      throw new Error('Not a valid published year');
    }

    if (!Book.isValidIsbn) {
      throw new Error('ISBN must be a number');
    }

    this.title = title;
    this.author = author;
    this.yearPublished = year;
    this.isbn = isbn;
    this.status = 'available';
    Book.bookCount++;
  }

  public getIsbn(): void {
    console.log(`ISBN: ${this.isbn}`);
  }

  public isAvailable(): void {
    if (this.status == 'available') {
      console.log('True');
    }
  }
}
