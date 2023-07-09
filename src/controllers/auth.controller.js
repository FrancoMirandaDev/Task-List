export const renderSignUpForm = (req, res) =>
  res.send("Rendererizado del Registro").end;

export const signup = (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    errors.push({ text: "Password do not match." });
  }
};
