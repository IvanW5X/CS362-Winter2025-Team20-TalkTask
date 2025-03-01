/********************************************************************
 * File Name: auth-middleware.js
 * Date: 2/28/2025
 * Description: Auth0 setup for authentication logic
 * Author(s): CS 362-Team 20
 ********************************************************************/

import { auth } from "express-oauth2-jwt-bearer";
import { AUTH0_AUDIENCE, AUTH0_DOMAIN } from "../utils/variables.js";

const authOptions = {
    issuerBaseURL: AUTH0_DOMAIN,
    audience: AUTH0_AUDIENCE,
    algorithms: ["RS256"],
};

const checkJwt = auth(authOptions);

export default checkJwt;
