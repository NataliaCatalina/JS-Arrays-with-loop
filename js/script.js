//***********************************
//Testing my script if it is linked
//***********************************

console.log('js');

var studentsName = [];

$(document).ready(function(){

//javascript function for click event
  // document.getElementById('push').addEventListener('click', function(){
  //   console.log('pushed');
  // });

// jQuery function for click event
  $('#push').click(function(){
    console.log('pushed');




    // var studentName = document.getElementById('srudentName').vale;
    var studentName = $('#studentName').val();
    console.log(studentName);


// pushing the name received in the text box into the array
    studentsName.push(studentName)
    console.log(studentsName);

    console.log(studentsName.length);
  });

  $('#sort').click(function(){

    var fruits = ['Orange', 'Grapes', 'Cherry', 'Mango'];

    console.log(fruits);
    console.log(fruits.length); //finds the total number of values in the array
    console.log(fruits[3]);
    console.log(fruits.sort());
    console.log(fruits.reverse());
  });

  //Search
  $('#search').click(function(){
    // search for a programmingLanguage in the array
    var programmingLanguages = ['Javascript', 'PHP', 'Java', 'VisualBasic', 'C++'];
    console.log(programmingLanguages);



    var searchItem = $('#studentName').val();
    console.log(searchItem);
    console.log(programmingLanguages.includes('PSP'));

// searching for books having less than 500 pages
    var totalPages = [358, 292, 500, 704, 159]
    var selectedArray = [];
    console.log(totalPages); //showa the entire Arrays
    var i = 0;
    for (i = 0; i < totalPages.length; i++){
      if (totalPages[i] < 500){
        console.log(totalPages[i]);
        selectedArray.push(totalPages[i]);
        document.getElementById('result').innerHTML += totalPages[i] + '<br>';
        //document.getElementById('result').innerHTML = selectedArray;
      } //end if
    } //end of for
  });


//exercise employee
  var employeesName = [];
  var positions = [];


  $('#pushEmployee').click(function(){

    var employeeName = $('#employeeName').val();
    var position = $('#position').val();
    console.log(employeeName);
    console.log(position);

    employeesName.push(employeeName);
    positions.push(position);
      console.log(employeesName);
      console.log(positions);
      console.log(employeesName.sort());
      console.log(positions.sort());





  });

$('#searchEmployee').click(function(){
  var employeesList = ['miles', 'beula', 'natalia'];
  var searchEmployee = $('#employeeName').val();
  console.log(searchEmployee);
  console.log(employeesList.includes(searchEmployee));
});


});//document.ready()
