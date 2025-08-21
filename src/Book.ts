class Book {
  title: string;
  author: string;
  yearPublished: number;
  private isbn: number;
  static bookCount = 0;

  constructor(title: string, author: string, year: number, isbn: number) {
    this.title = title;
    this.author = author;
    this.yearPublished = year;
    this.isbn = isbn;
    Book.bookCount++;
  }

  public getIsbn(): void {
    console.log(`ISBN: ${this.isbn}`);
  }
}
