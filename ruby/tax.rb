class Tax
    @@zeiritsu = 0.08
    def self.zeiritsu= (n)
        @@zeiritsu = n
    end
    def self.priceWithTax(price)
            return (price * (1.0 + @@zeiritsu)).to_i
    end
    def self.tax(price)
        return (price * @@zeiritsu).to_i
    end
end

price = 12300
puts("価格:" + price.to_s)
puts("税込:" + Tax.priceWithTax(price).to_s)
puts("税額:" + Tax.tax(price).to_s)

Tax.zeiritsu = 0.05
puts("※消費税率5%だったら……")
puts("税込;" + Tax.priceWithTax(price).to_s)
puts("税額:" + Tax.tax(price).to_s)
