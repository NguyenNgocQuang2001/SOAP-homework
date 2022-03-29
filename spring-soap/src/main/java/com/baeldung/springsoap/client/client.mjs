import fetch from "node-fetch";
import ReadLine from "readline";
const reader = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("nhap bieu thuc : ", data => {

    data = data.split(" ");
    var a = data[0];
    var b = data[2];
    var operator = data[1];

    fetch(`http://localhost:8080/ws/calculator.wsdl`, {

        method : 'POST',
        headers: {
            'Content-Type': "text/xml"
        },
        
        body : `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:gs="http://www.baeldung.com/springsoap/gen"><soapenv:Header/><soapenv:Body><gs:calculatorRequest><gs:a>${a}</gs:a><gs:b>${b}</gs:b><gs:operator>${operator}</gs:operator></gs:calculatorRequest></soapenv:Body></soapenv:Envelope>`

    })
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(error => console.log('Error caught: ' + error));

    reader.close();
});