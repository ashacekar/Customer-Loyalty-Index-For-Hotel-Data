# Customer-Loyalty-Index-For-Hotel-Data
This is a MEAN stack project developed in web technology course by students of KLE Technological University,Hubbali for following Transil Technologies Pvt. Ltd Problem Statement:

TSL-17.0 
Customer Loyalty Index Businesses often have methodologies to reward 
users for being their customers or using their 
products for a long time. Suppose you are an 
administrator of a business. Develop a customer 
loyalty index to reward these customers. 
Create a basic UI where you can input the criteria to 
determine loyalty.
Give an option to input different conditions and 
criteria and generate loyalty ranks accordingly.
Display the loyalty ranked customers in a tabular 
format.
Consider a hotel segment to populate data. 

Contributors:
Ashish Kar, Arundati Dixit, Deepali Naik and Deepti Nadkarni
3rd Year, 6th Sem, SoCSE

Software Requirements:
1. Visual Studio Code
2. MongoDB
3. Node.js

Clone and download this project folder.

Pre-Requisites:
Install following libraries by npm command for the project:
1. npm install express
2. npm install body-parser
3. npm install mongodb
4. npm install mongoose

Ensure these installations create a "node_modules" directory in project folder

Features:
1. Hotel customers can give feedback for the services and accomodation provided by the hotel
2. Based on customer feedback, cli will be computed for that customer
3. Admin will be able to view the most loyal customes and send them rewards

General instructions:
1. Start your MongoDB Server
2. Open the project folder in Visual Studio Code and go to src directory
3. Run the following command in terminal:
   node server.js
4. Page instructions:
   4.1 welcome.html: Choose whether to go to admin or feedback page
   4.2 feedback.html: Customers can provide feedback for various facilities provides by hotel
   4.3 admin.html: Use username as 'admin' and password as 'admin' to proceed to cliview.html
   4.4 cliview.html: Enter the desired cli to view most loyal customers. It redirect to a tabular view with customers details where rewards can be sent to them
   
Thank you, may you all find our project helpful

