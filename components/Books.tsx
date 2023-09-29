import React, {useEffect, useState} from 'react'
import { BooksContainer } from '../styles/BooksStyle';
import editSvg from '../public/images/edit.svg'
import deleteSvg from '../public/images/delete.svg'
import Button from './Button';

type Genre =
  | 'FICTION'
  | 'MYSTERY'
  | 'ROMANCE'
  | 'SCIENCE_FICTION'
  | 'FANTASY'
  | 'HORROR'
  | 'THRILLER'
  | 'HISTORICAL_FICTION'
  | 'BIOGRAPHY'
  | 'SELF_HELP'
  | 'POETRY'
  | 'DRAMA'
  | 'CRIME'
  | 'ADVENTURE'
  | 'COMEDY'
  | 'ACTION'
  | 'CHILDREN'
  | 'YOUNG_ADULT'
  | 'HISTORY'
  | 'PHILOSOPHY'
  | 'TRAVEL'
  | 'SCIENCE'
  | 'BUSINESS'
  | 'ART'
  | 'COOKING';

type Author ={
    id: Number,
    name: String
}

type Book = {
    id: Number;
    title: String;
    genre: Genre;
    authors: Author[];
}

type Props = {}

const Books = (props: Props) => {
    const [books, setBooks] = useState<Book[]>([]);

      const handleDelete = async (id:Number) => {
        try{
            const response = await fetch(`http://localhost:8080/api/v1/books/${id}`
            , {
                method: 'DELETE',
        })
            setBooks(books.filter((book,index,arr)=> book.id !== id))
        }catch(error){
            console.error("error deleting books:", error);
        }
    }

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/v1/books"
                , {
                    method: 'GET',
                    headers: {
                      Accept: 'application/json',
                    }
            })
                const data = await response.json();
                setBooks(data);
                console.log(data)
            }catch(error){
                console.error("error fetching books:", error);
            }
        };

        fetchData();
    },
        [])

  return (
    <BooksContainer>
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </tr>
                   {books.map(book =>(
                   <tr key={String(book.id)}>
                    <td>{book.title}</td>
                    <td>{book.authors.map(author=>author.name)}</td>
                    <td>{book.genre}</td>
                    <td>
                        <Button id={book.id} handleClick={handleDelete} image={deleteSvg}/>
                        <Button id={book.id} handleClick={handleDelete} image={editSvg}/>
                    </td>
                    
                   </tr>
                   ))}
            </tbody>
        </table>
    </BooksContainer>
  )
}

export default Books