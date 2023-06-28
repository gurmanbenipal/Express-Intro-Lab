const students = [
    {student: 'Jay', passed: true},
    {student: 'Zaid', passed: true},
    {student: 'Brooke', passed: true},
    {student: 'Allen', passed: false}
];

const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/students', function(req, res) {
    res.render('index', { students: students });
});


app.listen(3000, function(){
    console.log("Server running on port 3000");
});
