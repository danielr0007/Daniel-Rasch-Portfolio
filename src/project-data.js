const projects = [
  {
    name: "Stunning Angles Photography Site",
    image: require("./images/stunning.jpg"),
    description:
      "A responsive, high-speed website designed for a real estate photography business, featuring full-stack capabilities. To ensure image quality without sacrificing performance, lazy loading techniques were employed. The website's form utilizes a custom backend powered by Node, Express, and MongoDB",
    tools: ["React", "Redux", "Gatsby", "Sass"],
    github: "https://github.com/danielr0007/stunningangles",
    link: "https://stunningangles.com",
    position: "right",
  },
  {
    name: "WonderCloset E-Commerce Store",
    image: require("./images/wondercloset.jpg"),
    description:
      "Welcome to my modern React e-commerce website! Powered by React, Tailwind CSS, Webpack, and Redux, this site offers a seamless shopping experience. With its sleek design, fast performance, and intuitive user interface, browsing and purchasing products is a breeze. Integrated with Redux for efficient state management, our React e-commerce website provides a visually appealing and highly functional online shopping platform.",
    tools: ["React", "Redux", "Tailwind", "Webpack"],
    github: "https://github.com/danielr0007/Wonder-Clothing-Apparel",
    link: "https://wondercloset.netlify.app/",
    position: "left",
  },
  {
    name: "Social Kalendar FullStack",
    image: require("./images/social-kalendar.png"),
    description:
      "This is a full-stack application allowing users to log daily goals and achievements on a calendar UI. Users can add friends and view their calendars to foster accountability. The app is built with PHP, MySQL, and JavaScript for functionality. Login using dan@gmail.com & password: 123",
    tools: ["javascript", "php", "mysql", "html", "css"],
    github: "https://github.com/danielr0007/Social-Kalendar_Full-Stack",
    link: "https://socialkalendar.000webhostapp.com/index.php",
    position: "right",
  },
  {
    name: "Connected Consulting",
    image: require("./images/connected-pic.jpg"),
    description:
      "Freelance project I made for a friend that offers digital marketing services to small business owners. The biggest challenge for this project was making a very nice professional design that draws the eye. I also had a limited amount of time to finish it so it tested my development speed.",
    tools: ["javascript", "html", "css", "tailwind css"],
    github: "https://github.com/danielr0007/Connected-Consulting-Website",
    link: "https://connectedconsulting.netlify.app/",
    position: "left",
  },
  {
    name: "Leads Form FullStack App",
    image: require("./images/pmt-form.jpg"),
    description:
      "I crafted a comprehensive full-stack business application. The frontend relies on Gatsby and Sass for an appealing user interface. On the backend, Node.js and Express provide robust server capabilities, with MongoDB handling data storage. The app boasts a refined form system, including validation and error handling, for optimal user experience and data integrity.",
    tools: ["gatsby", "express", "node", "mongodb"],
    github: "https://github.com/danielr0007/PMT-Form-Gatsby-Frontend",
    link: "https://pamitierraenviosus.netlify.app",
    position: "right",
  },
  {
    name: "HangMan | React.js",
    image: require("./images/hangman.jpg"),
    description:
      "The first React.js project that I created after learning the framework. It is not the traditional hangman because I was seeking to challenge myself by writing my own logic for the game... This project gave me an extensive understanding of hooks and the style of programming that React requires. Desktop version only.",
    tools: ["react.js", "javascript", "css", "html"],
    github: "https://github.com/danielr0007/Hangman-Game-in-React",
    link: "https://hangmanbydaniel.netlify.app",
    position: "left",
  },
  {
    name: "PMT Business Site",
    image: require("./images/pmt-site.jpg"),
    description:
      "Live, SEO-optimized, speedy site currently used by a client to secure leads. I hard-coded the page using HTML, CSS, and JavaScript. I made the site mobile-friendly using media queries and CSS grid techniques. The site also contains several motions and animations done through the use of Javascript and CSS. ",
    tools: ["javascript", "css", "html"],
    github: "https://github.com/danielr0007/Pamitierraenvios-website",
    link: "https://www.pamitierraenvios.com",
    position: "right",
  },
  {
    name: "Zip Income Calculator",
    image: require("./images/zip-calculator.jpg"),
    description:
      "There are many beautiful cities to live in—in the US, but which ones could I afford? I wanted a tool that let me know instantly how much I needed to earn to live in a specific city, so I built it. I used the realty mole property API to get real estate cost data for an area, then I manipulated the data using JavaScript to display an estimated income.",
    tools: ["javascript", "API", "css", "html", "JSON"],
    github: "https://github.com/danielr0007/Zipcode-income-calculator",
    link: "https://irentcalculator.netlify.app",
    position: "left",
  },
  {
    name: "Dollar to Pesos Calculator",
    image: require("./images/currency-calculator.jpg"),
    description:
      "I Partnered with a shipping business to develop its very own currency exchange tool. The business works with the Colombian market, so with the help of an API, I delivered an engaging, brand-themed tool that their customers loved. The main takeaway was how to manipulate and display incoming data from a resource utilizing fetch API.",
    tools: ["javascript", "API", "css", "html", "JSON"],
    github: "https://github.com/danielr0007/Currency-Exchange-Calculator",
    link: "https://pamitierraenvioscalculator.netlify.app",
    position: "right",
  },
];

export default projects;
