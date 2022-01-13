## Launch the project

In order to launch the project, please run:

-   npm install
-   npm start
-   -   npm install installs all dependancies and npm start runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In order to run the test suite please run:

-   npm test
-   -   This launches the test runner in the interactive watch mode.

## Project architecture

The project architecture is fairly straight forward for a small React project. For a large scalable solution I would certainly spend more time analysing its requirements and writing up a complete guide of the technologies chosen and architectural decisions made. For example, (here is a guide I wrote for a software solution I recently architected for an employer)[https://docs.google.com/document/d/1wTBlcHR6yOLbWS1cCtOqsHyvwrW7nEJySuNNtR9038Y/edit?usp=sharing]

## Testing

As you can see, there are a couple of tests added. These are very basic and their purpose is primarily to showcase that I'm aware of how to use Jest and testing library. For a better understanding of my testing capability, I would ask that you look at (this project hosted on my github)[https://github.com/nikosargalias/nikos-argalias-cars-frontend]

## State management

In large scale applications, I would most likely opt for a centralised state management solution such as Redux. However, due to tiny size of this min app, I felt as though simple utilising a useState hook within the component was sufficient.

## Styled Components

I'm a big advocate for scalable css, and in order to achieve that in the past, I would very strictly follow the BEM paradigm mixed with SCSS. However more recently I have become very fond of Styled Components because they generate unique IDs for every component, therefore eliminating the possibility of class name clashes and specificity concerns completely in large scale applications. It addition, it ties every bit of CSS to a specific component, which is essentially what BEM was trying to achieve.

## Mobile Responsive Considerations

I have implemented a mobile first responsive design. Utilising a media query built in a reusable manner. 
## Performance considerations

I made sure to implement some best practices regarding React performance such as cleaning up the setInterval upon component unmounting and useMemo hooks for memoization of values.
## create-react-app

Whereas in the past I have created my own configuration boilerplate for React applications, due to the time I had to spend on this project I decided to use Create-React-App which comes with a great default configuration setup.

## Final thoughts

Please be aware that in a real life project, I would take longer with each feature/story, ensuring proper test coverage, well though out architecture and the best code practices. While I did my best to showcase my ability, as this project was built in a short time crunch, it doesn't reflect the quality of work I would aim to achieve in a real production environment.
