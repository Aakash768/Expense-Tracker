$(document).ready(function(){
    let totalAmount = 0;
    let val = 0

    $('#expenseForm').on('submit', function(e){
        e.preventDefault();

        const description = $('#description').val();
        const amount = parseFloat($('#amount').val());

        $('#expenseList').append(`
            <li class="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
                <span>${description}</span>
                <span class="font-bold">₹${parseFloat(amount).toFixed(2)}</span>
            </li>
        `);
        totalAmount += amount;
        $('#amountValue').text(totalAmount.toFixed(2))
        
        $('#totalButton').removeClass('hidden')


        $('#description').val('');
        $('#amount').val('')

    });
    $('#totalButton').on('click', function(){
        $('#totalAmount').removeClass('hidden')
    });
});
