# RCTS_INERNSHIP

Introduction

The Efficient Reads is a web application that provides a user interface for navigating through various sections such as Cards, PieCharts, Table, Form, and more. It features a responsive layout with a Navbar, Sidebar for navigation, and a Footer.

 Folder Structure

The project's folder structure is organized as follows:

Change into the project directory

cd client 

Install dependencies

npm install

Start the development server

npm start


/src

|-- assets

|-- components

|  |- Cards

|  |- Footer

|  |- Form

|  |- Navbar

|  |- Piechart

|  |- Sidebar

|  |- Table

|-- styles

|-- App.js

|-- ..


![image](https://github.com/SOWJANYATILLAPUDI/Responsive_Webpage/assets/104555675/e7b00a24-5b8c-47b7-b4fa-67582fa832cf)

Components

Navbar

The Navbar component typically represents the navigation bar at the top of a web page. It often contains a heading, a searchbar and a sidebar icon used for navigation across the application.

Sidebar

The Sidebar component represents a side panel or menu that typically contains navigation links or additional functionalities of the web page.The Sidebar component is responsible for rendering the sidebar with navigation links. It uses React Router for navigation In React, a Sidebar component would include a container element, links or buttons for navigation, and possibly use state to manage its open/close state. 


Cards

The Cards component generally represents individual units of content or information displayed in a card-like format. Each card contains an image and text related to the image text.  In React, a Card component would likely render a collection of cards based on the data passed to it as props. It might use HTML elements to structure and style each card.

Piechart

The Piechart component is responsible for rendering a graphical representation of data in the form of a piechart.  In React, a piechart component might use a library like high charts, high charts react official to create the pie chart.  It would receive data as props and generate the chart based on that data.


Table

The TableComponent presents a structured representation of book data in a tabular format.  This table features five columns – “Title”, “Author”,”Genre”,”Key Concepts” and “Publication Year”.  Each row in the table corresponds to a book entry, displaying vital information about various books available within the system.

Form 

The Form component in this application serves as an interactive interface to capture user preferences, and data efficiently.  It’s thoughtfully designed, encompassing various input elements to gather comprehensive information from users like date, day selection, reading preferences, reading frequency, favourite book name and genre.  Upon form submission, users receive a confirmation prompt indicating successful submission, enhancing their experience by providing clear feedback.

DEVICE TYPE

The page that show smooth responsive behavior that adapts to screen device type.


Responsiveness on laptop

![image](https://github.com/SOWJANYATILLAPUDI/Responsive_Webpage/assets/104555675/d4f86f92-500a-46d7-bea2-67dbd047ffe7)

Responsiveness on Tablet view

![image](https://github.com/SOWJANYATILLAPUDI/Responsive_Webpage/assets/104555675/453a44a2-2df2-4874-9dee-a528f0c4a735)

Responsiveness on Mobile view

![image](https://github.com/SOWJANYATILLAPUDI/Responsive_Webpage/assets/104555675/8e53c21e-ff81-4d3f-a2a2-117959faf63b)

Conclusion:

The website is showing smooth responsiveness on different device types and all the components are showing responsiveness.


