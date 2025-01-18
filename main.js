$(document).ready(function(){
        
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefas = $('#input-tarefas').val();
        const novaTarefa = $('<li></li>');
        $(`<a class="teste">${tarefas}</a>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        $('#input-tarefas').val('');
    })

    $('ul').on('click', 'a', function(){
        $(this).closest('li').attr('id', 'riscado'); 
    }) 
})
//By gui