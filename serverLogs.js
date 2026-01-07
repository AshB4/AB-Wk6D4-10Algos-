//Server Logs: .forEach() to print "Status received: [code]" for [200, 404, 500].
// server logs or monitoring systems to track response codes from requests.
const statusCodes = [200, 404, 500, 301, 302];
function serverLogs(arr) {
    arr.forEach(code => console.log(`Status received: ${code}`));
}   
serverLogs(statusCodes);