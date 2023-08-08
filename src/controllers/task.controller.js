import Task from "../models/Task.js";

export const renderTaskForm = (req, res) => res.render("task/new-task");

export const createNewTask = async (req, res) => {
  const { title } = req.body;
  let error = [];
  if (!title) {
    error.push({ text: "Please write a Title" });
  }
  if (error.length > 0) {
    res.render("task/new-task", {
      title,
    });
  }

  const taskDB = new Task({ title });
  taskDB.user = req.user.id;
  await taskDB.save();
  req.flash("success_msg", "Task Created Sucessfully");
  res.redirect("/task");
};

export const renderAllTask = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("task/all-task", { tasks });
};

export const renderTaskEditForm = async (req, res) => {
  const task = await Task.findById(req.params.id).lean();
  if (task.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/task");
  }
  res.render("task/edit-task", { task });
};

export const updateTask = async (req, res) => {
  const { title } = req.body;
  console.log(Task.findById(req.params.id));
  await Task.findByIdAndUpdate(req.params.id, { title });
  req.flash("success_msg", "Task Updated Sucessfully");
  res.redirect("/task");
};

export const deleteTask = async (req, res) => {
  console.log(Task.findById(req.params.id));
  await Task.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Task Deleted Sucessfully");
  res.redirect("/task");
};
