a = 12300
x = a
y = 2
puts(a.to_s + "の素因数")
while  true
    if x % y == 0 then
        x /= y
        puts(y)
    else
        y += 1
    end
    if  x / 2 < y then
        break
    end
end
if x > 1 then
    puts(x)
end
