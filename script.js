const expenInp = document.querySelector("#expenseForm");
const expenList = document.querySelector("#expenseList")

expenInp.addEventListener('submit', (event)=>{

    event.preventDefault();

    let description = document.querySelector("#description").value;
    let catgory = document.querySelector("#catgory").value;
    let amount = document.querySelector("#amount").value;

    if(document && catgory && !isNaN(amount)){
        let rowNew = document.createElement("tr")
    
        rowNew.innerHTML = `<td>${description}</td> <td>${catgory}</td> <td> <i class="fa-solid fa-indian-rupee-sign"></i> ${amount}</td>`;

        expenList.appendChild(rowNew);

    }else{
        alert("Add Expense: ON FIELD")
    }

})
const educ = document.getElementById("education")
educ.innerHTML = `
<i class="fa-solid fa-indian-rupee-sign">Education</i>
`

