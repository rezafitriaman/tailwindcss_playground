module.exports = {
	plugins: [		
		require('precss'),
		require('postcss-preset-env')({ stage: 1 }),
		require('postcss-import'),
		require('tailwindcss'),
		require('autoprefixer')({
			grid: true,
			flex: true
		}),
	]
}