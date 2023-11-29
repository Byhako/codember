cadena = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'


n = 0
resultado = ''

for x in cadena:
    if x == '&':
        print(n)
        resultado = resultado + str(n)
    elif x == '#':
        n = n + 1
    elif x == '@':
        n = n - 1
    else:
        n = n * n


print('Resultado ->', resultado)
