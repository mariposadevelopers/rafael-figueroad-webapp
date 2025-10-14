import React from 'react'
import Navbar from '../components/Navbar.jsx'
import PostPreviewCard from '../components/PostPreviewCard.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DecorationSquaresItem from '../components/DecorationSquaresItem.jsx'
import ChannelCard from '../components/ChannelCard.jsx'
const HomePage = () => {
    const [posts, setPosts] = useState(false); 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/posts");
                setPosts(res.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);

  
    return (
    <div data-theme="light" className='min-h-screen bg-base-100'>
        <Navbar/>
        <div class='bg-[#f6f6f6f6] p-5 grid grid-cols-4 gap-x-3 gap-y-3 min-h-[500px]'>
            <div class='rounded-lg row-span-3 col-span-1'>
                <div className='h-full flex items-center justify-center'>
                    <DecorationSquaresItem/>
                </div>
            </div>
            <div class='website-welcome-message ml-10 md:ml-5 h-[500px] flex justify-center items-center col-span-3'>
                <div>
                    <h6 className='text-2xl font-clash font-semibold lg:text-5xl text-black'>DIVULGACIÓN CIENTÍFICA PARA TODOS</h6>
                    <h6 className='font-clash text-lg lg:text-3xl'>Un espacio para ti y tu curiosidad.</h6>
                    <div className='btn bg-[#FF9D00] font-clash text-sm text-white mt-5 w-full'>Ver Publicaciones</div>
                </div>
            </div>
        </div>
        <div className='recent-posts py-1 m-3 lg:m-10'>
            <div className='mx-auto max-w-6xl px-5 mt-6'>
                <h2 className='font-clash text-2xl sm:text-3xl font-semibold'>
                    Publicaciones Recientes 
                </h2>
            </div>
            <div className="mx-auto max-w-6xl p-4 mt-2">
                {posts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <PostPreviewCard key={post._id} post={post} />
                    ))}
                </div>
                )} 
            </div>
        </div>

        <div className='channels py-1 m-3 lg:m-10'>
            <div className='mx-auto max-w-6xl px-5 mt-6'>            
                <h2 className='font-clash text-2xl sm:text-3xl font-semibold'>
                    Canales
                </h2>
            </div>    
            <div className="mx-auto max-w-6xl p-4 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ChannelCard channelName={"Senderos de ciencia"} channelUrl={"https://www.youtube.com/@SenderosdeCiencia"}/>
                    <ChannelCard channelName={"Senderos del terror"} channelUrl={"https://www.youtube.com/@Senderosdeterror-u6k"}/>
                    <ChannelCard channelName={"Senderos de la mente de un ingeniero"} channelUrl={"https://www.youtube.com/@SenderosdelaMentedeunIngen-x8n"}/>
                    <ChannelCard channelName={"Senderos del ayer"} channelUrl={"https://www.youtube.com/@SenderosdelAyer"}/>

                </div>
            </div>            
        </div>  
    </div>
  )
}

export default HomePage
