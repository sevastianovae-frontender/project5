import React from "react";
import { NewPost } from './../../components/NewPost/NewPost';
import { useNavigate } from 'react-router-dom';


export const NewPostPage = () => {
  const navigate = useNavigate()
  return (
        <NewPost title="Новый пост" >
        </NewPost>
  );
};