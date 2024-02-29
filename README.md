# Data Kahani Website
A home for my projects, tutorials and other relevant docs.
#### Link: https://sobo94.github.io/

----
## The Making of my Biography.
This project took some months to make and was indeed a very nostalgic project.
I used the following tools, code and libraries:

- Flourish Studio and Canva is the main tool I use for Data Kahani.
- Google Services: Android, Takeout, Maps and Timeline. 
- Ontario GeoHub by ESRI:  for Official municipality polygon of Ontario.
- GeoJson.io by Mapbox: for coordinate information and more geojsons.
- Maputnik: A Open Source Map designing tool, was helpful to understand map zooming, its relationship
  to the coordinate system and a better understanding of placing camera/viewport for individual chapters.  
- Python Scripts: 
	1) Scripts to extract relevant Json into csv format using Pandas. 
	2) Cleaning data using Postal Codes, Timestamp, Address labels and Geolocation. 
	3) Scripts to extract relevant GeoJson polygons using the GeoPandas.    
- Github Pages: For hosting the website with the Flourish Embed. 

----
## E07: Analysis, Thoughts and things I found interesting.
- My School in Dubai, Dubai Scholars was actually at the border and technically in Sharjah. The GeoJson for Dubai actually gets that right.
- The trip to Nothern Pakistan consisted of driving on semi permenant roads off the mountains. K2 the second highest mountain peak is located there.
- I am still close friends with all my childhood besties. 
- Google timeline gets labels correct down to the building and the room numbers.
- Older buildings like PAS (physcology, anthropology and Sociology building) the second most frequently visited building was never in my timeline.
  the building is made from concrete and I suspect it to be a geolocation deadzone.
- The 10 years google timeline data shows the transition of companies and businesses that were in a particular building. Example: Gas stations transitioned from ESSO to Mac to PetroCanada.
- Geolocation precision of 4 decimal points is sufficent with Flourish. 4 means house level. Depending on the map service you use, you can get precision down to 16, 8 decimal point.
  GeoJson.io does 8, so does google timeline which means precise to cellphone level. Google Map does an insane 16 decimal point which would be down to like a rock or pebble. Probably a good reason for it that I dont know.
- Time format in flourish: Using YYYY-MM-DD format helps with sorting based on time. Millisecond precision time is a layer on insanity I don't want to know about.
- Your home location, roads and city around you sets your travel radius. 
- Labels over time: Conestoga Changed it's campus labels atleast 3 times as more campuses were built.
- Given a span of 30 years, I had to make a design choices as to how many chapters to include, two major consideration were people, new location and phases of life.
- Removing Rows: Use Postal Code to remove rows you don't want. I wrote many variations of scripts to perform basic CRUD operation. it gets complicated really fast.
  
 ----
## E07: What functional purpose does this serve?
- A suggested use case was when your filing immigration documents it will come in handy.
- To keep in touch with people and loved ones who don't live with you. I sent various versions of this to all my friends and they liked the idea.
- For the community to check up and see more updates like what events, buildings or businesses I visited.
- For people who don't know you. It serves as a good intro, get to know me.
- Get people to hire me to make personalized biographies for themselves.
- It's something that is exciting.
