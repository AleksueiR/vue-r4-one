var Vue = window.r4One.Vue;
var app = window.r4One.app;

Vue.component('dumb-button', {
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
                        click: () => this.count++
                    }
                },
                [h('span', this.count)]
            )
        ]);
    }
});

app.$store.dispatch('panels/addPanelItem', { value: { moduleName: 'dumb-button' } });
