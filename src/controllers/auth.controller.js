export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = (req, res) => {
  const { name } = req.body;
  console.log("este es el :", name);
  req.flash("success_msg", "You are registered.");
  return res.redirect("/");
};
