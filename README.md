# HolisticBlog

This repository is for the backend code that is running using Node.js and Express (typescript). It communicates to a client via REST api. This server connects to a Mongo database hosted on Atlas, the server is using Mongoose as its ORM.

When creating a new user, the password is stored as a salted hash. During signin a JWT token is generated which is sent back to the user. The user must have a valid token in order to make any further requests on the protected route.


## Usage

This server is hosted on [heroku](https://holisticblog.herokuapp.com/)

To try out the features implemented, use Postman or a similar tool. 

1. Sign Up - Enter an email and a password to add a new user. It will not allow you to add an existing email. 

    POST REQUEST - https://holisticblog.herokuapp.com/user/signup

    In the body section select raw and set type to JSON (will be text by default)  and then paste this into the text area of raw. 
    {
	    "email": "naruto@gmail.com",
	    "password": "test123"
    }

2. Sign in - This will check if the username exists and then compare the hash of the password. If credentials are valid then it will generate a jwt token (expiry set to 2 hours) and send it back in the response. Use the token for the remaining endpoints as they are protected.

    POST REQUEST - https://holisticblog.herokuapp.com/user/signin

    In the body section select raw and set type to JSON (will be text by default)  and then paste this into the text area of raw. 
    {
	    "email": "naruto@gmail.com",
	    "password": "test123"
    }

3. Add post - Will add a post. This is a protected route. 

    POST REQUEST - https://holisticblog.herokuapp.com/post/postAdd

    In the body section select raw and set type to JSON (will be text by default)  and then paste this into the text area of raw. 
    {
	    "title": "Test Title",
	    "body": "Lorem ipsum Lorem ipsum"
    }

    Also put the token in the Headers - add a key called Authorization and then add this as its value - Bearer TOKEN

4. Get posts - Will get all posts. This is a protected route.

    GET REQUEST - https://holisticblog.herokuapp.com/post/postList

    Put the token in the Headers - add a key called Authorization and then add this as its value - Bearer TOKEN
