module.exports = {
	plugins: [		
		require('postcss-import'),
		require('tailwindcss'),
		require('precss'),
		require('postcss-preset-env')({ stage: 1 }), 
	]
}