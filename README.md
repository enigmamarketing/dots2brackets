# Dots 2 Brackets
converts a dot notation object into a bracket notation. The main goal was to be able to use some vars with angular.
	
	data.example.12345.title

will be converted to

	data['example']['12134']['title']

## Usage

	var dots2brackets = require('dots2brackets'),
        varName = dots2brackets('data.example.12345.title');
