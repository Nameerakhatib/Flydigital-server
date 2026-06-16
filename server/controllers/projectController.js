const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const projects = await Project.find(filter);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
