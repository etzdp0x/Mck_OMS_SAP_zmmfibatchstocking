sap.ui.define([], function () {
    "use strict";

    return {
       onInitSmartFilterBarExtension: function (oEvent) {
    var oSFB = oEvent.getSource();

    setTimeout(function () {
        oSFB.setFilterData({
            "$Parameter.p_keydate": new Date()
        });

        console.log(oSFB.getFilterData());
    }, 1000);
}
    };
});
