let tableBody = $('#table-body');

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        url : 'https://gist.githubusercontent.com/thenaveensaggam/6c8d4582e02dd52ef02419f43356e342/raw/293c70de60d23d17b40712e63348d5accbc34167/08022019.json',
        method : 'GET',
        success : function(data) {
            processData(data , 'bg-success');
        }
    });
});

// Javascript AJAX
$('#js-ajax').click(function () {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://gist.githubusercontent.com/thenaveensaggam/6c8d4582e02dd52ef02419f43356e342/raw/293c70de60d23d17b40712e63348d5accbc34167/08022019.json',true);

    // Send the Request
    http.send();

    // if Server is ready with response
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
                processData(theData,'bg-primary');
        }
    };
});

// Process the data
let processData = (theData,color) => {
    let employees = JSON.parse(theData);
    displayEmployees(employees , color);
};

// display Employees
let displayEmployees = (employees,color) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr class="${color} text-white">
                        <td>
                            <img src="${employee.image}" class="img-fluid img-thumbnail">
                        </td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.country}</td>
                        <td>${employee.state}</td>
                        <td>${employee.city}</td>
                      </tr>`;
    });
    tableBody.empty().append(tableRows);
};