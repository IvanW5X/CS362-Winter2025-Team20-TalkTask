/********************************************************************
 * File Name: utitlities.js
 * Date: 1/26/2025
 * Description: Utility functions for frontend components
 * Author(s): CS 362-Team 20
 ********************************************************************/

// Return URL from assets folder given a relative path
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};
