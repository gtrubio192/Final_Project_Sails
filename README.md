# The Click-n-Pick My Site

Final project for the Iron Yard - ** Use Trello for content creation flow **

##Description

 Start with why, then how, then what.

I believe that businesses and individuals alike should have the freedom to represent and express themselves through digital mediums easily, and affordably. We have always found forms of expression throughout human history - cave paintings, wooden signs, television commercials, hand written then typed books. All in an enduring quest to express ourselves and have our ideas and voices heard. These days, the most powerful medium of self expression is through the internet, but this also has certain set backs. There is a learning curve that not everyone can overcome or has to the time to. This is why I believe that my user friendly, click-and-pick webpage will be the light at the end of the tunnel for those seeking to proliferate their great ideas across the digital sphere. 

By using existing libraries and technologies, not so tech savvy internet users can now create their very own custom website in minutes. Using a series of checkboxes, users will have an array of color themes to choose from that better suit their individual or business needs. Additionally, users will be able to upload and change their logos or photos that they would like to share. 

** Use Trello for content creation flow **

Each ‘list’ will be a single web page 

Each ‘card’ will translate to a content box

Choose from 2 layout themes

Large image as header(upload panel at bottom of image section). Content boxes and navigation pane below.
Upload single image as entire background. Content boxes underneath
## User Stories

As a user I’d like to…choose from a variety of color themes for my site
As a user I’d like to…be able to change color themes after creating my site
As a user I’d like to…create content boxes 
As a user I’d like to…position these content boxes as I see fit
As a user I’d like to…edit/delete these content boxes
As a user I’d like to…use images from the internet on my site
As a user I’d like to…use images from my local computer on my site
As a user I’d like to…create blog posts
As a user I’d like to…sign in and feel secure that I’m the sole editor of my site (ME ME MEEE)
As a user I’d like to…break the internet. 
## Wire Frames

## Models

### User

username: string
password: (obfuscated) string
### Content containers aka “Box” 
url upload: string
choose a file: image file
text: string
Moveable: boolean
id: string
position- top and left: ints

### Blog “Box”

### “Page” - single page such as Home, About, etc
“box”: object
## API’s, Plugins, Libraries, and Frameworks

Drop zone: Drag and drop images to upload with a preview http://www.dropzonejs.com/#
Draggable and Resizable: jquery library that allows you to move elements around with your mouse http://jqueryui.com/draggable/ http://jqueryui.com/resizable/
ORRRR
DOPE! http://webix.com

Mandrill Mail API Key: Required 
