class Helo
    def say
        puts("Hello!!")
    end
    def sayTo(name)
        puts("Hello," + name + "!!")
    end
end

obj = Helo.new
obj.say
obj.sayTo("Taro")
