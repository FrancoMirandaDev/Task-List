import Task from "../models/Task.js";

export const renderTaskForm = (req, res) => res.render("task/new-task");

export const createNewTask = async (req, res) => {
  const { title } = req.body;
  const error = [];
  if (!title) {
    error.push({ text: "Please write a Title" });
  }
  if (error.length > 0) {
    res.render("task/new-task");
  }

  const taskDB = new Task({ title });
  taskDB.user = req.user.id;
  /*console.log(
    `Este es el user id:${taskDB.user} y este es el titulo del task: ${title}`
  );*/
  await taskDB.save();
  req.flash("success_msg", "El task se creo con exito");
  res.redirect("/task");
};

export const renderAllTask = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  /*console.log(`Estos son los tasks:${tasks} y este es el user ${req.user.id}`);
  console.log(tasks);*/
  res.render("task/all-task", { tasks });
};
