document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('data-table');
    const tableBody = table.getElementsByTagName('tbody')[0];
  
    // Cambia la URL según el archivo HTML (data, metadata_countries, metadata_indicators)
    fetch('/data')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((row) => {
          const newRow = tableBody.insertRow();
          // Cambia las propiedades del objeto según tus datos
          newRow.innerHTML = `
            <td>${row['Country Code']}</td>
            <td>${row['Country Name']}</td>
            <td>${row['Indicator Code']}</td>
            <td>${row['Indicator Name']}</td>
            <!-- Agrega más celdas aquí -->
          `;
        });
      })
      .catch((error) => console.error('Error:', error));
  });


  $(document).ready(function() {
    var tabla = $('#tabla-datos').DataTable({
      "order": [[0, "asc"]],
      "pageLength": 25,
      "lengthMenu": [25, 50, 100],
      "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    });
  
    $('#filtro').on('keyup', function() {
      tabla.search($(this).val()).draw();
    });
  });


  $(document).ready(function() {
    var tabla = $('#tabla-countries').DataTable({
      "order": [[0, "asc"]],
      "pageLength": 25,
      "lengthMenu": [25, 50, 100],
      "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    });
  
    $('#filtro').on('keyup', function() {
      tabla.search($(this).val()).draw();
    });
  });

  $(document).ready(function() {
    var tabla = $('#tabla-indicators').DataTable({
      "order": [[0, "asc"]],
      "pageLength": 25,
      "lengthMenu": [25, 50, 100],
      "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    });
  
    $('#filtro').on('keyup', function() {
      tabla.search($(this).val()).draw();
    });
  });