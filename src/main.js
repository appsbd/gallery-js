import { createApp } from 'vue';
import Gallery from "@/components/Gallery";


const getOptions=function(elm){
    let data_val = {};
    let data_options = {};
    try {
        data_val = window[elm.getAttribute('data-val')] ?? {};
    } catch (e) {
        data_val = {};
    }
    try {
        data_options = JSON.parse(elm.getAttribute('data-json'))
    } catch (e) {
        data_options = {};
    }
    return {...data_val,...data_options};
}
const ClassCreateApp=function (component,cls){
    try {
        const gallery_components = document.getElementsByClassName(cls);
        for (let elm of gallery_components) {
            const options = getOptions(elm);
            console.log(options);
            createApp(component, options)
                // .directive('tooltip', VTooltip)
                // .directive('close-popper', VClosePopper)
                // .component('VDropdown', Dropdown)
                // .component('VTooltip', Tooltip)
                // .component('VMenu', Menu)
                .mount(elm);
        }
    }catch (e) {
        console.log(e);
    }
}
const gallery_create_elements=function() {
    ClassCreateApp(Gallery,'ap-gallery');
}

try{

    (function ($, elementor) {

        'use strict';


        var gallery = function ($scope, $) {
            var $logogrid = $scope.find('.ap-gallery');
            if (!$logogrid.length) {
                return;
            }
            const options = getOptions($logogrid[0]);
            createApp(Gallery, options).mount($logogrid[0]);
        };
        jQuery(window).on('elementor/frontend/init', function () {
            elementorFrontend.hooks.addAction('frontend/element_ready/gallery_widget.default', gallery);
        });

    }(jQuery, window.elementorFrontend));
}catch (e) {
    document.addEventListener("DOMContentLoaded", function() {
        gallery_create_elements();
    });

}
