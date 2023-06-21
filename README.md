Study - vue.js routes and SPA (and IIS)
=======================================

A "study" project exploring vue.js exploring routes and also learned about IIS deployments etc. 

I started with a simple HTML app I'd built (https://github.com/gitberry/MobileFirstHTMLexample) and see how this might translate to vuejs.   

This is a SPA (Single Page Application) - and I deployed it on a shared hosting (IIS) subfolder - ( https://northberry.ca/kristii ) 

Routes and IIS
--------------
#Routes - in IIS - the web.config tells it how to allow the SPA to mess with the path(routes) - otherwise it doesn't understand and bjorks

Subdirectories
--------------

#Subdirectories - routes can bjork on subdirectories so the help from this:
https://hackernoon.com/how-to-serve-a-vite-vue3-page-inside-a-sub-folder

which essentially alowed me to modify vite.config.js and routes>index.js properly - and then it's good to go! (assuming all links and src are relative!)

Inspiration
-----------
#Inspiration for next study - use an API to dynamically provide the data...
