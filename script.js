$(document).ready(function() {
    // Adicionar tarefa à lista
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var task = $('#task-input').val();
        
        if (task) {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val(''); // Limpa o campo de texto
        }
    });

    // Marcar tarefa como concluída
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Limpar a lista de tarefas
    $('#clear-tasks').click(function() {
        $('#task-list').empty(); // Remove todos os itens da lista
    });
});
