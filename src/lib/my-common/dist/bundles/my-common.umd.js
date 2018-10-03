(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@my/common', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.my = global.my || {}, global.my.common = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CommonComponent = (function () {
        function CommonComponent() {
        }
        /**
         * @return {?}
         */
        CommonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CommonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-common',
                        template: "<p>\n  common works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CommonComponent.ctorParameters = function () { return []; };
        return CommonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MyCommonModule = (function () {
        function MyCommonModule() {
        }
        MyCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            CommonComponent
                        ],
                        exports: [
                            CommonComponent
                        ]
                    },] }
        ];
        return MyCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.MyCommonModule = MyCommonModule;
    exports.ɵa = CommonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY29tbW9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG15L2NvbW1vbi9jb21tb24uY29tcG9uZW50LnRzIiwibmc6Ly9AbXkvY29tbW9uL215LWNvbW1vbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbW1vbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbW1vbkNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29tbW9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNeUNvbW1vbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBU0U7U0FBaUI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2FBQ0M7O29CQVZGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLHdDQUFzQzs7cUJBRXZDOzs7OzhCQU5EOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRTs0QkFDWixlQUFlO3lCQUNoQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1AsZUFBZTt5QkFDaEI7cUJBQ0Y7OzZCQWREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=