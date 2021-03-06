# sei-project-4

## Website Overview

Artly has been curated as a platform to uplift and support small female and non-binary artists. Artly puts art lovers together in one place to share art, support and love. But most importantly, allows you to buy and sell art all in one place! You don't have to be an artist to take part, just make sure to sign up which will allow you to get in touch with our Artists. If you're an Artist, make sure to register in order unlock some awesome features of our app such as upload and edit your artwork, links to your socials, and view enquiries on your Art. We hope you love Artly as much as we do.
<br><br />

## Timeframe
7 days
2 person pair-coded full-stack project
<br><br />

## Technologies used:
•	JavaScript | React.js

•	Mongo.db | Django

•	CSS | Sass | Bulma

•	GitHub | TablePlus | Insomnia

•	Axios | Http Proxy Middleware | React-Notify-Toast | React-Router-Doms | React-Responsive-Carousel
<br><br />

## Project - Artly

You can find a hosted version here ----> https://artly-seir4.herokuapp.com/
<br><br />

## Website Details

1.	On loading, the website takes you to a slash page where you can pick which side of the site you would like to visit. The artist side, where you can create a profile and post art on the website or the Browsing/Shopping side where you can browse artists, favourite them to save them, view their art and enquire about the art.

### Splash
![Splash Page](WebsiteScreenshots/Splash-page.png)

<br><br />

2.	Artist Side - If you click to go through to the artist side, you are prompted to login (or register), then directed to your profile. On your profile, you have a profile picture and a cover photo and can add/display/edit art and link your page to you instagram. Note when you sign up you are asked if you would like to have an artist account or a viewer account and have an artist account allows you post art.

### Login
![Login](WebsiteScreenshots/Login-in-form.png)
### Register
![Register](WebsiteScreenshots/Register-form.png)
### Artist Profile
![Profile Artist second half](WebsiteScreenshots/Own-profile-view-with-edit-profile-button.png)
![Profile Artist](WebsiteScreenshots/Profile-view-for-artist-with-add-art-button-and-fave-artists.png)
### Art View as Owner of the art
![Art View Artist Owner of the Art first half](WebsiteScreenshots/Art-show-for-own-art.png)
![Art View Artist Owner of the Art second half](WebsiteScreenshots/Enquiry-view-on-art-for-own-Artist.png)
### Create Art Form
![Create Art form](WebsiteScreenshots/Add-a-piece-of-art.png)

<br><br />

3.	Viewer Side - If you click through to the Browsing side of the website, you are directed to a carousel which displays all of the artists on the site to browse. You can then click on these artist and view their profiles and then their art. Browsers can also set-up non-artist accounts, which unlocks features that allow them to and 'favourite' the artist to save them to view again later, enquire about art, and have their own profile.
### Carousel
![Carousel](WebsiteScreenshots/Home-page-with-caroursel.png)
### View an Artist when logged in
![Artist View Browser Logged in](WebsiteScreenshots/Profile-view-for-Browser.png)
![Art View Browser Logged in](WebsiteScreenshots/Art-show-page-for-a-browser.png)
### Artist Index Page
![Browse Artists Cards](WebsiteScreenshots/Art-Index-page.png)
### Non artist profile
![Non-Artist Profile](WebsiteScreenshots/profile-view-non-artist.png)
### Enquiry form
![Enquiry form](WebsiteScreenshots/Enquiry-form-on-Art.png)

<br><br />


4.	The pages such as viewing profiles, or your own profile or view art all vary (what is rendered) depending on if you are logged in, if you are an artist or a viewer and if you own the art.
For example:

### Art View when logged in
![Art View browser Logged in](WebsiteScreenshots/Art-show-page-for-a-browser.png)
### Art view when owner of the Art
![Art View Artist Owner of the Art first half](WebsiteScreenshots/Art-show-for-own-art.png) ![Art View Artist Owner of the Art second half](WebsiteScreenshots/Enquiry-view-on-art-for-own-Artist.png)

<br><br />

## Process

The starting point for this website was planning our website layout and the models for the backend. We made basic wireframes for the layout with AdobeXD and then we created a diagram on 'quick data base diagrams' and laid out the models we would be making with Django. Whilst planning, we also created a Trello board which broke down the challenge of our first full stack app into manageable chunks and written out on 'cards'. This allowed us to communicate well and monitor our progress.

### Diagram
![Model Diagram](WebsiteScreenshots/ERD.png)
### Layout
![Website Layout Wireframes](WebsiteScreenshots/wireframes.png)
<br><br />
We then focused on creating the models in the back end in Django, using Insomnia and TablePlus to check our work as we went along. To create the Back-End, we mostly spent our time pair-coding to make sure when one of us had to refer to the models later on we were both very clear on the terms used and the structures built.

``` python
class ArtListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, ) # you have to have to be logged in to view these

    def get(self, _request):
        arts = Art.objects.all() # gets all the art objects
        serialized_arts = PopulatedArtSerializer(arts, many=True) # uses the serializer to read the model
        return Response(serialized_arts.data, status=status.HTTP_200_OK) # returns the serializer in the response with a status

    def post(self, request):
        request.data['owner'] = request.user.id # assigns the owner as the person who made the request (getting it from the id)
        new_art = ArtSerializer(data=request.data) # gets the info from the serializer
        if new_art.is_valid():
            new_art.save() # if it is valid then save the art
            return Response(new_art.data, status=status.HTTP_201_CREATED) # return the new art in the response with the status that its been created
        return Response(new_art.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY) # return errors as well as unprocessable entity status
```

<br><br />
Once the Backend was built, we turned our attention to building our React.js Frontend app. We started by creating common elements that would be required by all the pages like the Navbar, the home page and the 404 page.
We split up the workload on the front end more; I took control of creating the forms and error handling for the forms (there are a lot forms!), and Eliza took on the role of making the profile page/the artist view page and the functionality that entailed. We split up the rest of the front end pretty similarly, jumping and helping each other whenever two brains were required.

### Errors Example:
![Login with errors](WebsiteScreenshots/Log-in-form-with-errors.png)
![Register with errors](WebsiteScreenshots/Register-form-with-errors.png)
<br><br />
We set up our day in morning stand-up when we outlined what we wanted to achieve that day, and who would take on what task. We often started with the more complex tasks, and pair coded them. Then moving onto tasks which we could complete on our own. We communicated throughout the day (using slack and zoom, as we were working remotely) and ultimately reached our MVP on time, this allowed us to add nice-have-features such as enquiries, favourites and general tidy-up/styling. This also ensured a smooth UX.
<br><br />

### Wins
We said at the beginning it would be cool to create a carousel to browse the artist but had never done anything like it previously, so working together to get that implemented was very rewarding.
<br><br />

### Challenges
The Carousel.
Designing the flow of the site.
Arranging the profile picture and cover photo.
<br><br />

## Key Learnings
A key learning was adding funky features, Such as the carousel. We set a really high expectation and expectation that this would be a monumental task, when in reality, it was but we just went through it slowly, read the docs and it worked. We learnt that if we approach things calmly, and with the impression that we will do it, it will get done and be a great feature. We learnt to trust the process, and also trust ourselves with our own code!

### Future features
Building full chat capabilities with notifications, not just one way enquiries.
eCommerce features.
Adding a calendar feature where artists can display gallery showings and events.
Allowing artist to create more personalised types which allows users to be able to search artists by these types.
