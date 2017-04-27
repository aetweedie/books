var bookSeed = [
  {
    book_id: "1",
    title: "One Piece",
    cover: "https://myanimelist.cdn-dena.com/images/anime/6/73245.jpg",
    description: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha'\s Weekly Shōnen Jump magazine since July 19, 1997, with the chapters collected into eighty-four tankōbon volumes to date.",
    author: "Eiichiro Oda",
    publish: 1997,
     },
  {
    book_id: "2",
    title: "One Punch Man",
    cover: "https://myanimelist.cdn-dena.com/images/anime/12/76049.jpg",
    description: "One-Punch Man is an ongoing Japanese superhero parody webcomic created by an author using the pseudonym One which began publication in early 2009. The series quickly went viral, surpassing 7.9 million hits in June 2012.",
    author: "One",
    publish: 2012,
     },
  {
    book_id: "3",
    title: "Sword Art Online",
    cover: "https://myanimelist.cdn-dena.com/images/anime/11/39717.jpg",
    description: "Sword Art Online is a 2009 Japanese light novel series written by Reki Kawahara and illustrated by Abec. The series takes place in the near future and focuses on various virtual reality MMORPG worlds.",
    author: "Reki Kawahara",
    publish: 2009,
     },
  {
    book_id: "4",
    title: "Tokyo Ghoul",
    cover: "https://myanimelist.cdn-dena.com/images/anime/5/64449.jpg",
    description: "Tokyo Ghoul is a Japanese dark fantasy manga series by Sui Ishida.",
    author: "Sui Ishida",
    publish: 2011,
     },
  {
    book_id: "5",
    title: "Hai to Gensou no Grimgar",
    cover: "https://myanimelist.cdn-dena.com/images/anime/13/77976.jpg",
    description: "Grimgar of Fantasy and Ash is a Japanese light novel series written by Ao Jūmonji and illustrated by Eiri Shirai.",
    author: "Ao Jumonji",
    publish: 2016,
     }
]

var titles = [];

$(document).ready(function(){
  if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(bookSeed));
  }
  var books = JSON.parse(localStorage.getItem('books'));
  for (var i = 0; i < books.length; i++) {
      titles.push('<li class=' + (JSON.stringify(books[i].book_id)) + '>' + (JSON.stringify(books[i].title)) + '</li>');
  }
  $('#list').html(titles.join(''));
  $(document).on('click', 'li', function(e){
    $('h2').remove();
    var currentBook = books[e.currentTarget.className -1];
    $('#poster').attr('src', currentBook.cover);
    $('#title').html('Title: ' + currentBook.title);
    $('#author').html('Author: ' + currentBook.author);
    $('#publish').html('Published: ' + currentBook.publish);
    $('#description').html('Description: ' + currentBook.description);
  })
  $('#submitter').on('click', function(e){
    e.preventDefault();
    var newestBook = {
      book_id: newBook.book_id.value,
      title: newBook.title.value,
      cover: newBook.cover.value,
      description: newBook.description.value,
      author: newBook.author.value,
      publish: newBook.publish.value,
       };
    books.push(newestBook);
    localStorage.setItem('books', JSON.stringify(books));
    window.location.reload();
  });
});
