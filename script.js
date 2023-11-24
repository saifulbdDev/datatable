$(document).ready(function () {
  var table = $("#example").DataTable({
    // scrollCollapse: true,
    // scrollY: "800px",
    ajax: {
      url: "http://13.232.225.92:8001/api/total-person",
      dataSrc: "data"
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
