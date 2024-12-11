import csv

def convert_tsv_to_txt(input_tsv, output_txt):
    try:
        with open(input_tsv, 'r', newline='', encoding='utf-8') as tsv_file:
            reader = csv.reader(tsv_file, delimiter='\t')
            
            with open(output_txt, 'w', newline='', encoding='utf-8') as txt_file:
                writer = csv.writer(txt_file, delimiter=',')
                
                for row in reader:
                    # Reemplazar celdas vacías con "no_data"
                    updated_row = [cell if cell.strip() else "no_data" for cell in row]
                    writer.writerow(updated_row)
        
        print(f"Archivo convertido exitosamente: {output_txt}")
    except Exception as e:
        print(f"Error al procesar el archivo: {e}")

# Ruta del archivo .tsv de entrada y .txt de salida
input_tsv = "manjaro 18.tsv"
output_txt = "manjaro_18.txt"

# Llamar a la función
convert_tsv_to_txt(input_tsv, output_txt)
