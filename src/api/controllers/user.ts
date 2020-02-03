import { NextFunction } from "express";
import User from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const userAdd = (req : any, res : any, next : NextFunction) => {
    //Start 
    User.find({ email: req.body.email })
    .then(user => {
      if (user.length >= 1) {
        return res.status(418).json({
          message: "User already exists you teapot!"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(req.body.password);
            return res.status(418).json({
              error: err 
            });
          } else {
            const user = new User({
              email: req.body.email,
              password: hash,
              role: "user"
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
    //End
};


const userLogin = (req : any, res : any, next : NextFunction) => {
    User.findOne({ email: req.body.email })
      .then((user: any) => {
        if (user.length < 1) {
          return res.status(401).json({
            message: "Login failed"
          });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Login failed"
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: user.email,
                userId: user._id
              },
              "fJs88TS",
              {
                expiresIn: "2h"
              }
            );
            return res.status(200).json({
              message: "Login succesful",
              token: token
            });
          }
          res.status(401).json({
            message: "Login failed"
          });
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

export default {userAdd, userLogin};