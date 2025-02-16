import { useState } from 'react';

function Bookshelf() {
    const initialState = { title: "", author: "" };
    const [books, setBooks] = useState([
        { title: "Anne of Green Gables", author: "L.M. Montgomery" },
        { title: "Little Women", author: "Louisa May Alcott" },
    ]);
    const [newBook, setNewBook] = useState(initialState);
    const [error, setError] = useState("");

    function handleInputChange(event) {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!newBook.title.trim() || !newBook.author.trim()) {
            setError("Both fields are needed to add a book.");
            return;
        }
        setBooks([...books, newBook]);
        setNewBook(initialState);
        setError("");
    }

    return (
        <div className="bookshelfWrapper">
            <header>
                <p>A Safe Place </p>
            </header>

            <div className="mainContent">
                <div className="formSection">
                    <h3>🌷 Add a New Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Book Title</label>
                        <input 
                            type="text" id="title" name="title" 
                            onChange={handleInputChange} value={newBook.title} 
                            placeholder="e.g. Pride and Prejudice"
                        />

                        <label htmlFor="author">Author</label>
                        <input 
                            type="text" id="author" name="author" 
                            onChange={handleInputChange} value={newBook.author} 
                            placeholder="e.g. Jane Austen"
                        />

                        {error && <p className="errorMessage">{error}</p>}
                        <button type="submit">📖 Add to Bookshelf</button>
                    </form>
                </div>

                <div className="bookshelfDisplay">
                    <h3>📜 My Little Library</h3>
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <div className="bookCard" key={index}>
                                <h2>{book.title}</h2>
                                <p>by {book.author}</p>
                            </div>
                        ))
                    ) : (
                        <p className="emptyMessage">No books yet… start your collection! 📚</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Bookshelf;
