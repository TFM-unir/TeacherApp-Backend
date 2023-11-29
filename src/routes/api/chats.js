const router = require('express').Router();
const ChatController = require('../../controllers/chats.controllets');

//GET
router.get('/', ChatController.getAllChats);
router.get('/:id', ChatController.getChatById);
router.get('/teacher/:teacherId', ChatController.getChatsByTeacherId);
router.get('/user/:userId', ChatController.getChatsByUserId);
router.get('/user/:userId/teacher/:teacherId', ChatController.getChatByUserIdAndTeacherId);
router.get('/teacher/:teacherId/boolean/:boolean', ChatController.getChatsByTeacherIdAndBoolean);
router.get('/user/:userId/boolean/:boolean', ChatController.getChatsByUserIdAndBoolean);
router.get('/user/:userId/teacher/:teacherId/boolean/:boolean', ChatController.getChatByUserIdAndTeacherIdAndBoolean);

//POST
router.post('/', ChatController.createChat);

//PUT
router.put('/:id', ChatController.updateChatById);

//DELETE
router.delete('/:id', ChatController.deleteChatById);
router.delete('/teacher/:teacherId/user/:userId', ChatController.deleteChatByUserIdAndTeacherId);
router.delete('/teacher/:teacherId/user/:userId/boolean/:boolean', ChatController.deleteChatByUserIdAndTeacherIdAndBoolean);

module.exports = router;