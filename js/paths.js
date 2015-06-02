define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_STANDARDS: 'faostat-ui-standards',
            faostat_ui_standards: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});