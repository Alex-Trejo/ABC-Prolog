import re

def corregir_comillas(texto):
    # Reemplaza las comillas dobles duplicadas por una sola
    texto_corregido = re.sub(r'""', '"', texto)
    return texto_corregido

def leer_archivo(archivo_entrada):
    # Lee el contenido de un archivo de texto
    with open(archivo_entrada, 'r', encoding='utf-8') as file:
        return file.read()

def escribir_archivo(archivo_salida, texto):
    # Escribe el contenido corregido en un archivo de salida
    with open(archivo_salida, 'w', encoding='utf-8') as file:
        file.write(texto)

# Nombre del archivo de entrada y salida
archivo_entrada = 'entrada.txt'  # Cambia esto con el nombre de tu archivo de entrada
archivo_salida = 'salida.txt'    # Cambia esto con el nombre de tu archivo de salida

# Leer el contenido del archivo de entrada
texto = leer_archivo(archivo_entrada)

# Corregir las comillas dobles duplicadas
texto_corregido = corregir_comillas(texto)

# Escribir el contenido corregido en el archivo de salida
escribir_archivo(archivo_salida, texto_corregido)

# Mostrar el texto corregido (opcional)
print(texto_corregido)
