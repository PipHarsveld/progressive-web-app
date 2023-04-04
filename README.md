# :art:Rijksmuseum | Progressive Web Apps
The web application is a Single Page Application (SPA) that allows users to search for and view artwork from the Rijksmuseum in Amsterdam, Netherlands.

![Screenshot van Singe Page Web App](./spa/images/Flow%20WAFS.jpg)

<!-- LINKJE -->

## :card_file_box:Table of contents
* [User story](#busts_in_silhouetteuser-story)
* [Features](#sparklesfeatures)
* [Install and Run the project](#rocketinstall-and-run-the-project)
* [API](#bulbapi)
* [Documentation](#memodocumentation)
* [Author](#technologistauthor)
* [License](#page_facing_uplicense)

## :busts_in_silhouette:User story
As an art lover, I want to be able to search and view art from the Rijksmuseum at home so that I can enjoy art at all times.

## :sparkles:Features
- [X] Overview of different artworks
- [X] Detail page of a single artwork
- [X] Filter artworks based on category
- [ ] Search bar for searching artworks based on object number, title of artwork or artist


# :white_check_mark:Done during this course
- [X] Redesign WAFS app and change the app structure
- [X] Convert the client-side rendered app to a server-side rendered app
    - [X] Convert app to Node.js
    - [X] Use Express to create a server
    - [X] Use Handlebars to render pages
    - [X] Add a service worker
        - [X] Make caching work
        - [X] Make the app work offline
    - [X] Add a manifest file
- [X] Add progressive enhancement
- [X] Optimize performance
    - [X] Optimize images
    - [X] Optimize CSS by minifying
    - [X] Add cache-control
- [X] Deploy the app


## :rocket:Install and Run the project
To use this app, you will have to clone this repo. You can do this by typing the following command in your terminal:

```
git clone https://github.com/PipHarsveld/progressive-web-app
```

Atfer cloning the repo, you will have to install the dependencies. You can do this by typing the following command in your terminal:

```
npm install
```

To get the data from the Rijksmuseum API, you'll need a API key. To get this, make an account on the [Rijksmuseum API website](https://data.rijksmuseum.nl/object-metadata/api/). After you've made an account, you can get your API key by clicking on the 'Get your key' button. Create a .env file, copy the API key and paste it in the .env file.

Once the dependencies are installed, you can direct to the project folder with this command:

```
cd progressive-web-app
```

For the final step, run the project by typing the following command in your terminal:

```
npm run dev
```

Congrats, you are now all set! Go to `http://localhost:5000/` and enjoy RijksKunst!

## :fork_and_knife:Rendering choices
Client-side rendering and server-side rendering are two approaches used to display web content. With client-side rendering, the web browser requests data from the server and then uses JavaScript to generate and display the HTML. Server-side rendering, on the other hand, is when the server generates the HTML for a webpage and sends it to the client. 
There are a few pro's to using server-side rendering. It can improve search engine optimization, provide faster page loading times, and improve the user experience. By rendering the pages on the server-side, the HTML content is generated on the server and sent to the client as a complete webpage. This reduces the amount of work that needs to be done on the client-side, resulting in a faster and smoother user experience.

I implemented server-side rendering in my project using Express and Handlebars. I created a file called router.js in my router directory to render different pages.
In the router.js file, I defined different routes using the router.get() method to render the respective pages. For example, the /overview route fetches data from the Rijksmuseum API using the request() method and passes it to the overview view using Handlebars template engine. Similarly, the /details/:id route fetches data for a specific art object based on the ID passed in the URL parameter, and the /categorie/:type route fetches data for a specific art category.


## :wrench:Enhancements
In order to improve the performance of my PWA, I have implemented several enhancements to optimize the critical render path. These enhancements include:

- **Server-side rendering (SSR):** I used Node.js to implement SSR, which reduces the initial loading time of my PWA.
- **Minification and compression of assets:** To reduce the size of my app's assets, I have minified and compressed them, resulting in faster loading times.
- **Lazy loading of images:** I have implemented lazy loading, which means that the images only load when they are needed, thus improving the initial loading time of my PWA.
    ```
        <img src="{{this.webImage.url}}600" loading="lazy">
    ```
- **Caching:** I used service workers to cache my app's assets, enabling my PWA to load faster even when offline. See my service worker file [here](https://github.com/PipHarsveld/progressive-web-app/blob/main/service-worker.js) to see how I implemented it.
- **Cache-control:** I have used the cache-control HTTP header to set the cache duration for my app's assets to one year, which means that the browser will deliver the assets from the cache after a year.
    ```
    app.use((req, res, next) => {
        res.setHeader('Cache-Control', 'max-age=' + 60 * 60 * 24 * 365);
        next();
    });
    ```
- **Block font loading and font rendering controls:** To optimize the font loading process, I have used the font-display: swap CSS property, which tells the browser to display fallback fonts until the custom fonts are loaded. This prevents layout shifts and improves the perceived performance of my PWA.
By implementing these enhancements, I have optimized the critical render path of my PWA, resulting in a better user experience for my app's users.
```
    @font-face {
        font-family: 'Panno';
        src: url(../fonts/PannoText-Normal.woff) format('woff'),
            url(../fonts/PannoText-Normal.woff2) format('woff2');
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Panno';
        src: url(../fonts/PannoText-Bold.woff) format('woff'),
            url(../fonts/PannoText-Bold.woff2) format('woff2');
        font-weight: 700;
        font-display: swap;
    }
```

## :chart_with_upwards_trend:Activity diagram
<!-- ...and an activity diagram including the Service Worker 📈 -->


## :bulb:Api
I used the Rijksmuseum API for this project and before I started, I did some research to the API. The Rijksmuseum API is a public API provided by the Rijksmuseum in Amsterdam, which allows developers to access and use data about the museum's collections. The API provides access to a large number of images and metadata for artworks, along with other information such as artist biographies and collection highlights. If you would like to know more about the API, you can visit the [Rijksmuseum API documentation](https://data.rijksmuseum.nl/object-metadata/api/) or read my [research](https://github.com/PipHarsveld/rijksmuseum/wiki/Analyseren).


## :ledger:Sources
https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09


## :technologist:Author
This project is designed and created by [Pip Harsveld](https://github.com/PipHarsveld) for the course WebApp From Scratch in the minor Webdesign and Development.


## :page_facing_up:License
Copyright © 2023 Pip Harsveld.

This project is [MIT](https://github.com/PipHarsveld/rijksmuseum/blob/main/LICENSE) licensed.
