$(document).ready(function() {
         	$("#holidays").DataTable();  
           var testDataUrl = "https://holidayapi.com/v1/holidays?key=57bb655b-0bad-4da8-96c9-caaa500a5e91&country=US&year=2018"
		   //ajax call to retrieve data from API using APIKEY
             $.ajax({
               type: 'GET',
               url: testDataUrl,
               contentType: "text/plain",
               dataType: 'json',
               success: function (data) {
               var holidays = data.holidays;
			   //looping through retreived list of holidays and populating the table
         	  $.each( holidays, function(index,value ) { 
            $('#holidays').dataTable().fnAddData( [
         		index+1,
         	    value.name,
                 value.date,
         		value.observed,
         		value.public,
         		value.country		
               ]);
             });
               },
               error: function (e) {
                 console.log("error: " + JSON.stringify(e));
               }
             }); 
         } );
         