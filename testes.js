//import { xsltProcess, xmlParse } from 'xslt-processor'
//const { xsltProcess, xmlParse } = require('xslt-processor');

//import { xsltProcess, xmlParse } from 'xslt-processor'

//const xslt = require('xslt');

//var fs = require('fs');

// var xmlTest = fs.readFileSync("teste.xml", 'utf8');
// var xslTest = fs.readFileSync("teste.xsl", 'utf8');


// var pdf = require('html-pdf');
// var html = fs.readFileSync('teste.html', 'utf8');
// var options = { format: 'Letter' };

// pdf.create(html, options).toFile('teste.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/app/businesscard.pdf' }
// });

// options = {
//     fullDocument: false, // Is the output a complete document, or a fragment?
//     cleanup: true, // false will disable all of the below options
//     xmlHeaderInOutput: true,
//     normalizeHeader: true,
//     encoding: 'UTF-8',
//     preserveEncoding: false, // When false, always uses the above encoding. When true, keeps whatever the doc says
//     removeDupNamespace: true,
//     removeDupAttrs: true,
//     removeNullNamespace: true,
//     removeAllNamespaces: false,
//     removeNamespacedNamespace: true,
//     moveNamespacesToRoot: false,

//     // These two are mutually exclusive. Attempting to use both is the same as using neither
//     collapseEmptyElements: true, // Forces output of self-closing tags
//     expandCollapsedElements: false, // Forces output of separate closing tags
// };
// outputXmlString = xslt(xmlTest, xslTest, options);

// console.log(outputXmlString);


//console.log(testeXml);
//console.log(testeXsl);
//const html = xsltProcess(xml, xslt);

/*
const outXmlString = xsltProcess(
    xmlParse(testeXml),
    xmlParse(testeXsl)
);
*/

//console.log(outXmlString);

/*

const PDFDocument = require('pdfkit');
const fs = require('fs');
 
// Create a document
const doc = new PDFDocument();
 
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));
 
// Embed a font, set the font size, and render some text
doc
  //.font('fonts/PalatinoBold.ttf')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);
 
// Add an image, constrain it to a given size, and center it vertically and horizontally
// doc.image('path/to/image.png', {
//   fit: [250, 300],
//   align: 'center',
//   valign: 'center'
// });



 
// Add another page
doc
  .addPage()
  .fontSize(25)
  .text('Here is some vector graphics...', 100, 100);
 
// Draw a triangle
doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');
 
// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore();
 
// Add some text with annotations
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/');
 
// Finalize PDF file
doc.end();
*/


