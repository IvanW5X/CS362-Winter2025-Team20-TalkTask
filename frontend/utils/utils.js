/********************************************************************
 * File Name: utils.js
 * Date: 2/26/2025
 * Description: JS file for short utility functions
 * Author(s): CS 362-Team 20
 ********************************************************************/

export const getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};
