// // const cds = require('@sap/cds');

// // cds.on('bootstrap', app => {
// //     app.use((req, res, next) => {
// //         req.user = new cds.User({ 
// //             id: 'dhanushwar.mohan@erproots.com', 
// //             roles: ['employee']  // Change to 'employee' to test employee access
// //         });
// //         next();
// //     });
// // });

// // module.exports = cds.server;


// // const cds = require('@sap/cds');

// // cds.on('bootstrap', app => {
// //     app.use((req, res, next) => {
// //         req.user = new cds.User({ 
// //             id: 'employeeUser', 
// //             roles: ['employee']  // Simulate employee access
// //         });
// //         next();
// //     });
// // });

// //module.exports = cds.server;


// const cds = require('@sap/cds');
// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');

// const users = {
//     "manager1": { id: "manager1", roles: ["manager"] },
//     "employee1": { id: "employee1", roles: ["employee"] }
// };

// cds.on('bootstrap', app => {
//     app.use(bodyParser.urlencoded({ extended: true }));

//     // 🔹 Enable sessions to persist login state
//     app.use(session({
//         secret: 'my_secret_key',  // Change this to a secure value
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: false } // Set true if using HTTPS
//     }));

//     // 🔹 Serve a simple login page
//     app.get('/login', (req, res) => {
//         res.send(`
//             <form action="/authenticate" method="POST">
//                 <label for="username">Username:</label>
//                 <input type="text" id="username" name="username" required>
//                 <button type="submit">Login</button>
//             </form>
//         `);
//     });

//     // 🔹 Handle user authentication
//     app.post('/authenticate', (req, res) => {
//         const username = req.body.username;
//         if (users[username]) {
//             req.session.user = users[username]; // Store user session
//             res.redirect('/');
//         } else {
//             res.send("Invalid user! <a href='/login'>Try again</a>");
//         }
//     });

//     // 🔹 Middleware to apply user authentication
//     app.use((req, res, next) => {
//         req.user = req.session.user || { id: 'employee1', roles: ['employee'] };
//         console.log("User:", req.user.id);
//         console.log("Roles:", req.user.roles);
//         next();
//     });

//     // 🔹 Logout Route
//     app.get('/logout', (req, res) => {
//         req.session.destroy(() => {
//             res.send("Logged out. <a href='/login'>Login Again</a>");
//         });
//     });
// });

// module.exports = cds.server;
