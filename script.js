$(document).ready(function () {
  var table = $("#example").DataTable({
    paging: true,
    pageLength: 10,
    serverSide: true,
    ajax: {
      url: "http://13.232.225.92:8001/api/total-person",
      type: "GET",
      data: function (data) {
        var page = Math.floor(data?.start / data?.length) + 1;
        var size = data?.length;
        return { page: page, size: size };
      },
      dataSrc: function (apiResponse) {
        var recordsTotal = apiResponse?.data?.count;
        var recordsFiltered = recordsTotal;
        $.extend(apiResponse, {
          recordsTotal: recordsTotal,
          recordsFiltered: recordsFiltered
        });
        return apiResponse?.data?.results;
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.error("Error:", errorThrown);
      }
    },
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "email" },
      { data: "phone_number" },
      { data: "address" }
    ]
  });
});
