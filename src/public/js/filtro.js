function filtrando() {
    var input, filter, table, tr, td, i, j, visible;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByClassName("filtrar");
  
    for (i = 0; i < tr.length; i++) {
      visible = false;
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          visible = true;
        }
      }
      if (visible === true) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }