const ChatModel = require('../models/chat.model');

// Obtiene todos los chats disponibles
const getAllChats = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get all Chats.'
    try {
        const [chats] = await ChatModel.selectAllChats();
        res.json(chats);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene un chat por su ID específico
const getChatById = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get a Chat.'
    const { id } = req.params;
    try {
        const [chat] = await ChatModel.selectChatById(id);
        res.json(chat[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene chats asociados a un profesor mediante su ID
const getChatsByTeacherId = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get all Chats by teacher.'
    const { teacherId } = req.params;
    try {
        const [chats] = await ChatModel.selectChatsByTeacherId(teacherId);
        res.json(chats);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene chats asociados a un usuario mediante su ID
const getChatsByUserId = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get all Chats by users.'
    const { userId } = req.params;
    try {
        const [chats] = await ChatModel.selectChatsByUserId(userId);
        res.json(chats);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene un chat mediante el ID de un usuario y un profesor
const getChatByUserIdAndTeacherId = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get a Chat.'
    const { teacherId, userId } = req.params;
    try {
        const [chat] = await ChatModel.selectChatByUserIdAndTeacherId(teacherId, userId);
        res.json(chat[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene chats de un profesor según un valor booleano
const getChatsByTeacherIdAndBoolean = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get a Chat.'
    const { teacherId, boolean } = req.params;
    try {
        const [chats] = await ChatModel.selectChatsByTeacherIdAndBoolean(teacherId, boolean);
        res.json(chats);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene chats de un usuario según un valor booleano
const getChatsByUserIdAndBoolean = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get a Chat.'
    const { userId, boolean } = req.params;
    try {
        const [chats] = await ChatModel.selectChatsByUserIdAndBoolean(userId, boolean);
        res.json(chats);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene un chat mediante el ID de un usuario, un profesor y un valor booleano
const getChatByUserIdAndTeacherIdAndBoolean = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to get a Chat.'
    const { teacherId, userId, boolean } = req.params;
    try {
        const [chat] = await ChatModel.selectChatByUserIdAndTeacherIdAndBoolean(teacherId, userId, boolean);
        res.json(chat[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Crea un nuevo chat con la información proporcionada
const createChat = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to create a Chat.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Chat information.',
            required: true,
            schema: { $ref: "#/definitions/Chats" }
    } */
    const { message, boolean_teacher, userId, teacherId } = req.body;
    try {
        const [result] = await ChatModel.insertChat({ message, boolean_teacher, userId, teacherId });
        const [chat] = await ChatModel.selectChatById(result.insertId);
        res.json(chat[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Actualiza un chat por su ID con el nuevo mensaje proporcionado
const updateChat = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to update a Chat.'
    /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Chat information.',
            required: true,
            schema: { $ref: "#/definitions/Chats" }
    } */
    const { id } = req.params;
    const { message } = req.body;
    try {
        const [result] = await ChatModel.updateChatById(id, message);
        const [chat] = await ChatModel.selectChatById(id);
        res.json(chat[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Elimina un chat por su ID
const deleteChatById = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to delete a Chat.'
    const { id } = req.params;
    try {
        const [result] = await ChatModel.deleteChatById(id);
        res.json({ message: 'Chat deleted successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Elimina un chat mediante el ID de un usuario y un profesor
const deleteChatByUserIdAndTeacherId = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to delete a Chat.'
    const { teacherId, userId } = req.params;
    try {
        const [result] = await ChatModel.deleteChatByUserIdAndTeacherId(teacherId, userId);
        res.json({ message: 'Chats deleted successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Elimina un chat mediante el ID de un usuario, un profesor y un valor booleano
const deleteChatByUserIdAndTeacherIdAndBoolean = async (req, res) => {
    // #swagger.tags = ['Chats']
    // #swagger.description = 'Endpoint to delete a Chat.'
    const { teacherId, userId, boolean } = req.params;
    try {
        const [result] = await ChatModel.deleteChatByUserIdAndTeacherIdAndBoolean(teacherId, userId, boolean);
        res.json({ message: 'Chats deleted successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = {
    getAllChats,
    getChatById,
    getChatsByTeacherId,
    getChatsByUserId,
    getChatByUserIdAndTeacherId,
    getChatsByTeacherIdAndBoolean,
    getChatsByUserIdAndBoolean,
    getChatByUserIdAndTeacherIdAndBoolean,
    createChat,
    updateChat,
    deleteChatById,
    deleteChatByUserIdAndTeacherId,
    deleteChatByUserIdAndTeacherIdAndBoolean
};
