module.exports = (req, res, next) => {
  const { name, email, phone, service, message } = req.body;
  
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  
  next();
};
