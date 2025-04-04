lista =[]

for i in range(5):
    nro = int(input("Digite um numero: "))
    lista.append(nro)

print(lista)
print(lista[0])
print(lista[4])

T = [11, 7, 2, 4]
menor_numero = min(T)

print(menor_numero)

lista = []

for i in range(10):
    numero = int(input("Digite um numero: "))
    lista.append(numero)
print(lista)

maior_numero = max(lista)
print(maior_numero)

for indice in range(len(lista)):
    if lista[indice] == maior_numero:
        print(indice)


lista = []

for i in range(10):
    numero = int(input("Digite um numero: "))
    lista.append(numero)
print(f"Numero: {lista}")

soma_par = 0
for numero in lista:
    if numero %2 == 0:
        soma_par += numero 


print(f"Soma dos pares: {soma_par}")


lista = []


quantidade = int(input("DIgite a quantidade de numeros: "))

for i in range(quantidade):
    nmr = int(input("DIgite um numero:"))
    lista.append(nmr)

for i in range(nmr, -1, -1):
    print(lista[i])