# 引数
def helo(name)
    puts("Hello," + name + "!")
end

helo("Taro")
helo("Hanako")

# 返り値
def helo(name)
    return "Hello," + name + "!"
end

puts(helo("Sachiko"))
