sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'emp',
            componentId: 'EmployeesList',
            contextPath: '/Employees'
        },
        CustomPageDefinitions
    );
});