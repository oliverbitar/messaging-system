# messaging-system

# requirements
For this project, all you have to do 
is have docker installed

# to start server
```
docker compose up --build
```

# api calls:
http://localhost:8000/chat/:userId/:pageSize/:PageNumber

This call gets all the chats for a user from the db:
- userId is the id of the user
- pageSize is the page of the first call we want to make because fetching all chats might be too big
- pageNumber starts at 0 for the first call and increments to get following chats

One thing to contemplate here is getting chats from local storage.

http://localhost:8000/message/:chatId

This call gets all the messages for a specific chat given its ID.
A better way would also obtaining the data from local storage.

This call also opens a socket and broadcasts messages when 'send-message' action is triggered.
A better approach here is opening N sockets when getting the first N chats.
