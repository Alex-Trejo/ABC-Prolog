from pyswip import Prolog

def consulta_vulnerabilidades(producto):
    # Crear una instancia de Prolog
    prolog = Prolog()

    # Cargar el archivo .pl
    prolog.consult("se.pl")

    # Consultar vulnerabilidades publicadas antes de la fecha límite
    
    # Ejecutar la consulta
    resultados = list(prolog.query(f'tiene_vulnerabilidades("{producto}", Vulnerabilidades).'))
    print(resultados[0]["Vulnerabilidades"])
    # # Mostrar los resultados
    # if result:
    #     for item in result:
    #         print("Vulnerabilidad encontrada:")
    #         for vulnerability in item["ListaVulnerabilidades"]:
    #             print(f"ID: {vulnerability[0]}, Vendor: {vulnerability[1]}, Producto: {vulnerability[2]}, Version: {vulnerability[3]}, Fecha de Publicación: {vulnerability[4]}")
    # else:
    #     print("No se encontraron vulnerabilidades.")

# Llamar a la función con la fecha límite deseada
consulta_vulnerabilidades("Windows 10")