// server/controllers/userController.js

// Sample data (replace with DB later)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Alice Smith', email: 'alice@example.com' },
];

// GET /api/users
const getUsers = (req, res) => {
    res.status(200).json(users);
};

// GET /api/users/:id
const getUserById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
};

// POST /api/users (create new user)
const createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
};
