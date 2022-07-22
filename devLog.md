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

- [3pm] procrastination is a bad thing. Working on login and signup page now. need to make sure i understand responsiveness with tailwind

- [5pm] well css is still and always be my worst nightmare. need more knowledge to full make UI better

#### **July 13th 2022**

- [12pm] aim to finish login and sign up today for sure. i think i need to stop worrying about UI and focus on getting the functionalities up and running. once login, signup and dashboard is complete i need to start thinking about application functionalities.

- [2pm] client side auth working. users with valid token will no longer have access to login or signup page. users with invalid token will no longer have access to private routes.

#### **July 14th 2022**

- [11am]finally gonna work on the requirement document. it should mark down basic functionality requirements and cleary state all intended functions.

#### **July 16th 2022**

- [1pm] Switching the database from mongodb to postgres. spent a few hours learning postgres. no reason behind the migration other then the fact that postgres is industry standard and i might as well learn it. This decision might slow down the development phase, but i fill like it would be worth learning a new piece of tech.

#### **July 16th 2022**

- [11am] checked out docker composed and created a docker compose of postgres. docker compose made it so much easy to run postgres. fully changed the database from mongoDB to postgres. need to install knex and learn how to use it. after that need to rework the authentication logic inorder to make it work with postgres.

#### **July 19th 2022**

- [2pm] Worked with docker the whole day and now i have a much better grasp on how it works. gave up on library migrations and now will work on my own self migration system for postgres. Also,giving up on traditional auth and sticking with OAuth. For the time being only working on google oauth and might add more later on, need to find a way to have a primary key. Also need to learn postgres reference key concept.

#### **July 21st 2022**

- [11am] Need to stop procrastinating work. been study new technologies and libs for the last 2 days. aim to complete discord based login today with proper care towards private and public routing. once that is done, will focus on learning redis inorder to cache certain api request for performance enhancement.
