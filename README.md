I wanted to take a simple app I'd built in HTML (https://github.com/gitberry/StudyMobileFirst-1-HTMLPlain) and see how this might translate to vuejs.   

It is now a SPA (Single Page Application) - and I put it on my shared hosting account site - ( https://northberry.ca/kristii ) 

Note:

#Routes - in IIS - the web.config tells it how to allow the SPA to mess with the path(routes) - otherwise it doesn't understand and bjorks

#Subdirectories - routes can bjork on subdirectories so the help from this:
https://hackernoon.com/how-to-serve-a-vite-vue3-page-inside-a-sub-folder

which essentially alowed me to modify vite.config.js and routes>index.js properly - and then it's good to go! (assuming all links and src are relative!)

#NEXT - use an API to dynamically provide the data - then we'll be cooking with gas!!