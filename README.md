## Project Setup and Installation Guide

Follow these steps to set up and run the File Sharing project on your local machine.

### Clone the Project
1. Clone the repository from GitHub to your local machine.

### Client Setup
2. Open a terminal and navigate to the `client` directory of the project:

    cd /path/to/File-sharing/client


3. Install the required client dependencies using npm:

    npm install

### Server Setup
4. In the terminal, navigate to the `server` directory:

    cd ../server

5. Install the necessary server dependencies using npm:
    npm install
6. **Create a `.env` File**
- Inside the `server` directory, create a file named `.env`.

7. **Configure MongoDB Database**
- Open the `.env` file and add the following line, replacing `"Your URL"` with your actual MongoDB database URL:
  ```
  DB_URL="Your URL"
  ```

8. **Start the Server**
- In the terminal, start the server by running:
  ```
  npm start
  ```

### Running the Client
9. Open a new terminal window.

10. Navigate to the `client` directory again:
 ```
 cd /path/to/File-sharing/client
 ```

11. Start the client application:
 ```
 npm start
 ```

Once both the server and client are running, you can access the File Sharing project in your web browser.

**Note:** Make sure you have Node.js and npm installed on your machine before you begin. You can download them from [https://nodejs.org/](https://nodejs.org/). Also, ensure you have a MongoDB database set up and running, and replace `"Your URL"` with the actual URL of your MongoDB database.

Feel free to reach out if you encounter any issues during the setup process.
Just replace /path/to/File-sharing/client with the actual path to your project's client directory.

## Technologies Used

Our File Sharing project utilizes the following technologies to deliver its functionality:

- **MongoDB:** A powerful and flexible NoSQL database, used for storing and managing data efficiently.

- **ReactJS:** A popular JavaScript library for building interactive user interfaces, enabling dynamic and seamless frontend experiences.

- **ExpressJS:** A minimal and flexible Node.js framework, utilized to build the backend server, handle routes, and manage requests.

- **Node.js:** An event-driven JavaScript runtime that allows us to run server-side code, facilitating efficient and scalable network applications.

- **React Router:** A library for enabling navigation and routing within a React application, ensuring smooth transitions between different views.

- **Axios:** A promise-based HTTP client for making asynchronous HTTP requests, enhancing communication between the frontend and backend.

These technologies come together to create a cohesive and robust environment for our File Sharing project, enabling efficient data storage, responsive user interfaces, and seamless communication between the client and server.




## Challenges Faced

During the development of this project, I encountered several challenges:

- **Serverless Limitations:** Initially, I explored the viability of using serverless platforms for their cost-effectiveness. However, these platforms couldn't support my need for server-based file storage.

- **File Storage Complexity:** As someone relatively new to server-side file storage, setting up the required infrastructure presented a learning curve. Ensuring secure, efficient, and reliable file storage posed unforeseen complexities.

- **JWT Implementation:** Despite my best efforts, integrating JSON Web Tokens (JWT) for authentication proved more intricate than anticipated. Due to various configuration challenges, I chose to temporarily exclude this feature from the project.

Despite these hurdles, I remained committed to delivering a functional solution. I look forward to addressing these challenges and refining the project for a better user experience in the future.
