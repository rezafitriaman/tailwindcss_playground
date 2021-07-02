module.exports = {
	plugins: [		
		require('postcss-import'),
		require('postcss-nesting'),
		require('tailwindcss'),
		require('precss'),
		require('postcss-preset-env')({ stage: 1 }), 
	]
}