export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = (req, res) => {
  const { name } = req.body;
  let error = [];

  req.flash("success_msg", "You are registered.");
  console.log("The name is : ", name);
  return res.redirect("/auth/signup");
};
