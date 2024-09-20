document.querySelector('.slider').addEventListener('click', function() {
    document.querySelectorAll('.pricing-box-month').forEach(function(monthBox) {
        monthBox.classList.toggle('hide');
    });
    document.querySelectorAll('.pricing-box-year').forEach(function(yearBox) {
        yearBox.classList.toggle('hide');
    });
});

document.getElementById('menu-btn').addEventListener('click',function() {
    console.log("click");
    document.getElementsByClassName('nav-list').style.marginLeft = '1rem'
    console.log(document.getElementById('nav-list'));
} )


let count = 0;
document.getElementById("menu-btn").addEventListener("click", function () {
  if (count === 0) {
    document.querySelectorAll(".nav-list").forEach((list) => {
      list.style.marginLeft = "0rem";
    });
    count = 1; // Set count to 1 after setting marginLeft to 1rem
  } else if (count === 1) {
    document.querySelectorAll(".nav-list").forEach((list) => {
      list.style.marginLeft = "-30rem";
    });
    count = 0; // Reset count to 0 after setting marginLeft to 15rem
  }
});

