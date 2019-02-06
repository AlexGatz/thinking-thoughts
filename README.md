## TL;DR
Uses next.js, express.js, mongodb, and will be hosted on heroku. A custom react-native app sends messages to the express.js server which auto populates to the webpage for everoyone to read. Best for those random ideas you have while on the fly! Coming soon: "thoughts about thoughts" feature. 

To use this you must add your own credentials.js file with a username and password and also change the url to match your mongodb (I used mLab). Afterwards you can run the server by simply typing `npm run dev` per usual after installing the dependencies of course. 

## Description
I wanted to come up with a super simple project where I could learn a combination of aspects of web development that I wanted to imporove upon. Also I wanted to learn how to play with next js (which isn't that different than just using react but there certainly are some major differences).

Essentially, I wanted to learn how to tie together a basic front end that handles stacking components from bottom to top of a cleanly styled page. Each component woudl just be a sort of "post" that contains information stored on a remote database.

The database is a MongoDB that I will manage and host myself which will be paired with an express js server which will handle authenticaion (again setup myself). I will fetch the data, and use the map function to create a post for each message available in the DB.

Next, the other major portion of this project is the phone app. Initially I wanted to be able to send a text message to the server that only excepts messages from myself (which I realized could potentially be unsecure still) to populate the DB. Now what I am doing is creating a basic phone app using React-Native that creats a secure session and will beable to post, edit, and delete items on the DB.

That's pretty much it. It's really just a basic web app, tied the same server as a really basic phone app that all talks to each other.

## What I will learn:
Next js, Express js, MongoDB, Heroku hosting and deployment, React-Native.

## Why even bother?
Honestly, I love to learn. I'm a life long learner and truly enjoy the challenge of creating fun little projects to push myself further. This is just a means of tieing together a lot of things I've played with in the past. This is my first "full-stack" project.

## Progress update!
### 2019-02-06
Right from the beginning I will say that I learned the hard way that I should have read the docs a little more closely in reguards to `getInitalProps()`. This next js specific function pre hydrates props with data and is a great place to fetch data from api's or where ever. The issue came up when I thought I could use this special function in child components. I'm sure many are aware of this fact by now; it would appear that when taking on learning javascript/react js/next js/express js/node js all at the same time it can take a little while to convince yoruself that each piece of code you put together are working properly :P ... 

So what I learned was: end points are easy to setup with express.js; promises are actually really amazing and are very intuitive for some reason; mongoose makes chating with a mongoDb db really easy, and pre-populating a schema with data is great; isomorphic-unfetch is an impressively small libaray and works very well, even for ajax calls; next js per component styling works very well, although my understanding of css is limited so perhaps there are limitations I'm unaware of at this time. All you have to do is: ``` <style jsx>{` div {//css stuff here} `}</style>```

That's all I have for today. 
    
