const listItem = document.querySelectorAll('.mt-10 .col-md-2 .list-group .list-group-item');




listItem.forEach(function (li) {
    li.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = '#e3081d';
    });
    li.addEventListener('mouseout', function (e) {
        e.target.style.backgroundColor = '#fff';
    });
});