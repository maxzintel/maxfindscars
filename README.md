# MaxFindsCars (DEPRECATED)
## Moved site code to github.com/maxzintel/maxfindscars-next

## Local Dev Environment Setup Directions

* `cd client`
* `npm install`
* `npm run build:css` builds the tailwind css file and watches for changes.
* Open a new terminal window, navigate to this code repo.
* `cd ../server`
* `npm run dev:backend` starts the backend server on port 5000.
* `cd ../client`
* `npm run build` builds the frontend files that React serves to the browser.
* `npm run start` starts the frontend on port 3000
* Navigate to the frontend at `localhost:3000`, which should be proxying requests to the backend at `localhost:5000`.
