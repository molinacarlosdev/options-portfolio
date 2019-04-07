const express = require( 'express' )
const app = express()

//Fire up the server
const port = process.env.PORT || 5000;

app.get( '/', ( req, res ) => res.send( `Response from the server.... at port http://localhost:${port} ` ) )


// { force: true }
// db.sequelize.sync().then(() => {
app.listen( port, () => {
    console.log( 'App listening on PORT ' + port );
} );
// });
