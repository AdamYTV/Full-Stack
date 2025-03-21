def soma (x,y):
    res = x + y

    return res

print (soma(23, 53))


def media (x,y):
    res = (x + y) / 2

    return res

print ("resuldado da media", media(23,53))
print (media(120,4))


def media (x,y):
    media = (x + y) / 2
    print (media)
media (23,53)
media (120,4)


def maior (x,y):
    if x>y:
        print(x)
    else:
        print(y)
maior(23,53)


def mult (x,y):
    if x % y == 0:
        print("true")
    else:
        print("false")
mult(23,53)

def pode_doar(genero,peso):
    if (genero == "F" and peso >= 50) or (genero == "M" and peso >= 60):
        return True
    else:
        return False

g = input("Informe o genero (F / M): ")
p = int(input("Informe o peso:"))

if pode_doar(g, p):
    print("Pode doar sangue!")
else:
    print("Nao pode doar sangue!")
    

dia = int(input("digite dia"))
mes = int(input("digite mes"))
ano = int(input("digite ano"))

if dia * mes == ano % 100:
    print(dia,"/",mes,"/",ano, "eh uma data magica")
else:
    print("nao eh uma data magica")
