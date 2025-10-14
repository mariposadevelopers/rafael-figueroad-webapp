import React from "react";
import {useNavigate} from 'react-router'

const RateLimited = () => {
  const navigate = useNavigate(); 

  const handleLoginRequest = () => {
    navigate('/home');
  }

  return (
    <div className="bg-[#2121] px-10 w-full rounded-xl">
        <form className="">
          <div>
            <label className="block text-xl font-semibold text-orange-500 mb-3">Email</label>
            <input className="w-full px-4 py-2" type="text" placeholder="email@provider.com" />
          </div>
          <div> 
            <label className="block text-xl font-semibold text-orange-500 mb-3 mt-4">Contraseña</label>
            <input className="w-full px-4 py-2" type="password" placeholder="*********" />
          </div>
          <button onClick={handleLoginRequest} className="block text-xl text-white bg-orange-500 w-full p-2 rounded-xl mt-6">
            Iniciar Sesión
          </button>
        </form>
    </div>
  );
};

export default RateLimited;