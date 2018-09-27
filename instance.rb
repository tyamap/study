class Helo
    attr_accessor:name

    def initialize(name="noname")
        @name = name
    end
    def say
        puts("Hello," + @name +"!!")
    end
end

obj = Helo.new("Hanako")
obj.say

obj.name ="taro"
obj.say