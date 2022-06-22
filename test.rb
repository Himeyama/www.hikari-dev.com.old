#!/usr/bin/env ruby
# frozen_string_literal: true

require 'oauth'
require 'json'

consumer = OAuth::Consumer.new(ENV['TexTra_API_KEY'], ENV['TexTra_API_SECRET'])
@token = OAuth::AccessToken.new(consumer)

def translate(text)
  response = @token.post(
    ENV['TexTra_URI_EN_JA'], {
      key: ENV['TexTra_API_KEY'],
      type: 'json',
      name: ENV['TexTra_ID'],
      text: text
    }
  )
  JSON.parse(response.body)['resultset']['result']['text']
end

loop do
  print('🇺🇸> ')
  input = gets.chop
  break if input == ':q'

  puts("🇯🇵> #{translate(input)}")
end