module Jekyll
  class CsvConverter < Converter
    def matches(ext)
      ext =~ /csv/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      lines = content.gsub("\r", "\n").gsub("\r\n", "\n").split("\n")
      puts "LINES: #{lines.size}"
      header = lines.shift.split(",")

      output_table = "<table class=\"big_table\"><thead><tr>"
      header.each do |head|
        output_table += "<th>#{head}</th>\n"
      end

      output_table += "</tr></thead><tbody>"
      lines.each do |line|
        output_table += "<tr>\n"
        data = line.split(",")
        data.each do |d|
          output_table += "<td>#{d}</td>\n"
        end
        output_table += "</tr>\n"
      end

      output_table += "</tbody></table>"

      output_table
    end
  end
end
