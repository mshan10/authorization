# Final Project Component Architecture Seed

This repo contains the basis for the authorization features of an app and uses Parse to store user data. The authorization service implements the login and register components and also makes sure the user is authenticated before accessing the app.

## To Install:

1. ```git clone https://github.com/mshan10/authorization.git```

2. Run ```npm install```

3. Make sure ```gulp``` is installed globally ```npm install -g gulp```

4. Run ```npm start``` or ```gulp```

5. Open Chrome and navigate to ```http://localhost:8880/```

You will notice a small white box load in the lower righthand corner. This box is called the UI-Router Visualizer. It allows you to see the current state of your application. As you add components you will be able to view the component tree in realtime. You can even select components in the tree to navigate during debugging. 
