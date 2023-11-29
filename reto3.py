validas = []
error = []

with open('./data3.txt', 'r') as file:
    linea = file.readline()

    while linea != '':
    # for i in range(5):
        [key, clave] = linea.split(':')
        [rango, letra] = key.split(' ')
        [start, end] = rango.split('-')

        apariciones = len(filter(lambda x: x == letra, clave))

        if (apariciones>=int(start) and apariciones<=int(end)):
            validas.append(clave)
        else:
            error.append(clave)

        linea = file.readline()


print(len(validas))
print(len(error))
print(error[41])
print(error[12])