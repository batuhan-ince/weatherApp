# Song Recommendation for Weather App

Weather Conditions can alter our moods drastically, so I decided to implement a music recommendation app according to the weather.


You can see the live version of the  app from [here](https://weather-app-cebaa.web.app/).

### To-Do

- [x] Open Weather API Implementation to gather Current Weather 
- [x] Spotify API Implementation to Recommend Music
- [x] Responsive Design
- [x] Heuristic Song Recommend Algorithm
- [x] Deploy a Live [Version](https://weather-app-cebaa.web.app/)
- [ ] Full Documentation 
- [ ] Tutorial 
- [ ] Improve Song Recommend Algorithm with Learning


### Weather - Audio Features Table

I wrote a heuristic algorithm to model the relation between the weather and the mood. I used 10 different weather conditions and 4 audio features. Audio Features have the value between 0-1 according to the weather conditions:



|                            	| Valance 	| Danceability 	| Energy 	| Liveness 	|
|----------------------------	|---------	|--------------	|--------	|----------	|
| **Clear Sky**              	| 1       	| 1            	| 1      	| 1        	|
| **Snow**                   	| 0.9     	| 0.75         	| 0.75   	| 0.5      	|
| **Few Clouds**             	| 0.8     	| 0.8          	| 0.7    	| 0.75     	|
| **Scattered Clouds**       	| 0.7     	| 0.65         	| 0.6    	| 0.6      	|
| **Broken Clouds**          	| 0.6     	| 0.6          	| 0.6    	| 0.6      	|
| **Overcast Clouds**        	| 0.65    	| 0.6          	| 0.5    	| 0.5      	|
| **Rain**                   	| 0.4     	| 0.4          	| 0.4    	| 0.4      	|
| **Showering Rain**         	| 0.3     	| 0.2          	| 0.25   	| 0.25     	|
| **Mist**                   	| 0.3     	| 0.2          	| 0.2    	| 0.1      	|
| **Thunderstorm**           	| 0.1     	| 0.4          	| 0.2    	| 0.2      	|