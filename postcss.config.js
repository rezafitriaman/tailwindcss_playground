module.exports = {
	plugins: [
		require('postcss-preset-env')({ stage: 1 }),
		require('autoprefixer')({
			grid: true,
			flex: true
		}),
	]
}