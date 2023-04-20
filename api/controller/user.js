import { db } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import randtoken from "rand-token";

export const getUsers = (req, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  const q = "SELECT `id`, `username`, `email`, `img` FROM users WHERE id = ? ";

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

    const values = [req.body.username, req.body.email, req.body.img, hash];

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
    const q = "UPDATE users SET `username`=?,`email`=?,`img`=? WHERE id = ? ";

    const values = [req.body.username, req.body.email, req.body.img];

    db.query(q, [...values, userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("User has been updated.");
    });
  });
};
export const resetPassword = (req, res) => {
  const email = req.body.email;
  const q = "SELECT * FROM users WHERE `email` = '" + email + "'";

  db.query(q, [email], (err, result) => {
    if (err) return res.status(500).json(err);
  });
  console.log("email is");
  console.log(email);

  if (email) {
    var type = "";
    var msg = "";
    var token = randtoken.generate(20);

    var sent = sendEmail(email, token);

    console.log(token);

    if (sent != "0") {
      const q = "UPDATE users SET `token`= ? WHERE `email` = '" + email + "'";

      db.query(q, [token, email], (err, info) => {
        // if (err) return res.json(err);
        // return res.json("Error.");
        if (err) {
          console.log(err);
        }
      });

      type = "success";
      msg = "The reset password link has been sent to your email address";
    } else {
      console.log("Error Sent");
      type = "error";
      msg = "Something goes to wrong. Please try again";
    }
  } else {
    console.log("Invaild Email");
    type = "error";
    msg = "The Email is not registered with us";
  }
  req.flash(type, msg);
  res.redirect("/");
};

//Update the password
export const updatePassword = (req, res) => {
  var token = req.body.token;
  var password = req.body.password;

  const q = "SELECT * FROM users WHERE token = '" + token + "'";

  db.query(q, function (err, result) {
    var type = "";
    var msg = "";

    if (result.length > 0) {
      var saltRounds = 10;

      // var hash = bcrypt.hash(password, saltRounds);

      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          var data = {
            password: hash,
          };

          const q1 =
            'UPDATE user SET ? WHERE email = "' + result[0].email + '" ';

          db.query(q1, data, function (err, data) {
            if (err) return res.status(500).json(err);
          });
        });
      });
      type = "success";
      msg = "Your password has been updated successfully";
    } else {
      console.log("err");
      type = "success";
      msg = "Invalid Link";
    }
    req.flash(type, msg);
    res.redirect("/");
  });
};

//send email
function sendEmail(email, token) {
  var email = email;
  //var email1 = "q.long23617@gmail.com";
  var token = token;

  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "q.long1717@gmail.com",
      pass: "tmzalaoxbrzurnua",
    },
  });

  var mailOptions = {
    from: "q.long1717@gmail.com",
    to: email,
    subject: "Reset Password Link from PhucLongHuyMinh.com",
    html:
      '<p>You requested for reset password, kindly use this <a href="http://localhost:3000/ResetPassword?token=' +
      token +
      '">link</a> to reset your password</p>',
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(1);
      console.log(error);
    } else {
      console.log(info);
      console.log(0);
      return 0;
    }
  });
}
