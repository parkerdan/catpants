# Catpants

Password strength calculator on key up...with a cat emoji if your password is good enough!

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'catpants'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install catpants

## Usage

You need to require this in app.js BELOW jquery

//= require jquery

//= require catpants


You must have a html label element for the password field.

Simply add the class "catpants" to the label for your password form.

Simple form option like this   <%= f.input :password, label_html: { class: 'catpants' }  %>

Boom. Done.



## Contributing

Bug reports and pull requests are welcome on GitHub at http://github.com/parkerdan/catpants. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
