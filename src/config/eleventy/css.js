const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
	outputFileExtension: 'css',
	compile: async (inputContent, inputPath) => {
		return async () => {
			let output = await postcss([autoprefixer]).process(inputContent, {
				from: inputPath,
				to: './public/assets/css',
			});

			return output.css;
		};
	},
};
