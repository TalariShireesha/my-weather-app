# My Weather App
This project is a **React + Vite Weather App** that fetches real-time weather data using the [OpenWeather API](https://openweathermap.org/api).  
It allows you to search any city, toggle temperature units between Celsius and Fahrenheit, and see the weather conditions in a clean, responsive UI.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies required for the project.

### `npm run dev`

Runs the app in development mode using Vite.  
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.  

The page will reload if you make edits, and you will see any lint errors in the console.

### `npm run build`

Builds the app for production into the `dist` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  

The build is minified and the filenames include hashes for caching purposes.  

Your app is ready to be deployed.

### `npm run preview`

Serves the production build locally so you can preview the final app before deploying.

### `npm run deploy` (Optional)

If you want to deploy the app to GitHub Pages:

```bash
npm run deploy

This will build the app and push it to the gh-pages branch.

Note: Deployment is optional — the app can run locally without it.

**### Environment Variables**

The project uses a .env file to store the OpenWeather API key:

VITE_WEATHER_API_KEY=your_api_key_here


Important: Never push your .env file to GitHub to keep your API key safe.

**### Learn More**

You can learn more about the technologies used:

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [OpenWeather API Documentation](https://openweathermap.org/api)

**### Code Splitting**

For advanced performance optimizations in React, see [Code Splitting](https://reactjs.org/docs/code-splitting.html).

**### Analyzing the Bundle Size**

See [Analyzing the Bundle Size](https://vitejs.dev/guide/features.html#analyzing-bundle-size) for tips on checking the build size.

**### Making a Progressive Web App
**
This app is not a PWA by default, but you can add PWA support using Vite plugins.  
More info: [Vite PWA Plugin](https://vite-plugin-pwa.netlify.app/)

**### Advanced Configuration**

Advanced Vite configurations can be found here: [Vite Configuration](https://vitejs.dev/config/).

**### Deployment**

Refer to [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html) for deployment guides.

**### `npm run build` fails to minify**

Refer to [Vite Troubleshooting](https://vitejs.dev/guide/troubleshooting.html#build-fails) if you encounter build errors.

