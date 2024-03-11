# Tutorial 5
 
- _Date Created_: 03 MAR 2024
- _Last Modification Date_: 11 MAR 2024
- _Deployment URL_: <https://tutorial5-xr93.onrender.com>
- _Git Tutorial-3 URL_: <https://git.cs.dal.ca/jgajjala/csci-5709-tutorials/-/tree/main/Tutorial5>
 
## Authors
 
- [Jahnavi Gajjala](jh707761@dal.ca)
 
## Deployment
 
Backend/Server code was created using express and node. Backend functionality was written using the required logic for completing all the expencted tasks. Installed the packages using : "npm install" and then executed the main server code using : "node app.js".

Deployment Link: https://tutorial5-xr93.onrender.com
 
## Built With
 
- [Node](https://nodejs.org/docs/latest/api/) - Server
- [npm](https://docs.npmjs.com//) - Dependency Management
 
## Sources Used
 
1. Tutorial (NodeJS): https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj8wJ-H_-yEAxXaD1kFHXSvDQ0QFnoECB8QAQ&url=https%3A%2F%2Fwww.tutorialsteacher.com%2Fnodejs&usg=AOvVaw3GAn6ASYtpuoc_H9ilAPsp&opi=89978449
2. Tutorial (Express): https://www.w3schools.com/nodejs/
3. Render deployment tutorial: https://www.youtube.com/watch?v=vkCgvEVTIgw&pp=ygUWUmVuZGVyIGRlcGxveW1lbnQgbm9kZQ%3D%3D
 
### app.js
 
_Lines 13 - 15_
 
```
function randomIdGenerator() {
  return crypto.randomBytes(10).toString("hex").substring(0, 10);
}
 
```
 
- The study conducted at the site (https://www.npmjs.com/package/crypto-js)  served as the foundation for the programming logic used to create the randomIdGenerator function. Using the mentioned package, I then created a function which would create a random id for every user addition.

 
## Acknowledgments
 
- The provided code made its workings and running logic easier for me to learn and comprehend. I appreciate all of your hard work and dedication in creating it.The knowledge I gained from the code greatly influenced how I approached researching and understanding other methods and approaches. I am incredibly grateful for the efforts its developers have made.