import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';

export const getUsers = (req, res) => {
  const q =
     "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  const q =
    "SELECT `id`, `username`, `email`, `img` FROM users WHERE id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err) => {
    if (err) return res.status(403).json("Token is not valid!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO users(`username`, `email`, `password`, `img`) VALUES (?)";

    const values = [
      req.body.username,
      req.body.email,
      req.body.img,
      hash
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("User has been created.");
    });
  });
};

export const deleteUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = req.params.id;
    const q = "DELETE FROM users WHERE `id` = ?";

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(403).json("Error!");

      return res.json("users has been deleted!");
    });
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = req.params.id;
    const q =
      "UPDATE users SET `username`=?,`email`=?,`img`=?";

    const values = [req.body.username, req.body.email, req.body.img];

    db.query(q, [...values, userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("User has been updated.");
    });
  });
};