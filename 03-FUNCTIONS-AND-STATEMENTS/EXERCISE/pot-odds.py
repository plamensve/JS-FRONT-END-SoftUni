pot = float(input('Въведете ПОТ стойност:'))
call = float(input('Въедете стойност на залог:'))
outs = float(input('Въведете брой аутове:'))

result = call / (pot + call) * 100
out_chance = outs * 2

print(f'Pot Odds: {result:.2f}%')
print(f'Outs: {out_chance:.2f}%')