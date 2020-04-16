const app      = require('express')();
const mongoose = require('mongoose');



mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}, (err) => {
    if (err) return console.error(`connection failed: (${ process.env.DATABASE })`);
   

    app.listen(process.env.PORT, () => {
        console.log(`running on :${ process.env.PORT }`);
    });
});