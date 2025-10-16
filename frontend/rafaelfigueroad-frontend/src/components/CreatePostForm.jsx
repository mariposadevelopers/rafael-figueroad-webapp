import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
const CreatePostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("Título:", title);
        console.log("Contenido:", content);

        if(!title.trim() || !content) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }
        
        try {
            const res = axios.post("http://localhost:5001/api/posts", {
                title,
                content
            });
            toast.success("Publicación creada con éxito."); 

        } catch (error) {
            console.error("Error creating post:", error);
            toast.error("Error al crear la publicación. Inténtalo de nuevo.");
        }

        setTitle('');
        setContent('');
    }   

  return (
    <div className=" px-10 w-full rounded-xl">
        <form onSubmit={handleSubmit} className="">
          <div className='form-control'>
            <label className="block text-xl font-semibold text-orange-500 mb-3">Título</label>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} className=" bg-[#2121] w-full px-4 py-2" type="text" />
          </div>
          <div className='form-control'> 
            <label className="block text-xl font-semibold text-orange-500 mb-3 mt-4">Contenido</label>
            <textarea value={content} onChange={(e) => {setContent(e.target.value)}} className="bg-[#2121] w-full px-4 py-2" />
          </div>
          <button  type='submit' className="block text-xl text-white bg-orange-500 w-full p-2 rounded-xl mt-6">
            Crear Publicación
          </button>
        </form>
    </div>
  )
}

export default CreatePostForm
