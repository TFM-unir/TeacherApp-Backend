const ChatModel = require('../models/chat.model');

// Obtiene todos los chats disponibles
const getAllChats = async (req, res) => {
    try {
        const [chats] = await ChatModel.selectAllChats();
        res.json(chats);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// Obtiene un chat por su ID específico
const getChatById = async (req, res) => {
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
const updateChatById = async (req, res) => {
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
    updateChatById,
    deleteChatById,
    deleteChatByUserIdAndTeacherId,
    deleteChatByUserIdAndTeacherIdAndBoolean
};
