# batch-3-assignment-2

If you want to run my project locally on your computer then follow the instructions given below:

## Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:
```
git clone https://github.com/devhasanmia/batch-3-assignment-2.git
cd batch-3-assignment-2
yarn
code .
yarn start
```
3. Open the `.env` file and change the `DATABASE_URL`. If you want to use MongoDB Compass on your local computer, you should use `mongodb://127.0.0.1:27017/db-batch-3-assignment-2`. If you prefer, you can log in to MongoDB and use the database URL provided there.

##### This was the instruction. Now let's see which routes have been implemented.

### API Endpoints
*****
#### Product Management
1. Create a New Product  
   `Endpoint: /api/products`  
   Method: `POST`

2. Retrieve a List of All Products  
   `Endpoint: /api/products`  
   Method: `GET`

3. Retrieve a Specific Product by ID  
   `Endpoint: /api/products/:productId`  
   Method: `GET`

4. Update Product Information  
   `Endpoint: /api/products/:productId`  
   Method: `PUT`

5. Delete a Product  
   `Endpoint: /api/products/:productId`  
   Method: `DELETE`

6. Search a Product  
   `Endpoint: /api/products?searchTerm=iphone`  
   Method: `GET`

#### Order Management
1. Create a New Order  
   `Endpoint: /api/orders`  
   Method: `POST`

2. Retrieve All Orders  
   `Endpoint: /api/orders`  
   Method: `GET`

3. Retrieve Orders by User Email  
   `Endpoint: /api/orders?email=level2@programming-hero.com`  
   Method: `GET`


##### Thanks