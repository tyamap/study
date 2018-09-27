class Helo
    def initialize(name="noname")
        @name = name
    end
    def say
        puts("Hello," + @name +"!!")
    end
end

obj = Helo.new("Hanako")
obj.say
