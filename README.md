# BACKEND - EMAILS / nodemailer

## (MusCo Blog Email Notification System)

This project demonstrates the implementation of an email notification system using Nodemailer to send welcome emails with attachments to new users of the MusCo Blog application. The system supports sending emails via Gmail and includes attachments such as PDF and image files.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Technologies Used

- **Node.js**
- **Express.js**
- **Nodemailer**
- **dotenv**
- **path**

## Project Structure

```bash
backend-emails
├── .env
├── MusCo.png
├── MusCo.pdf
├── README.md
├── mail.js
├── package.json
└── server.js
```

## Environment Variables

Create a `.env` file in the root directory with the following:

```bash
MAIL_SERVICE=gmail
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=<your_email@gmail.com>
MAIL_PASS=your_email_password
PORT=3007
```

## Getting Started

1. **Clone the repository:**

   ``` bash
   git clone https://github.com/yourusername/backend-emails.git
   cd backend-emails

2. Install dependencies:

    ``` bash
    npm install
    ````

3. Set up environment variables:
Create a .env file and add the required variables as described above.

4. Run the application:

    ``` bash
    node server.js
    ```

## Usage

Send a GET request to /email-send to trigger the email sending functionality, which will include a welcome message and attachments (MusCo.png and MusCo.pdf):

<http://localhost:3007/email-send>

## License

[MIT](https://choosealicense.com/licenses/mit/)

This project is licensed under the MIT License.

*** Feel free to customize this README file to better suit your project's specific details and requirements.
