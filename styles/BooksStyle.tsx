import  styled  from "styled-components";

export const BooksContainer = styled.div`
    border: 2px solid red;
    margin: 0 12rem;
    display:flex;
    align-items: center;
    th{
        font-size: 4vmin;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: #435D7D;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    td:nth-child(4) {
        background-color: #f2f;
        width: 40rem;
    }
    td {
        border: 2px solid red;
        text-align: left;
        width: 80rem;
      }
`