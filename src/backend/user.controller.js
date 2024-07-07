const User = require("./user.model");

const postUser = async (request, response) => {
    try {
        // Create a new user based on request body
        await User.create(request.body);

        // Send a success response
        response.send(request.body);
    } catch (error) {
        // Handle any errors
        response.status(500).json({ message: error.message });
    }
};

module.exports = {
    postUser
};
