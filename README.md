# E-commerce-Product-Catalog
## The E-Commerce Product Catalogue is a full-stack web application designed to manage and display a wide range of products for an online store. ##

# Installation Instructions
1. Clone the repository
    git clone https://github.com/your-username/ecommerce-catalogue.git
    cd ecommerce-catalogue
2. Create a .env file in both the client and server directories to store environment-specific variables
3. Install Dependencies - npm install
4. Run the Application - npm start

# Architecture
*The project follows a client-server architecture, separating the frontend and backend into distinct modules for better scalability and maintainability.*
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
├── package.json
└── .env
server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── app.js
├── package.json
└── .env
 


# Technologies Used
**Frontend:**
  React
  React Router
  Axios
**Backend:**
  Node.js
  Express
  Mongoose
  Nodemon
**Database:**
  MongoDB
**Utilities:**
  Concurrently
  Dotenv
**API Testing:**
  Postman
