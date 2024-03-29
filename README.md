# matchmake.ink
matchmake.ink is a website built to provide the best competitive experience for splatoon players by creating a rating system. The final project should have a matchmaking function (hence the name), and allow teams to participate  

# Roadmap (subject to change)
## v1.0.0 - September 30 2023
- [x] User account creation and login  
	- [x] Linking discord account  
- [x] Team account creation
	- [x] Users can create teams
	- [ ] Users can join teams created by other users
- [ ] Team ratings
	- [ ] Teams are given a rating using a system such as elo-mmr or glicko (not sure yet)
	- [ ] TO's can submit matches from their own tournaments
	- [ ] Teams can submit matches they scheduled on their own
## v2.0.0 - December 20 2023
- [ ] League system?
  - [ ] Similar to LUTI, but automated
  - [ ] Matchmaking based on rating

# Contributors
All contributors are welcome! If you don't know code, but are a TO, artist, or just want to help, feel free to DM FireSquid#8881 on discord. For programmers, we use React with typescript for the frontend. Issues should be well documented, so work on whatever you wish. If you'd like to become more involved as a developer, dm FireSquid#8881 about joining the team.

## TOs
If you're a tournament organizer, you will at some point be able to submit results of your tournaments to matchmake.ink. Follow us on twitter and join our discord for more info!

## Artists/Designers
We will eventually need help with design and color with the website, as well as art for specific elements.
## Developers
All developers are welcome, regardless of experience. If you're reading this and have no clue what stuff means, feel free to send me a dm and I can walk you through it!
### Guideliens and info
We're using Vite, React, and Typescript deployed to netlify on the frontend, and we're using Supabase on the backend. Some general guidelines include:
1. Don't hardcode any text content so that it's easier to add translation later.
2. Don't hardcode any colors.
3. If it's important enough to be global, it should be wrapped in its own module
4. Keep each issue to its own branch and make PR's to main
5. Fetch from main often to avoid conflicts
6. Practice TDD (Test Driven Development) as much as you can
7. Only have one component per file
	- Additionally, name unit tests `[test-file].test.ts[x]`. So `Profile.tsx`'s unit tests would be named `Pofile.test.tsx`
8. Read [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)

The main branch is our primary development branch, with PR's made to production being deployed to the website.

### How to join the github org
Once you've made an accepted PR, feel free to DM me on discord (FireSquid#8882)
### How to start development
1. Clone the repo with whatever you want
2. Open the project in your editor of choice
3. Run `npm install`
4. Create your .env file:
	- As of 6-3-2023, your .env file needs two variables
	- `VITE_SUPABASE_URL`, which should be `"https://zdxeeicdysjerhtalkbi.supabase.co"`
	- `VITE_SUPABASE_ANON_KEY`, which I can't give out randomly. Contact FireSquid#8882 if you'd like to start developing and want this.
5. Run `npm run dev`
6. Choose an issue to start working on. If you're new, look for stuff marked with `good-first-issue`
