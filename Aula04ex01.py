a = int(input("codigo_de_origem"))
b = int(input("preco"))

if a==1:
    print(f"{b}, preco procedencia sul")

if a==2:
    print(f"{b}, procedencia norte")

if a==3:
    print(f"{b}, procedencia leste")

if a==4:
    print(f"{b}, procedencia oeste")

if a==5 or a==6:
    print(f"{b}, procedencia nordeste")

if a==7 or a==8 or a==9:
    print(f"{b}, procedencia sudeste")

if a>=10 and a<=20:
    print(f"{b}, procedencia centro-oeste")

if a>=25 and a<=30:
    print(f"{b}, procedencia nordeste")

else:
    print("importado")

