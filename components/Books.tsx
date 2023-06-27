import React, {useEffect, useState} from 'react'

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
    author: Author[];
}

type Props = {}

const Books = (props: Props) => {
    const [books, setBooks] = useState<Book[]>([]);

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
    <div>
       {books.map(book => <div>{book.title}</div>)}
    </div>
    
  )
}

export default Books