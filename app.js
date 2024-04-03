// Função para buscar os códigos pelo nome
function buscar() {
    var input, filtro, tabela, tr, td, i, txtValue;
    input = document.getElementById("busca");
    filtro = input.value.toUpperCase();
    tabela = document.getElementById("tabela");
    tr = tabela.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // Busca pelo segundo td (nome)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = ""; // Mostra a linha se o texto for encontrado
            } else {
                tr[i].style.display = "none"; // Oculta a linha se o texto não for encontrado
            }
        }
    }
}