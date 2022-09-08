# &lt;/salt&gt;

# Salt Stars Day 4

## A. Scenario

Up until now you've implemented a login feature and a landing page which greets the user and displays a random Kanye West qoute. That's good and all, but not exactly the next Unicorn. Our product owner believes that listing players/persons together with information about each player is an original and potentially very lucrative product model. Although a bit hesistant about the product idea, you've informed the product owner that you will have a a _mocked_ version of the feature implementation done by the end of the day. 

## B. What you will be working on today

Frontendwise you'll create a new page in the application, `players.html`, which will have a "roster" (a list) listing players' names. You will also build a backend service that will provide the list of names. For today, the backend will be a _mocked_ version to be used during development. 

By the end of the day, we hope that you
- Have a grasp of how the _constructor function_ in players-service.js work
- Understand how _dependency injection_ works
- Start grasping the flow from the login page to the landing page and then the 'roster' page

## C. Testing and linting setup

### Linting   

Set up the project to use *ESLint with the Salt config*.   

### Testing

Set up the project to use *Mocha* as test runner.

## D. Further Lab instructions

### Before starting coding

Inspect the mock `remote-players-client.mock.js`. This file contains a fake implementation with the same _interface_ as the real implementation that you will develop tomorrow. It has two public functions: 
- One that fetch _all_ players
- One that fetch _one_ player by id

### Backend

1. Implement the business logic in `players-service.js`. The test suite for that class has some failing tests. Fix them.

2. The API to our service is located in `players.js` in the `players` module of our server. It also has some failing tests that have to be fixed.

### Client

The new html file in the project is meant to show all the players. But the client side JavaScript that is used to fetch data from our backend API is _not yet implemented_.

3. To fetch the data, we execute the code client side `players-client.js`. However it is not yet implemented. Remember that this kind of code is not testable. You have to do this without any test suite!

4. To make the data show up on the web page, you also need some glue code. This code is testable! The tests are located in `players.spec.js` in the client side code base and the implementation is supposed to go in `players.js`.

*Remember that you have to pack the client side JavaScript (create release) before running the app.*

____

Good luck and have fun!
