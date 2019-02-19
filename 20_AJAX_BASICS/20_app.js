let tableBody = $('#table-body');

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        url : 'https://gist.githubusercontent.com/thenaveensaggam/6c8d4582e02dd52ef02419f43356e342/raw/422297930961fe610f7447b336dd74ad648696c1/08022019.json',
        method : 'GET',
        success : function(data) {
            processData(data);
        }
    });
});

// Javascript AJAX
$('#js-ajax').click(function () {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://gist.githubusercontent.com/thenaveensaggam/6c8d4582e02dd52ef02419f43356e342/raw/422297930961fe610f7447b336dd74ad648696c1/08022019.json',true);

    // Send the Request
    http.send();

    // if Server is ready with response
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
            let theData = http.responseText;
                processData(theData);
        }
    };
});

// Process the data
let processData = (theData) => {
    let employees = JSON.parse(theData);
    displayEmployees(employees);
};

// display Employees
let displayEmployees = (employees) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.contry}</td>
                      </tr>`;
    });
    tableBody.empty().append(tableRows);
};