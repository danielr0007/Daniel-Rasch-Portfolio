const projects = [
  {
    name: "Social Kalendar Goal App",
    image: require("./images/social-calendar.jpg"),
    description:
      "Accomplishing goals is hard... I wanted a tool to help keep me accountable, so the idea for this project was born. I programmed an interactable calendar where goals can be uploaded daily (text and images). I teamed up with a back-end dev to add friend request and activity-sharing functionality. Try it! Username: dan@gmail.com...Password: dan",
    tools: ["javascript", "java", "css", "html"],
    github: "https://github.com/danielr0007/CSocial-Kalendar-App",
    link: "https://socialkalendar.herokuapp.com/index.html",
    position: "right",
  },
  {
    name: "New Leads Form",
    image: require("./images/pmt-form.jpg"),
    description:
      "Live, functional form currently used by a client to capture leads. I assembled it using HTML, CSS, and JavaScript. Using GitHub, I collaborated with a back-end developer who wrote the server-side code (PHP) to complete this project. Mobile friendly. The main takeaways were, how to work as a team, and how to locate and fix bugs.",
    tools: ["javascript", "php", "css", "html"],
    github: "https://github.com/danielr0007/PMT-Form",
    link: "https://pamitierraenvios.us",
    position: "left",
  },
  {
    name: "HangMan | React.js",
    image: require("./images/hangman.jpg"),
    description:
      "The first React.js project that I created after learning the framework. It is not the traditional hangman because I was seeking to challenge myself by writing my own logic for the game... This project gave me an extensive understanding of hooks and the style of programming that React requires. Desktop version only.",
    tools: ["react.js", "javascript", "css", "html"],
    github: "https://github.com/danielr0007/Hangman-Game-in-React",
    link: "https://hangmanbydaniel.netlify.app",
    position: "right",
  },
  {
    name: "PMT Business Site",
    image: require("./images/pmt-site.jpg"),
    description:
      "Live, SEO-optimized, speedy site currently used by a client to secure leads. I hard-coded the page using HTML, CSS, and JavaScript. I made the site mobile-friendly using media queries and CSS grid techniques. The site also contains several motions and animations done through the use of Javascript and CSS. ",
    tools: ["javascript", "css", "html"],
    github: "https://github.com/danielr0007/Pamitierraenvios-website",
    link: "https://www.pamitierraenvios.com",
    position: "left",
  },
  {
    name: "Zip Income Calculator",
    image: require("./images/zip-calculator.jpg"),
    description:
      "There are many beautiful cities to live in—in the US, but which ones could I afford? I wanted a tool that let me know instantly how much I needed to earn to live in a specific city, so I built it. I used the realty mole property API to get real estate cost data for an area, then I manipulated the data using JavaScript to display an estimated income.",
    tools: ["javascript", "API", "css", "html", "JSON"],
    github: "https://github.com/danielr0007/Zipcode-income-calculator",
    link: "https://irentcalculator.netlify.app",
    position: "right",
  },
  {
    name: "Dollar to Pesos Calculator",
    image: require("./images/currency-calculator.jpg"),
    description:
      "I Partnered with a shipping business to develop its very own currency exchange tool. The business works with the Colombian market, so with the help of an API, I delivered an engaging, brand-themed tool that their customers loved. The main takeaway was how to manipulate and display incoming data from a resource utilizing fetch API.",
    tools: ["javascript", "API", "css", "html", "JSON"],
    github: "https://github.com/danielr0007/Currency-Exchange-Calculator",
    link: "https://pamitierraenvioscalculator.netlify.app",
    position: "left",
  },
];

export default projects;
