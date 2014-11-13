/*global define*/

define(function (require) {
    'use strict';

    var quickFilterView = require('text!../../view/quick-filter.html'),
        QuickFilterController = require('ng-admin/Crud/component/controller/directive/QuickFilterController');

    function QuickFilterDirective() {
        return {
            restrict: 'E',
            template: quickFilterView,
            controllerAs: 'quickFilterCtrl',
            controller: QuickFilterController
        };
    }

    QuickFilterDirective.$inject = [];

    return QuickFilterDirective;
});