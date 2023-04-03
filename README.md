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

## :rocket:Install and Run the project
To use this app, you will have to clone this repo. You can do this by typing the following command in your terminal:

```
git clone https://github.com/PipHarsveld/rijksmuseum
```

Congrats, you are now all set! Start your liveserver and enjoy!

## :fork_and_knife:Rendering choices
Client-side rendering and server-side rendering are two approaches used to display web content. With client-side rendering, the web browser requests data from the server and then uses JavaScript to generate and display the HTML. Server-side rendering, on the other hand, is when the server generates the HTML for a webpage and sends it to the client. 
There are a few pro's to using server-side rendering. It can improve search engine optimization, provide faster page loading times, and improve the user experience. By rendering the pages on the server-side, the HTML content is generated on the server and sent to the client as a complete webpage. This reduces the amount of work that needs to be done on the client-side, resulting in a faster and smoother user experience.

I implemented server-side rendering in my project using Express and Handlebars. I created a file called router.js in my router directory to render different pages.
In the router.js file, I defined different routes using the router.get() method to render the respective pages. For example, the /overview route fetches data from the Rijksmuseum API using the request() method and passes it to the overview view using Handlebars template engine. Similarly, the /details/:id route fetches data for a specific art object based on the ID passed in the URL parameter, and the /categorie/:type route fetches data for a specific art category.


## :wrench:Enhancements
<!-- This would be a good place for a list of enhancements to optimize the critical render path implemented your app  -->


## :chart_with_upwards_trend:Activity diagram
<!-- ...and an activity diagram including the Service Worker 📈 -->


## :bulb:Api
I used the Rijksmuseum API for this project and before I started, I did some research to the API. The research can be found in [the wiki](https://github.com/PipHarsveld/rijksmuseum/wiki/Analyseren).


## :ledger:Sources
https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09

## :technologist:Author
This project is designed and created by [Pip Harsveld](https://github.com/PipHarsveld) for the course WebApp From Scratch in the minor Webdesign and Development.


## :page_facing_up:License
Copyright © 2023 Pip Harsveld.

This project is [MIT](https://github.com/PipHarsveld/rijksmuseum/blob/main/LICENSE) licensed.
