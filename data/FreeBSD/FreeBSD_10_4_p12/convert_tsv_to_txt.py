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

def modify_txt(input_txt, output_txt):
    try:
        with open(input_txt, 'r', newline='', encoding='utf-8') as txt_file:
            # Leer las filas del archivo .txt
            rows = txt_file.readlines()

        with open(output_txt, 'w', newline='', encoding='utf-8') as output_file:
            for row in rows:
                # Eliminar los saltos de línea y dividir por comas
                row = row.strip()

                # Reemplazar las celdas vacías por "no_data"
                modified_row = [cell if cell.strip() else "no_data" for cell in row.split(',')]

                # Crear la nueva fila con el formato requerido
                new_row = "vulnerability_freebsd_10_4_p12(" + ",".join(modified_row) + ")."
                
                # Escribir la fila modificada en el nuevo archivo
                output_file.write(new_row + "\n")

        print(f"Archivo modificado exitosamente: {output_txt}")
    except Exception as e:
        print(f"Error al procesar el archivo: {e}")

# Ruta del archivo .tsv de entrada y .txt de salida
input_tsv = "vulnerabilities.tsv"
output_txt = "freebsd_10_4_p12.txt"
newOutput_txt = "V2freebsd_10_4_p12.txt"

# Llamar a la función
convert_tsv_to_txt(input_tsv, output_txt)
modify_txt(output_txt, newOutput_txt)
