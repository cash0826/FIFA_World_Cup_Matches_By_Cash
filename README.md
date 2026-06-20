# FIFA World Cup 2026
This is a React Single Page Application that returns ongoing FIFA World Cup Matches by date.

## Description
This app lets soccer fans keep track of the world's most important sporting event: The FIFA World Cup. Upon loading the home page, users will be able to see 
matches lined up for today, along with current scores if the game has already started or concluded. Users can navigate to view matches for tomorrow, or search matches by date. Additionally, soccer fans can navigate to see the live standings of the tournament. Finally, the About page provides an exciting overview of 2026's FIFA World Cup tournament. 

## API (Free Key Required)
* This application is ran by a public external API hosted by [Rapid API](https://rapidapi.com/hub). 
* To obtain a key, please visit: [SportAPI](https://rapidapi.com/rapidsportapi/api/sportapi7).
* Select the basic plan which is 0 cost.
* You can find your X-RapidAPI-Key by navigating to any endpoint in SportAPI.

## Installation / Set Up
1. Fork or Clone this repository from GitHub.
    ```
    git clone <repository-url>
    cd FIFA_World_Cup_Matches_By_Cash
    ```
2. Install Node Dependencies from your terminal.
    ```
    npm install 
    ```
3. **IMPORTANT** From the main repository, create a '.env' file.
    ```
    type nul > .env
    ```
    Navigate to the newly created .env file and declare the following variable:
    ```
    VITE_RAPIDAPI_KEY=
    ```
    Add your API key from SportAPI to the VITE_RAPIDAPI_KEY (without quotes).

    Alternatively, you can go to `src > services> GetMatches` and `GetStandings`, and replace `import.meta.env.VITE_RAPIDAPI_KEY` with your API Key (with quotes). 
4. Start the development server.
    ```
    npm run dev
    ```

As a reminder, you can find your X-RapidAPI-Key by navigating to any endpoint in SportAPI.

## API Endpoints

Two URLs from SportAPI are used to power this SPA:  

- `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/{16}/events-on-date?date={YYYY-MM-DD}`  

Parameters:  
{YYY-MM-DD} is the date to return events/matches occuring on that day  
{16} is the unique tournment id used to return tournments matching `FIFA World Cup`  


- `https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/{16}/season/{58210}/standings/total`  

Parameters:
{16} is the unique tournment id used to return tournments matching `FIFA World Cup`  
{58210} is the unique season id that returns FIFA World Cup matches from 2026  

Endpoints:  
* `GET /unique-tournament/16/events-on-date?date=` —  Returns events object with full details of matches occuring =+-1 day of the given date  
* `GET /unique-tournament/16/season/58210/standings/total` — Returns current tournament standings. For FIFA World Cup, it returns the standings of each of the 12 groups, including "rows" object with each team, wins, losses, draws, points and other details. It also returns an additional "Third-Place Teams" Group with rows.

