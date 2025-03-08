/********************************************************************
 * File Name: filter-sort.jsx
 * Date: 2/26/2025
 * Description: React file for filtering and sorting tasks
 * Author(s): CS 362-Team 20
 ********************************************************************/

//icons
import { IoClose } from "react-icons/io5";

//react and backend
import React, { useState, useEffect } from "react";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";
import { VITE_BACKEND_URL } from "../../../../utils/variables.js";
import { useAuth } from "../../../../contexts/authContext.jsx";


export const FilterSort = ({onClose})=>{
    const { user, isAuthenticated, accessToken } = useAuth();
    const queryClient = useQueryClient();


    const handleSubmit = () =>{
        onClose();
    }
    return(
        <>
              <div className="z-[10001] fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
                <form
                  className="relative border-3 flex flex-col w-[900px] h-[700px] bg-gray-200 rounded-3xl items-center overflow-x-auto"
                  onSubmit={handleSubmit}
                >
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
                    onClick={onClose}
                    type="button"
                    >
                    <IoClose className="cursor-pointer" />
                </button>
                  
                </form>
              </div>
            </>
    )
}