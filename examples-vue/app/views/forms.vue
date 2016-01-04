<template lang="jade">

.grid.padding
  .u-sm-8
    .box.padding
      form(action="/").form
        fieldset
          .form-control
            label(for="name") Name
            input#name(type="text" placeholder="input your name")
          .form-control
            label(for="password") Password
            input#password(type="password" placeholder="input password")
          .form-control
            label(for="number") Number
            input#number(type="number" placeholder="input number")
          .form-control
            label(for="email") Email
            input#email(type="email" placeholder="input email")
          .form-control
            label(for="url") URL
            input#url(type="url" placeholder="input url")
          .form-control
            label(for="select") Select
            select#select(name="select")
              option(value="1") Option1
              option(value="2") Option2
              option(value="3") Option3
          .form-control
            label(for="textarea") Textarea
            textarea#textarea(rows="5")
          .form-control
            label.field-check
              input(type="checkbox" name="check1")
              | <i></i>Option1
            label.field-check
              input(type="checkbox" name="check1")
              | <i></i>Option2
            label.field-check
              input(type="checkbox" name="check1")
              | <i></i>Option3
          .form-control
            label.field-radio
              input(type="radio" name="radio1")
              | <i></i>Option1
            label.field-radio
              input(type="radio" name="radio1")
              | <i></i>Option2
            label.field-radio
              input(type="radio" name="radio1")
              | <i></i>Option3
          .form-control
            label.field-switch
              input(type="checkbox" name="check2")
              | <i></i>A
            label.field-switch
              input(type="checkbox" name="check2")
              | <i></i>B
            label.field-switch
              input(type="checkbox" name="check2")
              | <i></i>C
          .form-control
            label.field-switch
              input(type="radio" name="radio2")
              | <i></i>A1
            label.field-switch
              input(type="radio" name="radio2")
              | <i></i>A2
            label.field-switch
              input(type="radio" name="radio2")
              | <i></i>A3

  .u-sm-8
    .box.padding
      form(action="/").form
        fieldset
          .form-control
            label(for="name2") Name
            input(type="text" placeholder="input your name")#name2.field-md
          .form-control
            label(for="password2") Password
            input(type="password" placeholder="input password")#password2.field-md
          .form-control
            label(for="content2") Textarea
            textarea#content2(rows="5").field-md

  .u-sm-8
    .box.padding
      form(action="/").form
        fieldset
          .form-control.u-sm-8
            label(for="name") Name
            input#name(type="text" placeholder="input your name")
          .form-control.u-sm-8
            label(for="password") Password
            input#password(type="password" placeholder="input password")
          .form-control.u-sm-8
            label(for="number") Number
            input#number(type="number" placeholder="input number")
          .form-control.u-sm-8
            label(for="email") Email
            input#email(type="email" placeholder="input email")
          .form-control.u-sm-8
            label(for="url") URL
            input#url(type="url" placeholder="input url")
          .form-control.u-sm-8
            label(for="select") Select
            select#select(name="select")
              option(value="1") Option1
              option(value="2") Option2
              option(value="3") Option3
          .form-control.u-sm-16
            label(for="textarea") Textarea
            textarea#textarea(rows="5")

  .u-sm-8
    .box.padding
      form(action="/").form
        fieldset
          .form-control.u-sm-8
            label(for="name") Name
            input#name(type="text" placeholder="input your name").field-md
          .form-control.u-sm-8
            label(for="password") Password
            input#password(type="password" placeholder="input password").field-md
          .form-control.u-sm-8
            label(for="number") Number
            input#number(type="number" placeholder="input number").field-md
          .form-control.u-sm-8
            label(for="email") Email
            input#email(type="email" placeholder="input email").field-md
          .form-control.u-sm-8
            label(for="url") URL
            input#url(type="url" placeholder="input url").field-md
          .form-control.u-sm-8
            label(for="select") Select
            select#select(name="select").field-md
              option(value="1") Option1
              option(value="2") Option2
              option(value="3") Option3
          .form-control.u-sm-16
            label(for="textarea") Textarea
            textarea#textarea(rows="5").field-md

  .u-sm-8
    .box.padding
      h3 .tag-input
      tag-input(v-bind:tags.sync="tags")

  .u-sm-8
    .box.padding
      h3 .tag-input
      tag-input(v-bind:tags.sync="tags2" label-style="primary")

</template>

<script>

// components
import tagInput from 'components/taginput.vue';

export default {

  data() {
    return {
      tags: ['hello', 'dashboard'],
      tags2: ['hello', 'dashboard']
    };
  },

  components: { tagInput },

  ready() {
    this.$dispatch('content-change');
  }

};

</script>
