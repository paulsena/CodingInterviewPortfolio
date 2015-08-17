/*
 * Analytics Online Coding Challenge
 * Author: Paul Senatillaka > paulsena@gmail.com
 * Date: 6/11/2015
 * 
 * Parses two tab delimited files and answers:
 *   1.) What are the top 5 categories by sales
 *   2.) What is the top product by sales in category 'Candy'
 *
 * Use:  nodejs <filename> to run
 * Could have built using JS Pseudo Classical Classes but kept it to simple functions for now
 * Decided to leave two data structures seperate for normalization of data, and perform join operations on lookup. 
 * On after thought, would have joined data together in one flattened data struct to save time on lookup operations and time coding.
 */

var fs = require('fs');
//Could use native JS instead of underscore if ECMA version is 1.5+ since it includes map, filter, reduce functionality.  However underscore acts as a nice shim for older environments and has extra utility functions.
var _ = require('underscore');

var productsFile = 'products.tab';
var salesFile = 'sales.tab';
var productData = [];
var salesData = [];

//Builds an array of objects from TSV file and dedupes integer and string data. Combined integer and string deduping to save code.
function loadFile (fileName) {
	var data = {};
	var rawCSVData = fs.readFileSync(fileName);
	
	//Get Rows
	var rows = rawCSVData.toString().split('\n');
	rows.forEach(function(row){

		//Builds an associative array (hash map) of data to dedupe multiple keys.
		//Specials case in here to dedupe by addition of value if it is a number.
		var cols = row.split('\t');
		if (cols[0] && cols[1]) {
			if (!parseInt(cols[1])) {
				data[cols[0]] = cols[1];
			} else if (data[cols[0]]) {
				data[cols[0]] += parseInt(cols[1]);	
			}
			else {
				data[cols[0]] = parseInt(cols[1]);
			}
		}
	});

	//Convert our associative array into an array of objects for better handling in map filter functions.
	var arrayData = _.map(data, function(val,key) { 
		return {name: key, value: val};
	});

	return arrayData;
}

//*** Question 1: *****
//Calculate Top 5 Categories by Sales
function top5Categories() {

	//Group Products by Category. Returns Associative array where Key is category and Value is array of products
	var productsByCat = _.groupBy(productData, function(item) {
		return item.value;
	});

	//Calcutes total sales numbers for each category
	var catSales = _.map(productsByCat, function(products,category) {
		//products = Array of Product Objects
		//category = Category Name

		//Gets array of sales numbers for each product
		var catSalesArray = _.map(products, function(item){
			var salesItem = _.findWhere(salesData, {name:item.name});
			return salesItem ? parseInt(salesItem.value) : 0; //Handles mismatches in join
		});

		//Cumulate sales totals for category
		var catSalesTotals = _.reduce(catSalesArray, function(a,b) {return a+b});
		
		return {name: category, value: catSalesTotals};
	});

	//Calculate Top Sales and slice top 5.
	var top5Categories = _.sortBy(catSales, function(item) {
		return parseInt(item.value);
	}).slice(-5);

	console.log("\nTop 5 Categories by Sales:");
	console.log(top5Categories);

}

//*** Question 2: *****
//Calculate top Product by Sales in Category Candy
function topProductbyCategory(category) {

	//Get all Candy Products
	var candyProducts = _.where(productData, {value:category});

	//Find Sales by Candy
	var candySales = _.map(candyProducts, function(item){
		return _.findWhere(salesData, {name:item.name});
	});
	
	//Remove empty records. Where Product name didn't match Sales Product Name.
	candySales = _.filter(candySales, function(item){
		return item;
	});

	//Calculate Top Sales and slice top.
	var topCandySale = _.sortBy(candySales, function(item) {
		return parseInt(item.value);
	}).slice(-1);
	
	console.log("\nTop Product Sale in Candy Category:\n" + topCandySale[0].name + " - SALES: " + topCandySale[0].value);
}

productData = loadFile(productsFile);
salesData = loadFile(salesFile);
top5Categories();
topProductbyCategory('Candy');