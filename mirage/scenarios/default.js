export default function (server) {
  const authors = server.createList('author', 3);

  for (const author of authors) {
    let books = server.createList('book', 3, { author });

    for (const book of books) {
      server.createList('review', 5, { book });
    }
  }
}
