# Dev Logs

## Tools and Lib

- client => react, easy-peasy, react-router-dom, react-query
- backend => express js

#### **July 11th 2022**

- [12pm] Basic server side authentication is complete. user can now login and signup on the server side and have access to private api routes. now to work on client side authentication, but before anything else i need to add tailwind css to the project.

- [1pm] tailwind added to the project, now time to learn tailwind.

- [2pm] installed tailwind and its working fine. Also installed react-router-dom and currently working on private/public page routing. Need to get the login ad signup pages up and running with proper routing.

- [3pm]need to learn more about optimization and react page render process. need to ensure no re-render happens unintentionally.

#### **July 12th 2022**

- [10am] need to finish client side login and signup page today.

- [11am] making some optimization changes to the project. using `easy-peasy` and `react query` in order to maintain a centralized storage and fetch data with cacheing. need to learn all of these libs before implementation.
  useMemo: Returns and stores the calculated value of a function in a variable
  useCallBack: Returns and stores the actual function itself in a variable
