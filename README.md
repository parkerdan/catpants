# Catpants

Password strength calculator on key up...with a cat emoji if your password is good enough.
Everyone needs a strength calculator, everyone loves emoji's.  Win win here!  No longer relies on jQuery, vanilla javascript meow 😻!

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'catpants', '~> 2.1.2'
```

And then execute:
```ruby
$ bundle
```

## Usage

You need to require this in app.js
```ruby
//= require catpants
```

You must have a html label element for the password field with id of catpants.
```html
<label id="catpants" for="password">
```
and an id of password on the password input
```html
<input type="password" name="password" id="password" value="" class="form-control">
```
Here's a simple RAILS example
```html
<div class="form-group">
  <%= label_tag :password, "Password",id:"catpants" %>
  <%= password_field_tag :password, "", class: "form-control" %>
</div>
```
Simple Form example
```ruby




Boom. Done.



## Contributing

Bug reports and pull requests are welcome on GitHub at http://github.com/parkerdan/catpants. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
