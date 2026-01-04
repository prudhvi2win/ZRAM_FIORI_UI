sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travelbooking/test/integration/pages/TravelList",
	"travelbooking/test/integration/pages/TravelObjectPage",
	"travelbooking/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travelbooking') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

