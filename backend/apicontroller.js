// backend/controllers/apiController.js
exports.getData = (req, res) => {
   res.json({ message: 'Hello from the backend!', data: [1, 2, 3, 4] });
};