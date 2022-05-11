# API for users administration

## Endpoints:

### POST /users -> Creates a new user

Request Body:

```
{
	"name": "Nehama",
	"email": "email@email.com",
	"password": "senhaforte123",
	"age": 22
}
```

Response:

```
{
	"name": "Nehama",
	"email": "email@email.com",
	"password": "$2a$10$vYUfyJMqeb6L1eUJ5ryPJevi07ejmV2kLYP6Fe8TR/ll1UBfx4yIO",
	"age": 22,
	"id": "672f78e5-7c74-4b27-9b59-6193c44f612d",
	"created_at": "2022-05-11T15:45:50.463Z",
	"updated_at": "2022-05-11T15:45:50.463Z"
}
```

### GET /users -> Lists All the users

### GET /users/:id -> Get user by ID

### PATCH /users/:id -> Updates a user

1. Send only the information that you wish to change.
2. It's not possible to change your password in this route.

Request Body:

```
{
	"name": "Nehama Mandelbaum"
}
```

Response:

```
{
	"id": "672f78e5-7c74-4b27-9b59-6193c44f612d",
	"name": "Nehama Mandelbaum",
	"email": "email@email.com",
	"password": "$2a$10$vYUfyJMqeb6L1eUJ5ryPJevi07ejmV2kLYP6Fe8TR/ll1UBfx4yIO",
	"age": 22,
	"created_at": "2022-05-11T15:45:50.463Z",
	"updated_at": "2022-05-11T15:49:17.449Z"
}
```

### DELETE /users/:id -> Deletes a user
