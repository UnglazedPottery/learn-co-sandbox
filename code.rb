class Bicycle
 
  attr_reader :tire
  
    @@styleArray = []
 
    def initialize(tire, gears, style)
      @tire = tire
      @gears = gears
      @style = style
      @@styleArray << @style
    end
 
    def tire_size
      self.tire
    end
 
    def gears
      @gears
    end
 
    def self.styles
      @@styleArray
    end
end
 
mongoose = Bicycle.new(4, 10, "BMX")
#puts mongoose.gears
puts Bicycle.styles