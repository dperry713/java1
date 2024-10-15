// Constructor function for Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  
  // Method to display book information
  Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
  };
  
  // Array to store book objects
  const library = [];
  
  // Function to add new books
  function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
  }
  
  // Function to search for books by title or author
  function searchBooks(query) {
    return library.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  // Function to filter books with more than 100 pages
  function filterLargeBooks() {
    return library.filter(book => book.pages > 100);
  }
  
  // Function to format book information
  function formatBookInfo() {
    return library.map(book => ({
      title: `Title: ${book.title}`,
      author: `Author: ${book.author}`,
      pages: book.pages
    }));
  }
  
  // Example usage
  addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
  addBook("To Kill a Mockingbird", "Harper Lee", 281);
  addBook("1984", "George Orwell", 328);
  addBook("The Catcher in the Rye", "J.D. Salinger", 234);
  
  console.log("All books:");
  library.forEach(book => console.log(book.displayInfo()));
  
  console.log("\nSearch results for 'the':");
  const searchResults = searchBooks("the");
  searchResults.forEach(book => console.log(book.displayInfo()));
  
  console.log("\nBooks with more than 100 pages:");
  const largeBooks = filterLargeBooks();
  largeBooks.forEach(book => console.log(book.displayInfo()));
  
  console.log("\nFormatted book information:");
  const formattedBooks = formatBookInfo();
  console.log(formattedBooks);
  