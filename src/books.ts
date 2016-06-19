function getAllBooks() {
    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available:false, category: Category.Fiction},
        {id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];
    
    return books;
}

function getFirstAvailable(books) {
    
    return books.find(book => book.available);
   
}

enum Category { Biography, Poetry, Fiction, History, Children};

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {
    
    let result: Array<string> = getAllBooks().reduce(function(result,current,index,array) {
        if(current.category === categoryFilter) {
            result.push(current.title);
        }
        return result;
    }, []);
    
    return result;
}

function logBookTitles(titles: string[]): void {
    titles.forEach((current) => console.log(current));
}

function getBookById(id: number) {
    return getAllBooks().find(book => book.id === id);
}

function createCustomerId(name:string,id:number):string {
    return name + id;
}

//************************************************

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);

console.log(getBookById(4));