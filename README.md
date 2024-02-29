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
## E07: Thoughts, Analysis, Design Choices and Things I found interesting.
- My School in Dubai, Dubai Scholars was actually at the border and technically in Sharjah. The GeoJson for Dubai actually gets that right.
- The trip to Nothern Pakistan consisted of driving on semi permenant roads off the mountains. K2 the second highest mountain peak is located there.
- I am still close friends with all my childhood besties.
- Google timeline gets labels correct down to the building and the room numbers. In my dataset, I found numerous occurances of room information. 
- Older buildings like PAS (Physcology, Anthropology and Sociology building) the second most frequently visited building was never in my timeline.
  This building is old and made from concrete. My guess here is that limited cellphone connectivity inside the building makes it a geolocation deadzone.
- Subways stations are also a hit and miss due to the same reasoning.
- The 10 years google timeline data shows the transition of companies and businesses that were in a particular building. Example: Gas stations transitioned from Esso to PetroCanada.
- Geolocation precision of 4 decimal points is sufficent with Flourish. 4 means house level. Depending on the map service you use, you can get precision down to 16 or 8 decimal point.
  GeoJson.io does 8, so does google timeline which means precise to the level of your cellphone. Google Map does an insane 16 decimal point which would be down to like a rock or pebble.
- Time format: I found it helpful to use YYYY-MM-DD format as you can use the sort features to change from ascending to descending order.
- Your home location, roads and city around you sets your travel radius. 
- Labels over time: Conestoga Changed it's campus labels atleast 3 times as more campuses were built.
- Given a span of 30 years, I had to make a design choices as to how many chapters to include, two major consideration were people, new location and phases of life.
- Removing Rows: Use Postal Code to remove rows you don't want. I wrote many variations of scripts to perform basic CRUD operation. Lets just say, I had lots of bad ideas.
- Cellphones over the years: I used to have a Nexus 5, then OnePlus phone and currently a Pixel phone. With Pixel devices the quality of the data has gotten alot better.

----
## E07: Why did I make this? 
- To give credibility to my other work.
- To keep in touch with people and loved ones who don't live with you. I sent various versions of this to all my friends and they liked the idea.
- To share a travel log with the community and to share updates about what events, sites, buildings or businesses I visited.
- For people who don't know you. It serves as a good intro, get to know me.
- Get people to hire me to make personalized biographies.
- It's something that is exciting.
- Ideas inspires ideas. 

## E07: Responses from people?
- Everytime I have shared this with friends, I ended up having an hour long conversation.
- A friend suggested that it would be a useful thing when doing his immigration application.
