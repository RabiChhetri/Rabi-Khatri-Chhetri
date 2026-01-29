# Portfolio Backend Server

This backend server handles contact form submissions and sends emails directly to your Gmail account.

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Gmail App Password

To send emails through Gmail, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to **Security** > **2-Step Verification** (enable if not already enabled)
3. Go to **App passwords**
4. Generate a new app password for "Mail"
5. Copy the generated 16-character password

### 3. Configure Environment Variables

Edit the `.env` file in the server directory:

```env
GMAIL_USER=rabikc139@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
PORT=3001
```

Replace `your_16_character_app_password_here` with the app password you generated.

### 4. Start the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Sends an email with the contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

### GET /api/health
Health check endpoint to verify server is running.

## Security Notes

- Never commit your `.env` file with real credentials
- The app password is different from your regular Gmail password
- Keep your app password secure and don't share it
- Consider using environment variables in production deployment

## Troubleshooting

1. **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
2. **"Less secure app access" error**: App Passwords bypass this requirement
3. **Connection timeout**: Check your internet connection and Gmail settings
4. **CORS errors**: Make sure the frontend is making requests to the correct backend URL