# Doktor James’ Kastle Of Katastrophe
Doktor James is a character created by James Bennison and Timothy Goose and performed all over the country at various fringe festivals aimed at children between 7 and 13 but enjoyed by all ages. This is a tabletop roleplaying game featuring all of the characters from the show, as the children create superheroes to try and stop Doktor James from taking over the world. In many ways it is a simplified version of Dungeons and Dragons that kids can play with their friends and family, designed to be easy to pick up and flexible to play. 

This website gives a rundown of the rules in a simple to understand way, with interactive elements to help children and grown-ups alike understand how to play. Its designed to be bold and fun and easy to get to grips with.

**I should point out also, Doktor James has spelling issues and all of the Ks replacing Cs is entirely intentional.**

## UX
There are two main groups that this website is aimed at, parents and children. Children who want to play the game and understand the rules, and the parents of said children who might be running it for them and wanting to understand the rules, as well as possibly finding somewhere to play the game.
User Stories
* As a parent I want to understand the rules of this game so I can play it with my children and teach them how to play.
* As a parent with not a lot of room in my house, I want to find somewhere to go and play the game which is appropriate for the game.
* As a child who wants to play the game I want to understand the rules in an accessible way so I can play it with my friends.
* As a child I want to be able to look at all the characters easily so I can decide which one I want to play.
* As a parent I want to be able to easily download the rules so that I don’t have to sit in front of my computer when playing.

With this in mind I designed the following wireframes.
* [Home Page](assets/wireframes/Home.png) - [Mobile](assets/wireframes/HomeMob.png)
* [Rules Page](assets/wireframes/Rules.png) - [Mobile](assets/wireframes/RulesMob.png)
* [Google Page](assets/wireframes/Google.png) - [Mobile](assets/wireframes/GoogleMob.png)
* [Characters Page](assets/wireframes/Characters.png) - [Mobile](assets/wireframes/CharactersMob.png)

## Features
### Existing Features
* **Downloadable content** – Free PDF download of the rules which is easy to print off so you don’t have to be on the internet when actually playing the game
* **Rules** – Online rules with interactive javascript elements to make it more hands on in terms of picking up the rules.
* **Venue Finder** – Using google maps API, I have given users various options of places they can go to play the game at game shops.
* **Characters** – A list of different characters they could play with downloadable character sheets.
### Features Left to Implement
* **Adventure** – The actual adventure itself needs to be put up onto the websites with downloadable maps and tokens featuring the enemies for use on said maps.
* **Better illustrations** – More comic book inspired illustrations for the characters and general other illustrations to help highlight the rules.

## Technologies Used
I have used mostly HTML5, CSS3 and Javascript to put together this site along with the following libraries and frameworks:
* [Bootstrap](https://getbootstrap.com/)
    * For basic formatting and layout.
    * v4.5
* [Font Awesome](https://fontawesome.com/)
    * For icons to social media and all abilities.
    * Version 5.13.1
* [Google Fonts](https://fonts.google.com/)
    * For the use of Oswald.
* [JQuery](https://jquery.com/)
    * For the navbar dropdown and for the highlighting of icons and changing text on rules page
    * v.3.5.1
* [Favicon Generator](https://realfavicongenerator.net/)
    * To create the favicon
* [Google Maps API](https://developers.google.com/maps/documentation)
    * To create markers on Where To Play page.

## Testing
* W3C CSS Validator came back with no errors
* W3C HTML Validator came back with no errors
* JSHint came back with no warnings 
* *As a parent I want to understand the rules of this game so I can play it with my children and teach them how to play* – From the main page there is the navbar which directs you to the rules page and on the menu breaks it down into different sections so you can navigate straight to the part of the page you like. The rules are then laid out  in detail for the parent to read.
* *As a parent with not a lot of room in my house, I want to find somewhere to go and play the game which is appropriate for the game* – the navbar leads you directly to a where to play section which has some information about different venues you could play at as well as a map with markers showing the different places and links to their respective websites. There is also a link in the footer to this page.
* *As a child who wants to play the game I want to understand the rules in an accessible way so I can play it with my friends* – again, the rules page is easy to navigate to and using JavaScript, the rules themselves are interactive so you can hover over symbols and it will tell you what they mean, as well as a little test as to whether a dice roll means an attack hits or misses to check understanding.
* *As a child I want to be able to look at all the characters easily so I can decide which one I want to play* - On the characters page it has a brief description of each character and a character sheet which they are able to download with a cool illustration of what the character may look like.
* *As a parent I want to be able to easily download the rules so that I don’t have to sit in front of my computer when playing* – The main jumbotron link will download a PDF of the rules. Also in the navbar at the top of the page is a download link and also there is a download link in the footer of each page,

When testing I had initially intended the main jumbotron image fixed so when you scrolled DoktorJames would always be looking at you in a vaguely spooky way but this proved difficult to maintain on certain browers so I stopped showing off and left it as a scrolling image. The same can be said for the space background behind the combat abilities on the rules page.

With those combat symbols which I used JavaScript to arrange in a circle and react when hovered over, I found that on smaller screens, one of the symbols would disappear off the edge. I have since change that so when it gets to a smaller sized screen it just becomes a table of information which is easier to look at on a phone.

On smaller screens I have got rid of a lot of the images on the main page to free up space and make it more accessible. I have also rearranged the order of the rules page in terms of where the examples would appear so that it makes more sense with the example appearing after the text as opposed to before it. The long line of skill symbols also splits into two lines to make it easier to look at.

On the google page, on smaller screens the map is on top and the descriptions jump below it, appearing on more than two lines as the screen decreases in size so as not to appear too tight together.

### Fixed Bugs
When testing, I found that the skill symbols did not jump onto two lines neatly. On smaller screen sizes they went from being in a nice long row to being in one deep column which did not look as nice. After experimenting a lot I changed the structure of the bootstrap grid to make so rather than 8 lots of 1 column, each with one symbol in, I made it two 4 columns with four symbols in each so that when the screen size decreased it when into two neat rows. It meant I had to adjust the padding and margin somewhat so that they were still evenly laid out on both rows.

## Deployment
To deploy the site I followed the following steps:
1.	On my GitHub repository I went to Settings
2.	Under “GitHub Pages”, I used the Source dropdown to select master branch as the publishing source.

If you want to clone the repository follow these steps.
1.	In your terminal change the working directory to the one where you want the copied directory.
2.	Type `git clone https://github.com/JDBennison/DJRPG.git` and press Enter

## Credits
### Content
•	The text was written by James Bennison and helped by Timothy Goose.
•	The character of Doktor James was created by James Bennison and Timothy Goose
### Media
•	The images and illustrations were created by Meni Etim www.etimarts.com
•	The character sheets were created using Canva.com 
### Acknowledgements
•	The game structure was inspired by Hero Kids and Dungeons and Dragons

