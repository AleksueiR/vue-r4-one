var Vue = window.r4One.Vue;

// store Vue component on the global scope
r4One['smart-button'] = Vue.component('smart-button', {
    data: function() {
        return {
            count: 0
        };
    },
    render: function(h) {
        return h('div', [
            h(
                'button',
                {
                    on: {
                        click: () => (this.count += 10)
                    }
                },
                [h('span', this.count)]
            )
        ]);
    }
});
