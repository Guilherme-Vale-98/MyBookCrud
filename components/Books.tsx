import React, {useEffect, useState} from 'react'
import { BooksContainer } from '../styles/BooksStyle';
import editSvg from '../public/images/edit.svg'
import deleteSvg from '../public/images/delete.svg'
import Button from './Button';
import Form from './Form';
import Spinner from './Spinner';

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
    id: number;
    title: String;
    genre: Genre;
    authors: Author[];
}

type Props = {}

const Books = (props: Props) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [toggleForm, setToggleForm] = useState<Boolean>(false);
    const [selectedid, setSelectedid] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleEdit = async (id: number) => {
        setToggleForm(true);
        setSelectedid(id);
    }

      const handleDelete = async (id:number) => {
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
            setIsLoading(true);
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
                setIsLoading(false);
                console.log(data);
            }catch(error){
                setErrorMessage("Unable to get book list!");
                setIsLoading(false);
            }
        };

        fetchData();
    },
        [])

    const renderBooks = ()=>{
        if(isLoading){
            return (<Spinner></Spinner>)
        }

        if(errorMessage){
            return (<h2>{errorMessage}</h2>)
        }

        return(
           <BooksContainer><table>
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
                    <td>{book.authors.map(author => author.name + ', ' )}</td>
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
        </table>
        </BooksContainer>
        )
    }

  return ( 
    <>  
        {renderBooks()}
    </>
  )
}

export default Books