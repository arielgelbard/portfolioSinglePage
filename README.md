# Ariel Gelbard's Single Page Portfolio
##By: Ariel Gelbard
##December 10, 2014

Thanks for downloading and taking an interest in using and looking at my single page portfolio application.

##Technologies Included:

*I have used node.js as the server because it is very flexiable in many ways. We can program a server in javascript which can allow us to create endless possibilities.

*I have used the express framework for node.js because it will easily serve our single page application.

*I have used backbone because it allows the user to have a better experience. I also really like the fact that this application is not dependent on the server to keep re-serving data and potentially wasting users cellular data plans. On the other hand, it is really easy to program and serve pages in a template format without the hassle of writing a lot of server side code that older technologies could not accomplish.

*I have used gulp because it easily allows anyone to easily (in this case) re-compile pre-processed code and compress images. Developers can easily add useful plugins to modify how code is generated.



##Installation Instructions:

###How to run the Application (server):

1. Download node.js from **nodejs.org** and install it

2. After it is installed, open the terminal and type ```cd```.

3. After typing in ```cd```, drag and drop the ‘portfolioSingPage’ folder that you downloaded into the terminal window (ex. ```http://media.24ways.org/2013/coyier/drag-folder.gif```). Hit enter on the keyboard. (now you are in the folder.)

4. Type in ```npm install``` and hit enter. Please wait a few minutes for the modules to download and install.

5. Now that the modules have installed, type ```node server.js``` and hit the 'return' key to run the app.

6. The terminal will reply a message back to you indicating what the url is. Now copy the link, minimize terminal, and type the link into your web browser (ex. chrome, firefox, internet explorer, etc.). 

	*while interacting with the app, node will log any changes that are made in the server in the terminal.

7. To shut down the single page portfolio application, open up the minimized terminal. Now hit **control and c** at the same time on your keyboard.


###Building HTML & CSS Instructions:

1. Repeat steps 1-4 from the section above called 'How to run the Application'. If you have done the previous steps from the section above, move onto step #2.

2. Type in ```gulp``` and hit enter. 

	*You will see some messages appear in regards to what gulp has processed based on the paramters set in 'gulpfile.js'.