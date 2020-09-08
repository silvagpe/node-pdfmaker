//const basicPdf = require('basic-pdf.js');

const basicPdf = require('./basic-pdf');
const tablePDF = require('./tables-pdf')

basicPdf.generate();
tablePDF.generate();
