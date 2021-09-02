'use strict';
const React = require('react');
const {Text, Box, render} = require('ink');
const Typing = require('./other')
const App = ({name='terry'}) => (
	// <Box>
	// <Text>
	// 	Hello, <Text color="green">{name}</Text>
	// </Text>
	// </Box>
	render(<Typing/>)
);

  

module.exports = App;
