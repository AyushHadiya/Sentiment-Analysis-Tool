🧠 Sentiment Analysis Tool (AWS Cloud Deployment)

This project is a serverless web application that performs real-time sentiment analysis on user-inputted text (e.g., reviews or messages) and classifies the sentiment as either Positive or Negative.

🚀 Features

🔍 Real-time sentiment detection
🧑‍💻 Simple, responsive frontend interface
☁️ Deployed on AWS Lambda using Dockerized container
🌐 Accessible via API Gateway HTTP endpoint
✅ Output displayed instantly on screen

🛠️ Tech Stack

Technology	Purpose

Python + Scikit-learn - Training the sentiment classification model
AWS Lambda - Hosting the model in a serverless function
AWS API Gateway -	Exposing the model as an HTTP API
Docker - Containerizing the model and runtime
Amazon ECR - Storing the container image
HTML, CSS, JS	Frontend web interface

🔄 How It Works

User inputs text on the frontend.
Frontend sends a request to the API Gateway.
API triggers AWS Lambda, which contains the trained model.
Lambda returns sentiment as "Positive" or "Negative".
Frontend displays result to the user in a friendly format.

📚 Learning Outcomes

This project demonstrates how cloud computing and machine learning can be combined to create scalable, serverless applications. It strengthened skills in:
Cloud architecture (AWS Lambda, API Gateway, ECR)
Full-stack web development

Screenshots :

<img width="940" height="463" alt="image" src="https://github.com/user-attachments/assets/547c524b-6056-42b0-8807-71a3d29a31ce" />

<img width="940" height="847" alt="image" src="https://github.com/user-attachments/assets/c5ac2c5f-4a84-4d6a-b89e-c162ef67f7ae" />

<img width="940" height="847" alt="image" src="https://github.com/user-attachments/assets/8d944ca6-72ad-4508-b4fc-50f1b314f81e" />

