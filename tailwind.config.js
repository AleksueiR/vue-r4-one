const postcss = require('postcss');

module.exports = {
    theme: {
        screens: {
            // sm: '640px'
        }
    },
    variants: {
        /* border: ['supports-grid'],
        display: ['supports-grid'],
         */ flex: ['supports-grid']
    },
    corePlugins: {
        preflight: false
    },
    plugins: [
        /* function({ addVariant, e }) {
            addVariant('app', ({ container }) => {
                container.walkRules(rule => {
                    rule.selector = `#app ${rule.selector}`;
                    console.log(rule.selector);
                });
            });
        }, */

        function({ addVariant, e }) {
            addVariant('supports-grid', ({ container, separator }) => {
                const containerSizes = ['xs', 'sm', 'md', 'lg'];

                const newRules = [];

                container.walkRules(rule => {
                    containerSizes.forEach(containerSize => {
                        const newRule = rule.clone();

                        newRule.selector = `.${containerSize} .${containerSize}\\:${newRule.selector.slice(1)}`;
                        newRules.push(newRule);
                        console.log(newRule.selector);
                    });
                });

                container.append(newRules);
            });
        }
    ]
};
