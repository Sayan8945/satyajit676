let bookNow=document.querySelector('.book');
// let from_to=document.querySelector('.bb');

showDate(()=>{
    const selectedDate = document.getElementById("datePicker").value;
    document.getElementById("displayDate").innerHTML = selectedDate;}) 

bookNow.addEventListener('click',()=>{
    alert('Booking feature coming soon!');
    
})

