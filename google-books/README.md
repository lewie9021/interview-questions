# Google Books

### Description

Fetch the first 50 programming books from the Google Book API.

### Getting Started

- URL: `https://www.googleapis.com/books/v1/volumes?q={search query}&startIndex={offset books}`.
  - `q` is used to search books.
  - `startIndex` is an optional parameter for dealing with paginated requests.
  - Note: The default value of startIndex is 0 and each request returns 10 books.

### Tasks

**Top 10 Rated Books**

Log to terminal an array of the top 10 rated books in the following format:

```
[
	{
		title: "<item.volumeInfo.title>",
		averageRating: "<item.volumeInfo.averageRating>"
	},
	...9 more books
]
```

**Top 5 Cheapest Books (Cost Per Page)**

Log to terminal an array of the top 5 cheapest books, based on cost per page in the following format:

```
[
	{
		title: "<item.volumeInfo.title>",
		costPerPage: "<item.costPerPage>"
	},
	...4 more books
]
```

Note: You will need to calculate cost per page using `item.saleInfo.listPrice.amount` and `item.volumeInfo.pageCount`.

**Books by Publisher**

Log to terminal an object with publishers as the keys and an array of books they've published, in the following format:

```
{
	"<item.volumeInfo.publisher>": [
		{
			title: "<item.volumeInfo.title>",
			publishedDate: "<item.volumeInfo.publishedDate>"
		}
	],
	...
}
```
