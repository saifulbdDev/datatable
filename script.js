


 $(document).ready(function () {
   var table = $("#example").DataTable({
     paging: true,
    
     pageLength: 10,
     ajax: function (data, callback, settings) {
       console.log(data, "data, callback, settings");
       $.ajax({
         url: "http://13.232.225.92:8001/api/total-person",
         type: "GET",
         // contentType: "application/x-www-form-urlencoded", // Check if this is necessary
         data: {
           page: Math.floor(data.start / data.length) + 1,
           size: data.length
         },
         success: function (apiResponse, textStatus, jQxhr) {
           console.log(apiResponse, "apiResponse");
           callback({
             //  draw: data.draw, // Include draw property if necessary
             data: apiResponse.data.results,
             recordsTotal: apiResponse.data.count,
             recordsFiltered: apiResponse.data.count
           });
         },
         error: function (jqXhr, textStatus, errorThrown) {
           // Handle errors
         }
       });
     },
     serverSide: true,
     columns: [
       { data: "id" },
       { data: "name" },
       { data: "email" },
       { data: "phone_number" },
       { data: "address" }
     ]
   });
 });