import React, {useEffect, useState} from 'react'
import { BooksContainer } from '../styles/BooksStyle';
import editSvg from '../public/images/edit.svg'
import deleteSvg from '../public/images/delete.svg'
import Button from './Button';
import Form from './Form';

export enum Genre {
    FICTION = 'FICTION',
    MYSTERY = 'MYSTERY',
    ROMANCE = 'ROMANCE',
    SCIENCE_FICTION = 'SCIENCE_FICTION',
    FANTASY = 'FANTASY',
    HORROR = 'HORROR',
    THRILLER = 'THRILLER',
    HISTORICAL_FICTION = 'HISTORICAL_FICTION',
    BIOGRAPHY = 'BIOGRAPHY',
    SELF_HELP = 'SELF_HELP',
    POETRY = 'POETRY',
    DRAMA = 'DRAMA',
    CRIME = 'CRIME',
    ADVENTURE = 'ADVENTURE',
    COMEDY = 'COMEDY',
    ACTION = 'ACTION',
    CHILDREN = 'CHILDREN',
    YOUNG_ADULT = 'YOUNG_ADULT',
    HISTORY = 'HISTORY',
    PHILOSOPHY = 'PHILOSOPHY',
    TRAVEL = 'TRAVEL',
    SCIENCE = 'SCIENCE',
    BUSINESS = 'BUSINESS',
    ART = 'ART',
    COOKING = 'COOKING',
  }


  
type Author ={
    id: Number,
    name: String
}

export type Book = {
    id: Number;
    title: String;
    genre: Genre;
    authors: Author[];
}

type Props = {}

const Books = (props: Props) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [toggleForm, setToggleForm] = useState<Boolean>(false)

    const handleEdit = async () => {
        setToggleForm(true)
    }

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
        {toggleForm? <Form setToggleForm={setToggleForm}></Form>:(<table>
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
                        <Button id={book.id} handleClick={handleEdit}  image={editSvg}/>
                        <Button id={book.id} handleClick={handleEdit} image={editSvg}/>
                        <Button id={book.id} handleClick={handleEdit} image={editSvg}/>
                    </td>
                    
                   </tr>
                   ))}
            </tbody>
        </table>)}
    </BooksContainer>
  )
}

export default Books