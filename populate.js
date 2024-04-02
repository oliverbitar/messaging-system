conn = new Mongo();
db = conn.getDB("communication");

db.users.insertMany([
    { id:1, full_name: 'Oliver Bitar', age: 25},
    { id:2, full_name: 'John Snow', age: 25},
    { id:3, full_name: 'Walter White', age: 25},
    { id:4, full_name: 'Lionel Messi', age: 25},
]);

db.user_chats.insertMany([
    { id:1, messager_1_id: 1, messager_2_id: 2, last_message: 'How are you?', date_modified: '2024-04-01 16:52:00', date_created: '2000-01-01 00:00:00'},
    { id:2, messager_1_id: 1, messager_2_id: 3, last_message: '', date_modified: '2024-04-01 12:33:00', date_created: '2000-01-01 00:00:00'},
    { id:3, messager_1_id: 1, messager_2_id: 4, last_message: '', date_modified: '2024-04-01 21:11:00', date_created: '2000-01-01 00:00:00'}
]);

db.chat_messages.insertMany([
    { chat_id:1, sender_id: 1, text: 'Hello', date_created: '2024-04-01 16:50:00'},
    { chat_id:1, sender_id: 2, text: 'Hi', date_created: '2024-04-01 16:51:00'},
    { chat_id:1, sender_id: 1, text: 'How are you?', date_created: '2024-04-01 16:52:00'},
]);
