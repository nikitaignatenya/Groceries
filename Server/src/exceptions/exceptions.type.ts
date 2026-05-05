export const ExceptionType = {
  DB_USER_CREATE_NOT_CREATED: { id: 1, message: 'DB not created USER' },
  DB_USER_ALREADY_EXISTS: { id: 2, message: 'User with this email already exists' },
  DB_USERS_GET_NOT_GOT: { id: 1, message: 'DB not got USERS' },
  DB_USER_GET_BY_ID_NOT_GOT: { id: 1, message: 'DB not got USER by ID' },
  DB_USER_GET_BY_EMAIL_NOT_GOT: { id: 1, message: 'DB not got USER by EMAIL' },
  DB_USER_TOKEN_GET_NOT_GOT: { id: 1, message: 'DB not got TOKEN' },
  DB_USER_INVALID_PASSWORD: { id: 3, message: 'Invalid password' },
  DB_USER_EMAIL_NOT_FOUND: { id: 5, message: 'Email not registered' },
  DB_USER_INVALID_EMAIL: { id: 6, message: 'Invalid email format' },
  VALIDATION_ERROR: { id: 7, message: 'Validation failed' },
};
