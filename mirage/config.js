import faker from 'faker';

export default function () {
  faker.seed(123);
  this.timing = 1500;

  this.get('/authors');
  this.get('/authors/:id');
  this.get('/books');
  this.get('/books/:id');
  this.get('/reviews', (schema, { queryParams }) => {
    let { book, rating } = queryParams;
    rating = Number(rating);

    return schema.reviews.where((review) => {
      return review.bookId === book && review.rating >= rating;
    });
  });
}
