# Catpants

Password strength calculator on key up...with a cat emoji if your password is good enough.
Everyone needs a strength calculator, everyone loves emoji's.  Win win here!  No longer relies on jQuery, vanilla javascript meow 😻!

I believe both versions are in good working order if you follow the instructions laid out below.  If you encounter any errors, please notify me but be certain your usage is in accordance with the documentaion below.

## Installation

Add this line to your application's Gemfile:

### **** Specify gem version  ****

```ruby
gem 'catpants', '2.3.0'
```

And execute:
```ruby
$ bundle
```

## Usage

You need to require this in app.js
```ruby
//= require catpants
```

You must have a html label element for the password field with a class of catpants.
```html
<label class="catpants">
```
and a class of password on the password input
```html
<input class="password">
```
Here's a RAILS example with form helpers
```html
<div class="form-group">
  <%= label_tag :password, "Password", class:"catpants" %>
  <%= password_field_tag :password, "", class: "password" %>
</div>
```
RAILS with Simple Form example
```erb
<%= f.input :password, label_html: { class: 'catpants' }, input_html: {class:'password'} %>
```



Boom. Done.



## Contributing

Bug reports and pull requests are welcome on GitHub at http://github.com/parkerdan/catpants. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
