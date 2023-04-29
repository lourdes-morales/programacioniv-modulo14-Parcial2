import requests

url = 'http://localhost:5000/datos_excel'
response = requests.get(url)

if response.status_code == 200:
    datos_excel = response.json()
    print(datos_excel)
else:
    print(f"Error al obtener los datos: {response.status_code}")