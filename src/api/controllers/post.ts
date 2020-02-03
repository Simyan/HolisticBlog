import { NextFunction } from "express";
import Post from '../models/post';

const postAdd = (req : any, res : any, next : NextFunction) => {
    //Start 
    const post = new Post ({
       title: req.body.title,
       body: req.body.body,
     //  author: req.body.user,
       createdOn: Date.now() 
    });
    post
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Post created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
    //End
};

const postList = (req : any, res : any, next : NextFunction) => {
    Post.find()
    .then(data => {
      res.status(200).json({data});
    })
    .catch(err => {
      res.status(500).json({
        error: err + "(While fetching all posts)"
      });
    });
};




export default {postAdd, postList};