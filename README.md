# Website Name
BrandBites

# 



# About My Project

- User can see the 6 types of different brands of food in the home page. By clicking on each brand user will go to a page where he/she can see different types of products under the individual brand. I have done this functionality by query of brand name by passing the brand name from client to server side then the products info will arrive from database to server. User can also see advertisement features into that page.

- After clicking on the View details button user will go to a page where he/she can see the individual products details information. This page is private route. So the user at first must be logged in.

- Into the Product details page user can see a button of Add to Cart. whenever he/she will click on that the product will be stored to the cart page and the user will see a successful sweat alert. I have done this functionality by query of the product id passing the id to client to server and the products will arrive from database.

- I have used react toast for the login and register page. so if user failed successfully register or login then he/she will see a toast alert. If he/she successfully register of login then also he/she will see successful toast alert.

- User can also delete a product from cart store. I have done this functionality by delete method, where the product id will pass from client side to server side and by this id the query process will be done to database. finally after successful delete operation the a message will arrive from database to server to client. and as I have added a successful sweat alert, the user will see a successful message.

- Any products can be updated by clicking on the update button of each product which will take a private route of update page. After successfully updating a have used a successful sweat alert message. I have done this functionality by put method and by the id of the individual product.

- Also there is a Add product page including form, which is private route. Any product can be added by storing the product into the database.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- Also there is a darkmode, lightmode feature in the home page. User can toggle theme of the home page only.
