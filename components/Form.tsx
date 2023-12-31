// Your Form.tsx component
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Book, Genre } from './Books';
import { FormWrapper, Label, Input, Button, Select, CancelButton } from '../styles/FormStyles'; // Import the styled components

interface IFormInput {
  title: string;
  genre: Genre;
  authors: string;
}

type Props = {
  setToggleForm: React.Dispatch<React.SetStateAction<Boolean>>,
  book: Book
};

const formatEnumOption = (option: string) => {
  return option.replace(/_/g, ' ');
};

const Form = (props: Props) => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const authorsArray = data.authors
      .split(',')
      .map((author) => author.trim())
      .filter(Boolean);

    const formData = {
      title: data.title,
      genre: data.genre,
      authors: authorsArray,
    };

    console.log(formData);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Title</Label>
        <Controller
          name="title"
          control={control}
          defaultValue={`${props.book.title}`}
          render={({ field }) => <Input {...field} />}
        />

        <Label htmlFor="genre">Genre</Label>
        <Controller
          name="genre"
          control={control}
          defaultValue={props.book.genre}
          render={({ field }) => (
            <Select {...field}>
              {Object.values(Genre).map((genre) => (
                <option key={genre} value={genre}>
                  {formatEnumOption(genre)}
                </option>
              ))}
            </Select>
          )}
        />

        <Label htmlFor="authors">Authors (Comma-separated)</Label>
        <Controller
          name="authors"
          control={control}
          defaultValue={props.book.authors[0].name}
          render={({ field }) => <Input {...field} />}
        />

        <div style={{display: 'flex'}}>
          <Button type="submit">Submit</Button>
          <CancelButton type="button" onClick={()=> props.setToggleForm(false)}>Cancel</CancelButton>
        </div>
        
      </form>
    </FormWrapper>
  );
};

export default Form;
