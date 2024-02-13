# First steps with Next

## Description

This project is a project containing several applications that I have created with the aim of learning the main features of Next, such as: the different rendering strategies (SSR, SSG and CSR), dynamic routes, data fetching, as well as how to implement redux in next and how to make it work correctly in an environment that uses default server components.

## How to Run

Follow these steps to run the project in your local environment:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nextjs-example-project.git
   ```

2. **Install Dependencies:**

   ```bash
   cd nextjs-example-project
   npm install
   ```

3. **Start the Application:**

   ```bash
   npm run dev
   ```

4. **Access the Application:**
   Open your browser and visit [http://localhost:3000](http://localhost:3000).

Done! You should now see the application running in your local environment.

## Run the Project with Docker

This repository contains a project that you can easily set up using Docker. Follow these steps to build the image and run the container.

### Prerequisites

- Docker installed on your system. You can download Docker [here](https://www.docker.com/get-started).

### Steps to Run the Project

1. **Build the Docker Image:**
   Use the following command to build the project's Docker image.

   ```bash
   docker build -t image-name .
   ```

2. **Run the Container:**
   After building the image, you can run the container with the following command. This will open the project on port 3000 of your machine.

   ```bash
   docker container run -dp 3000:3000 image-name
   ```

   - `-d`: Run the container in the background.
   - `-p 3000:3000`: Map port 3000 of the container to port 3000 on your machine.

3. **Access the Project:**
   Open your web browser and navigate to `http://localhost:3000` to see the project in action.

### Stop and Remove the Container

If at any point you need to stop and remove the container, you can use the following commands:

```bash
docker container stop container-name
docker container rm container-name
```

Replace `container-name` with the identifier or name of your container.

You're all set! Now your project should be up and running in a Docker container. Enjoy coding!
