# E-commerce-Product-Catalog
## The E-Commerce Product Catalogue is a full-stack web application designed to manage and display a wide range of products for an online store. ##

# Installation Instructions
1. Clone the repository
    git clone https://github.com/SaziRanasinghe/E-commerce-Product-Catalog.git
    cd ecommerce-catalogue
3. Create a .env file in both the client and server directories to store environment-specific variables
4. Install Dependencies - npm install
5. Run the Application - npm start

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
  - React
  - React Router
  - Axios
**Backend:**
  - Node.js
  - Express
  - Mongoose
  - Nodemon
**Database:**
  - MongoDB
**Utilities:**
  - Concurrently
  - Dotenv
**API Testing:**
  - Postman
