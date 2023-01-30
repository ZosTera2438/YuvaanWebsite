How to serve this file-->

1. Place the build folder as it is in "public" directory
2. Now if using Express,
to serve staic file

app.use('/events',express.static("public/build"))

---> with this the page would be served at path https://website.com/events
