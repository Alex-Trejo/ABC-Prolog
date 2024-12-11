import csv

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
                new_row = "vulnerability_Mac-Os-X-11.0.1(" + ",".join(modified_row) + ")."
                
                # Escribir la fila modificada en el nuevo archivo
                output_file.write(new_row + "\n")

        print(f"Archivo modificado exitosamente: {output_txt}")
    except Exception as e:
        print(f"Error al procesar el archivo: {e}")

# Ruta del archivo .txt de entrada y .txt de salida
input_txt = "Mac-Os-X-11.0.1.txt"
output_txt = "V2_Mac-Os-X-11.0.1.txt"

# Llamar a la función
modify_txt(input_txt, output_txt)
