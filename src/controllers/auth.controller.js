import User from "../models/User.js";
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  let errors = [];

  //errores varios
  if (password !== confirm_password) {
    errors.push("Diferentes Password");
  }
  if (password.length < 4) {
    errors.push("Minimum 4 characters");
  }
  if (errors.length > 0) {
    return res.render("auth/signup", {
      name,
      email,
      password,
      confirm_password,
      errors,
    });
  }

  //Verificamos el email en la base de datos
  const user = await User.findOne({ email });
  if (user) {
    req.flash("error_msg", "El Usuario ya Existe");
    return res.redirect("/auth/signup");
  }

  //Guardamos el User en la base de datos
  const userDB = new User({ name, email, password });
  userDB.password = await userDB.encryptPassword(password);
  await userDB.save();
  req.flash("success_msg", "You are registered.");
  /*console.log(
    `The name is : ${userDB.name} and email is : ${userDB.email} and password is ${userDB.password} and this is ${confirm_password}`
  );*/
  return res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) => res.render("auth/signin");

//Verificamos el login con passport
export const signin = passport.authenticate("local", {
  successRedirect: "/task",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/auth/signin");
  });
};
