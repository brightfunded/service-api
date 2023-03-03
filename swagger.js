
// const swaggerAutogen = require('swagger-autogen')()

// const outputFile = './swagger_output.json'
// const endpointsFiles = ['./endpoints.js']

// swaggerAutogen(outputFile, endpointsFiles)
const fs = require('fs');
// const swaggerModel = require('./swaggerModel');
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles=[];
const folder = './routes/';

console.log("============Generating Swagger===========");
fs.readdirSync(folder).forEach(file => {
  console.log("Files Name::",file);
  endpointsFiles.push(folder+file)
});
console.log("File Path::",endpointsFiles);
// const endpointsFiles = [
//     './routers/*.js',
// ]

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})