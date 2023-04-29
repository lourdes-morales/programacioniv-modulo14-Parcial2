from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

def read_excel_sheet_to_dict(archivo_excel, indice_hoja):
    dataframe = pd.read_excel(archivo_excel, engine='openpyxl', sheet_name=indice_hoja)
    datos = dataframe.to_dict(orient='records')
    return datos

archivo_excel = 'API_SH.IMM.MEAS_DS2_en_excel_v2_5360859.xlsx'

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

# Rutas de la API que devuelven tablas
@app.route('/api/data', methods=['GET'])
def get_data():
    datos = read_excel_sheet_to_dict(archivo_excel, indice_hoja=0)
    years = [str(year) for year in range(1960, 2023)]
    return render_template('data.html', datos=datos, years=years)

@app.route('/api/metadata_countries', methods=['GET'])
def get_metadata_countries():
    datos = read_excel_sheet_to_dict(archivo_excel, indice_hoja=1)
    return render_template('metadata_countries.html', datos=datos)

@app.route('/api/metadata_indicators', methods=['GET'])
def get_metadata_indicators():
    datos = read_excel_sheet_to_dict(archivo_excel, indice_hoja=2)
    return render_template('metadata_indicators.html', datos=datos)


if __name__ == '__main__':
    app.run(debug=True)
