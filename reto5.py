import pandas as pd
import re

data = pd.read_csv('./database.csv', sep=',')

def validarEmail(email):
    try:
        indice_arroba = email.index('@')

        if indice_arroba < 1:
            return False

        puntos = email.split('.')
        arroba = puntos[-2].split('@')

        if len(arroba[1]) < 2 or puntos[-1] == '':
            return False

        return True
    except:
        return False

def validateLocation(location):
    patron = "^[A-Za-z ]+$"
    return True if re.match(patron, location) else False


invalid_user = ''

for id in range(0, 70):
    row = data.iloc[id]

    validId = False
    validName = False
    validEmail = False
    ValidAge = True
    ValidLocation = True

    if (isinstance(row['id'], str)): validId = row['id'].isalnum()
    if (isinstance(row['name'], str)): validName = row['name'].isalnum()
    if (isinstance(row['email'], str)): validEmail = validarEmail(row['email'])
    if (isinstance(row['age'], str)): ValidAge = row['age'].isdigit()
    if (isinstance(row['location'], str)): ValidLocation = validateLocation(row['location'])

    if validId and validName and validEmail and ValidAge and ValidLocation:
        pass
    else:
        invalid_user = invalid_user + row['name'][0]

print(invalid_user)
